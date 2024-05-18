// app/api/generate-comment/route.ts
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
    const { postContent, commentingStyle, writingStyle, commentLength, platform } = await request.json();

    try {
        const prompt = `Generate a ${commentLength} comment on the below post in ${commentingStyle} style & ${writingStyle} tone for the following post content and platform: ${platform}:

${postContent}`;

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo-0125",
            messages: [
                {
                    role: "user",
                    content: prompt,
                },
            ],
            max_tokens: 100,
        });

        const comment = completion.choices[0].message.content;

        return new NextResponse(JSON.stringify({ comment }), { status: 200 });
    } catch (error: any) {
        console.error(`Error generating comment: ${error.message}`);
        return new NextResponse("Error generating comment", { status: 500 });
    }
}