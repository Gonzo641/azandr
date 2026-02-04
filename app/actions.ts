// app/actions.ts
"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!email || !subject || !message) {
    return { error: "Please fill out all fields" };
  }

  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["dagonzo64@gmail.com"],
      subject: `[${subject}] New message from ${email}`,
      replyTo: email,
      text: message,
    });

    if (data.error) {
      console.error("Resend API Error:", data.error);
      return { error: data.error.message };
    }

    return { success: true };
  } catch (error) {
    console.error("Server Action Error:", error);
    return { error: "Something went wrong" };
  }
};
