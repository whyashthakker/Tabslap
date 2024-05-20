// app/api/generate-free-daily/route.ts
import { sendDiscordNotification } from "@/service/discord-notify";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  const formData = await request.formData();
  const prompt = formData.get("prompt")?.toString() || "";
  const store_id = formData.get("store_id")?.toString() || "";
  const product_id = formData.get("product_id")?.toString() || "";
  const user_id = formData.get("user_id")?.toString() || "";
  const date = formData.get("date")?.toString() || "";
  const model = formData.get("model")?.toString() || "";

  try {
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

    await sendDiscordNotification(`Generated comment for user ${user_id} on product ${product_id} at store ${store_id} on ${date} using model ${model}: ${comment}`);

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
          "Access-Control-Allow-Origin": "chrome-extension://pkomeokalhjlopcgnoefibpdhphfcgam",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      }
    );

    return errorResponse;
  }
}