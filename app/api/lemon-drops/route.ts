import { NextRequest, NextResponse } from "next/server";
import { sendDiscordNotification } from "@/service/discord-notify";
import crypto from 'crypto';
import { sendWelcomeEmail } from "@/lib/emails/welcome";

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
            createdAt: orderData.attributes.created_at
        };

        try {

            const message = `@everyone We made a Sale 🎉 to ${user.userName} (${user.userEmail}) for $${user.paidAmount} ${user.currency} at ${user.createdAt}`;
            await sendDiscordNotification(message);

            try {
                const firstName = user.userName.split(' ')[0];
                await sendWelcomeEmail(firstName, user.userEmail);
            } catch (emailError: any) {
                console.error(`Error sending welcome email: ${emailError.message}`);
                sendDiscordNotification(`Error sending welcome email: ${emailError.message}`);
            }

        } catch (error: any) {

            console.error(`Error sending notification: ${error.message}`);

            await sendDiscordNotification(error.message)

            return new NextResponse(`Notification Error: ${error.message}`, { status: 500 });
        }

        return new NextResponse(null, { status: 200 });
    }

    if (eventName === "license_key_created" || eventName === "license_key_updated") {

        const licenseKeyData = body.data.attributes;

        const user = {
            userName: licenseKeyData.user_name,
            userEmail: licenseKeyData.user_email,
            licenseKey: licenseKeyData.key,
            status: licenseKeyData.status_formatted,
            activationLimit: licenseKeyData.activation_limit,
            instancesCount: licenseKeyData.instances_count,
            createdAt: licenseKeyData.created_at,
        };

        // Constructing a message with more details
        const action = eventName === "license_key_created" ? "created" : "updated";
        const message = `🔑 License key ${action} for ${user.userName} (${user.userEmail}), ` +
            `Key: ${user.licenseKey}, Status: ${user.status}, Activation Limit: ${user.activationLimit}, ` +
            `Instances: ${user.instancesCount || 'N/A'}, Created At: ${user.createdAt}`;

        try {
            await sendDiscordNotification(message);
        } catch (error: any) {
            console.error(`Error sending notification: ${error.message}`);
            await sendDiscordNotification(error.message)
            return new NextResponse(`Notification Error: ${error.message}`, { status: 500 });
        }

        return new NextResponse(null, { status: 200 });
    }

    if (eventName==='order_refunded') {
        const userData = body.data;

        const user = {
            userName: userData.attributes.user_name,
            userEmail: userData.attributes.user_email,
            paidAmount: (userData.attributes.total / 100).toFixed(2), // Assuming the total is in cents
            currency: userData.attributes.currency,
            createdAt: userData.attributes.created_at,
            refunded: userData.attributes.refunded
        };

        try {

            const message = `@everyone ${user.userName} (${user.userEmail}) refunded $${user.paidAmount} ${user.currency} at ${user.createdAt}`;
            await sendDiscordNotification(message);

        } catch (error: any) {

            console.error(`Error sending notification: ${error.message}`);

            await sendDiscordNotification(error.message)

            return new NextResponse(`Notification Error: ${error.message}`, { status: 500 });
        }

        return new NextResponse(null, { status: 200 });

    }


    
}
