// app/api/generate-free-daily/route.ts
import { sendDiscordNotification } from "@/service/discord-notify";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { kv } from "@vercel/kv";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const dailyLimit = process.env.DAILY_FREE_LIMIT || 5;

async function readUserGenerationData(userId: string) {
  try {
    const data: string | null = await kv.get(`userGenerations:${userId}`);
    return data ? JSON.parse(data) : { date: "", count: 0 };
  } catch (error) {
    return { date: "", count: 0 };
  }
}

async function writeUserGenerationData(userId: string, data: any) {
  await kv.set(`userGenerations:${userId}`, JSON.stringify(data));
}

export async function OPTIONS(request: Request) {
  const origin = request.headers.get('origin');

  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': origin || '*',
      "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
      "Access-Control-Allow-Headers": "*",
    },
  });
}

export async function POST(request: Request) {
  if (request.method === 'OPTIONS') {
    return OPTIONS(request);
  }

  const formData = await request.formData();
  const prompt = formData.get("prompt")?.toString() || "";
  const store_id = formData.get("store_id")?.toString() || "";
  const product_id = formData.get("product_id")?.toString() || "";
  const user_id = formData.get("user_id")?.toString() || "";
  const date = formData.get("date")?.toString() || "";
  const model = formData.get("model")?.toString() || "";

  try {
    // Read the user-specific generation data
    const userGenerationData = await readUserGenerationData(user_id);

    // Check if the user has reached the daily limit
    if (userGenerationData.date === date && userGenerationData.count >= dailyLimit) {
      const errorResponse = new NextResponse(
        JSON.stringify({
          success: false,
          error: `Daily free generation limit exceeded ${dailyLimit}/${dailyLimit}. For Unlimited, please update your OpenAI API key and buy lifetime access from Extension settings.`,
        }),
        {
          status: 429,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
            "Access-Control-Allow-Headers": "*",
          },
        }
      );

      return errorResponse;
    }

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

    // Increment the count only if the response is successful
    if (userGenerationData.date !== date) {
      userGenerationData.date = date;
      userGenerationData.count = 1;
    } else {
      userGenerationData.count++;
    }

    // Write the updated user-specific generation data
    await writeUserGenerationData(user_id, userGenerationData);

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
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          "Access-Control-Allow-Headers": "*",
        },
      }
    );

    await sendDiscordNotification(
      `Generated comment for user ${user_id} on product ${product_id} at store ${store_id} on ${date} using model ${model}: ${comment}`
    );

    return response;
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
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          "Access-Control-Allow-Headers": "*",
        },
      }
    );
    return errorResponse;
  }
}