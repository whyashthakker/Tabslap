import { sendDiscordNotification } from "@/service/discord-notify";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { feedbackType, dislikeReason } = body;

    try {
        const discordMessage = `
**Feedback Submitted**
**Feedback:** ${feedbackType}
**Dislike Reason:** ${dislikeReason}
`;
        await sendDiscordNotification(discordMessage);
        return new NextResponse(null, { status: 200 });
    } catch (error: any) {
        console.error(`Error sending notification: ${error.message}`);
        return new NextResponse(`Notification Error: ${error.message}`, {
            status: 500,
        });
    }
}