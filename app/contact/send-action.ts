"use server";

import { sendContactEmailAction } from "@/lib/actions";

export type ContactState = { ok: boolean; message: string };

export async function sendContactEmail(_prev: ContactState, formData: FormData): Promise<ContactState> {
  try {
    const result = await sendContactEmailAction(formData);
    return result;
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to send message.";
    return { ok: false, message };
  }
}

