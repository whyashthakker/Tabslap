// app/api/generate-free-daily/route.ts
import { sendDiscordNotification } from "@/service/discord-notify";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import fs from "fs";
import path from "path";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generationsFilePath = path.join(process.cwd(), "userGenerations.json");

function readUserGenerationsData() {
  try {
    const data = fs.readFileSync(generationsFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return {};
  }
}

function writeUserGenerationsData(data: any) {
  fs.writeFileSync(generationsFilePath, JSON.stringify(data));
}

export async function OPTIONS(request: Request) {
    const response = new NextResponse(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "chrome-extension://pkomeokalhjlopcgnoefibpdhphfcgam",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
    return response;
  }

export async function POST(request: Request) {
  const formData = await request.formData();
  const prompt = formData.get("prompt")?.toString() || "";
  const store_id = formData.get("store_id")?.toString() || "";
  const product_id = formData.get("product_id")?.toString() || "";
  const user_id = formData.get("user_id")?.toString() || "";
  const date = formData.get("date")?.toString() || "";
  const model = formData.get("model")?.toString() || "";

  try {
    // Read the existing user generations data from the JSON file
    const userGenerationsData = readUserGenerationsData();

    // Check if the user has an entry for the current date
    if (!userGenerationsData[user_id] || userGenerationsData[user_id].date !== date) {
      userGenerationsData[user_id] = {
        date: date,
        count: 1,
      };
    } else {
      // Increment the generation count for the user on the current date
      userGenerationsData[user_id].count++;
    }

    // Save the updated user generations data back to the JSON file
    writeUserGenerationsData(userGenerationsData);

    // Check if the user has reached the daily limit
    if (userGenerationsData[user_id].count <= 5) {
      const completion = await openai.chat.completions.create({
        model: model,
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        n: 1,
        stop: null,
        temperature: 0.8,
      });

      const comment = completion.choices[0].message.content;
      console.log("Generated comment:", comment);

      const response = new NextResponse(
        JSON.stringify({
          success: true,
          data: {
            generatedText: comment,
          },
        }),
        {
          status: 200,
          headers: {
            "Access-Control-Allow-Origin": "chrome-extension://pkomeokalhjlopcgnoefibpdhphfcgam",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        }
      );

      await sendDiscordNotification(
        `Generated comment for user ${user_id} on product ${product_id} at store ${store_id} on ${date} using model ${model}: ${comment}`
      );

      return response;
    } else {
      const errorResponse = new NextResponse(
        JSON.stringify({
          success: false,
          error: "Daily free generation limit exceeded 5/5. For Unlimited, please update your OpenAI API key and buy lifetime access from Extension settings.",
        }),
        {
          status: 429,
          headers: {
            "Access-Control-Allow-Origin": "chrome-extension://pkomeokalhjlopcgnoefibpdhphfcgam",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        }
      );

      return errorResponse;
    }
  } catch (error: any) {
    console.error(`Error generating comments: ${error.message}`);
    const errorResponse = new NextResponse(
      JSON.stringify({
        success: false,
        error: "Failed to generate comments",
      }),
      {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "chrome-extension://pkomeokalhjlopcgnoefibpdhphfcgam",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      }
    );
    return errorResponse;
  }
}