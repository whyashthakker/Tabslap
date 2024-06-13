// lib/send-welcome-email.ts
import { sendMail } from "@/lib/mail-service";

export async function sendWelcomeEmail(firstName: string, email: string) {
  try {
    const subject = firstName === "" ? "So glad to have you!" : `Here we go, ${firstName}!`;
    
    const emailText = `Hi ${firstName},

This is Yash. Maker of Tabslap Chrome Extension. I am so excited to have you on board. 🎉

Right off the bat, I want to thank you for installing Tabslap. I hope you find it useful and it helps you scale your social media like 100 others.

I would love to speak to you to hear your thoughts on Tabslap and how I can make it better. You can reply to this email or book a time with me here: https://calendly.com/explainx/discussion

Best,
Yash`;

    await sendMail(subject, email, emailText, "Yash @ Tabslap AI");
  } catch (error: any) {
    console.error(`Error sending welcome email: ${error.message}`);
    throw error;
  }
}