// app/api/generate-free-daily/route.ts
import { sendDiscordNotification } from "@/service/discord-notify";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { google, sheets_v4 } from 'googleapis';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const dailyLimit = parseInt(process.env.DAILY_FREE_LIMIT || '5', 10);

async function getAuthenticatedClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/drive.file'
    ],
  });
  return auth.getClient();
}

async function readUserGenerationData(userId: string, date: string) {
  try {
    const auth = await getAuthenticatedClient();
    const sheets: sheets_v4.Sheets = google.sheets({ version: 'v4', auth: auth as any });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:E',
    });
    const rows = response.data.values;
    const userRow = rows?.find((row) => row[0] === userId && row[1] === date);
    return userRow ? parseInt(userRow[2], 10) : 0;
  } catch (error) {
    console.error('Error reading user generation data from Google Sheets:', error);
    return -1; // Return -1 to indicate an error occurred
  }
}

async function writeUserGenerationData(userId: string, date: string, count: number, action_type: string, platform: string) {
  try {
    const auth = await getAuthenticatedClient();
    const sheets: sheets_v4.Sheets = google.sheets({ version: 'v4', auth: auth as any });

    // Check if the user's data already exists in the sheet
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:E',
    });
    const rows = response.data.values || [];
    const userRowIndex = rows?.findIndex((row) => row[0] === userId && row[1] === date);

    if (userRowIndex !== undefined && userRowIndex !== -1) {
      // Update the existing row
      const existingActionTypes = rows[userRowIndex][3] || '';
      const updatedActionTypes = `${existingActionTypes}${existingActionTypes ? ',' : ''}${action_type}`;

      const existingPlatform = rows[userRowIndex][4] || '';
      const updatedPlatform = `${existingPlatform}${existingPlatform ? ',' : ''}${platform}`;

      await sheets.spreadsheets.values.update({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: `Sheet1!A${userRowIndex + 1}:E${userRowIndex + 1}`,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [[userId, date, count, updatedActionTypes, updatedPlatform]],
        },
      });
    } else {
      // Append a new row
      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: 'Sheet1!A:E',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [[userId, date, count, action_type, platform]],
        },
      });
    }
  } catch (error) {
    console.error('Error writing user generation data to Google Sheets:', error);
  }
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
  const extensionId = request.headers.get('X-Extension-ID');

  if (extensionId !== process.env.EXTENSION_ID) {
    return new NextResponse('Unauthorized', { status: 403 });
  }
  
  if (request.method === 'OPTIONS') {
    return OPTIONS(request);
  }

  const formData = await request.formData();
  const prompt = formData.get("prompt")?.toString() || "";
  const store_id = formData.get("store_id")?.toString() || "";
  const product_id = formData.get("product_id")?.toString() || "";
  const user_id = formData.get("user_id")?.toString() || "";
  const action_type = formData.get("action_type")?.toString() || "";
  const date = formData.get("date")?.toString() || "";
  // const date = "2024-05-23";
  const model = formData.get("model")?.toString() || "";
  const platform = formData.get("platform")?.toString() || "";

  try {
    // Read the user-specific generation data
    const userGenerationCount = await readUserGenerationData(user_id, date);

    if (userGenerationCount === -1) {
      // An error occurred while reading the data, allow the user to proceed
      console.warn('Error reading user generation data, allowing the user to proceed');
    } else if (userGenerationCount >= dailyLimit) {
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

    // Increment the count only if the response is successful
    const newCount = userGenerationCount === -1 ? 1 : userGenerationCount + 1;

    // Write the updated user-specific generation data to Google Sheets
    await writeUserGenerationData(user_id, date, newCount, action_type, platform);

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
      `Generated comment for user ${user_id} on product ${product_id} at store ${store_id} on ${date} using model ${model}`
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