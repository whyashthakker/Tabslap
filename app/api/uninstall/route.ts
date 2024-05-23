import { sendDiscordNotification } from "@/service/discord-notify";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { userId, reason, otherReason } = await request.json();

    if (userId) {
      let reasonText = '';

      switch (reason) {
        case 'annoying':
          reasonText = 'Olly is too annoying because of popup.';
          break;
        case 'paid':
          reasonText = 'Because it was paid.';
          break;
        case 'not_working':
          reasonText = 'Did not work.';
          break;
        case 'not_needed':
          reasonText = 'Do not need it anymore.';
          break;
        default:
          reasonText = 'Other reason.';
      }

      if (otherReason) {
        reasonText += ` Other reason: ${otherReason}`;
      }

      await sendDiscordNotification(
        `@everyone, user ${userId} uninstalled the extension. Reason: ${reasonText}`
      );
    }

    const response = new NextResponse(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
    return response;
  } catch (error: any) {
    console.error(`Error notifying ${error.message}`);
    const errorResponse = new NextResponse(
      JSON.stringify({
        success: false,
        error: `Failed to notify`,
      }),
      { status: 500 }
    );
    return errorResponse;
  }
}