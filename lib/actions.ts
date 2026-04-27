import "server-only";

import { contactSchema, type ContactInput } from "@/lib/validations";
import { sendEmail } from "@/lib/email";

export type ActionResult =
  | { ok: true; message: string }
  | { ok: false; message: string };

export async function sendContactEmailAction(formData: FormData): Promise<ActionResult> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return { ok: false, message: "Please check your inputs and try again." };
  }

  const data: ContactInput = parsed.data;

  await sendEmail({
    fromName: data.name,
    fromEmail: data.email,
    message: data.message,
  });

  return { ok: true, message: "Message sent — I’ll get back to you shortly." };
}

