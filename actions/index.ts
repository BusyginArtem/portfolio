"use server";

import { Resend } from "resend";

import EmailTemplate from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

type Data = {
  id: string;
};

type Error = { message: string } | null;

type Response = {
  data?: Data | null;
  error?: Error;
};

export const sendMessage = async (
  prevState: Response,
  formData: FormData,
): Promise<Response> => {
  const senderEmail = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;

  if (!message) {
    return {
      error: {
        message: "Invalid message!",
      },
    };
  }

  const { data, error } = await resend.emails.send({
    from: "Contact form <onboarding@resend.dev>",
    to: ["artembusygin87@gmail.com"],
    subject: "Message from contact form",
    react: EmailTemplate({ message, senderEmail }),
    replyTo: senderEmail,
  });

  if (error) {
    return {
      error,
    };
  }

  if (!data) {
    return {
      error: {
        message: "Something went wrong!",
      },
    };
  }

  return {
    data,
  };
};
