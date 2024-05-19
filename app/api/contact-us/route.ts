import { sendDiscordNotification } from "@/service/discord-notify";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { name, email, message } = body;

  try {
    const discordMessage = `
      New contact form submission:
      Name: ${name}
      Email: ${email}
      Message: ${message}
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