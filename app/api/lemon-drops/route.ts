import { NextRequest, NextResponse } from "next/server";
import { sendDiscordNotification } from "@/service/discord-notify";
import crypto from 'crypto';

function verifySignature(req: NextRequest, secret: string): boolean {
    const signature  = req.headers.get('x-signature');
    const body = req.body;

    const payload = JSON.stringify(body);

    const hmac = crypto.createHmac('sha256', secret);

    const digest = `sha256=${hmac.update(payload).digest('hex')}`;

    if (!signature || !digest) return false;

    return crypto.timingSafeEqual(Buffer.from(digest), Buffer.from(signature));
}

export async function POST(req: NextRequest) {

    // const secret = process.env.LEMON_SQUEEZY_SIGNING_SECRET; 

    const body = await req.json();

    // if (!verifySignature(req, secret)) {
    //     return new NextResponse("Signature verification failed", { status: 401 });
    // }

    const eventName = body.meta.event_name;

    // Handling order_created event
    if (eventName === "order_created") {
        const orderData = body.data;
        const user = {
            userName: orderData.attributes.user_name,
            userEmail: orderData.attributes.user_email,
            paidAmount: (orderData.attributes.total / 100).toFixed(2), // Assuming the total is in cents
            currency: orderData.attributes.currency,
        };

        try {

            const message = `@everyone New order created by ${user.userName} (${user.userEmail}) for $${user.paidAmount} ${user.currency}`;
            await sendDiscordNotification(message);

        } catch (error: any) {

            console.error(`Error sending notification: ${error.message}`);

            await sendDiscordNotification(error.message)

            return new NextResponse(`Notification Error: ${error.message}`, { status: 500 });
        }

        return new NextResponse(null, { status: 200 });
    }

    // Your existing user registration handling code can be included here
    // to manage other types of events or requests.
}
