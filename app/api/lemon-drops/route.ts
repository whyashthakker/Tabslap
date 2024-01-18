import { NextResponse } from "next/server";
import { sendDiscordNotification } from "@/service/discord-notify";

export async function POST(req: Request) {
    const body = await req.json();

    // Checking if the event is a sale event
    if (body.type === "webhooks" && 
        (body.attributes.events.includes("order_created") || body.attributes.events.includes("order_refunded"))) {
        
        const saleEvent = {
            eventId: body.id,
            eventType: body.attributes.events[0], // Assuming the first event in the array is the relevant one
            storeId: body.attributes.store_id,
            eventTime: body.attributes.last_sent_at,
        };

        try {
            // Sending a Discord notification about the sale event
            await sendDiscordNotification(`You made a Sale! for Store ID: ${saleEvent.storeId}`);

            return new NextResponse(null, { status: 200 });
        } catch (error: any) {
            console.error(`Error processing webhook: ${error.message}`);
            await sendDiscordNotification(`Error processing webhook: ${error.message}`);
            return new NextResponse(`Error: ${error.message}`, { status: 500 });
        }
    } else {
        // If the event is not a sale event, you might want to ignore it
        return new NextResponse(`Ignored: Not a sale event`, { status: 200 });
    }
}

export default { POST };
