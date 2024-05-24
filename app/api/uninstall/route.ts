import { sendDiscordNotification } from "@/service/discord-notify";
import { NextResponse } from "next/server";
import { google, sheets_v4 } from 'googleapis';

async function getAuthenticatedClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/drive.file',
    ],
  });
  return auth.getClient();
}

async function writeUninstallReason(userId: string, date: string, reason: string) {
  try {
    const auth = await getAuthenticatedClient();
    const sheets: sheets_v4.Sheets = google.sheets({ version: 'v4', auth: auth as any });

    // Append a new row with the uninstall reason
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_FEEDBACK_SHEET_ID,
      range: 'Sheet1!A:C',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[userId, date, reason]],
      },
    });
  } catch (error) {
    console.error('Error writing uninstall reason to Google Sheets:', error);
  }
}

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

      // Write the uninstall reason to the Google Sheet
      const date = new Date().toISOString().slice(0, 10); // Get the current date in YYYY-MM-DD format
      await writeUninstallReason(userId, date, reasonText);
    }
    const response = new NextResponse(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
    return response;
  } catch (error: any) {
    console.error(`Error notifying ${error.message}`);
    const errorResponse = new NextResponse(
      JSON.stringify({ success: false, error: `Failed to notify` }),
      { status: 500 }
    );
    return errorResponse;
  }
}