"use client";

import * as React from "react";
import { useActionState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Mail, Send, User } from "lucide-react";

import { sendContactEmail, type ContactState } from "@/app/contact/send-action";
import { Button } from "@/components/ui/button";
import CustomFormField, { formFieldTypes } from "@/components/customFormField";
import { contactSchema, type ContactInput } from "@/lib/validations";

const initialState: ContactState = { ok: false, message: "" };

export function ContactForm() {
  const [state, dispatch, pending] = useActionState(sendContactEmail, initialState);
  const form = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  React.useEffect(() => {
    if (state.ok) {
      form.reset();
    }
  }, [state.ok, form]);

  return (
    <form
      className="space-y-5"
      onSubmit={form.handleSubmit((_values, event) => {
        const target = event?.target as HTMLFormElement | undefined;
        if (!target) return;
        dispatch(new FormData(target));
      })}
    >
      <div className="space-y-2">
        <p className="text-sm font-semibold">Send a message</p>
        <p className="text-sm text-muted-foreground">
          Give me a short description and I’ll reply with next steps.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <CustomFormField
          control={form.control}
          name="name"
          fieldType={formFieldTypes.INPUT}
          label="Name"
          placeholder="Your name"
          className="rounded-3xl border border-white/10 bg-white/3 p-4"
        />

        <CustomFormField
          control={form.control}
          name="email"
          fieldType={formFieldTypes.INPUT}
          label="Email"
          placeholder="you@email.com"
          type="email"
          className="rounded-3xl border border-white/10 bg-white/3 p-4"
        />
      </div>

      <CustomFormField
        control={form.control}
        name="message"
        fieldType={formFieldTypes.TEXTAREA}
        label="Message"
        placeholder="What do you want to build? Timeline, features, budget…"
        className="rounded-3xl border border-white/10 bg-white/3 p-4"
      />

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/3 p-4 text-sm text-muted-foreground">
          <p className="font-medium text-foreground">Fast response</p>
          <p className="mt-1">Usually within 24 hours.</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/3 p-4 text-sm text-muted-foreground">
          <p className="font-medium text-foreground">What to include</p>
          <p className="mt-1">Goal, scope, and any links.</p>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" className="h-11 w-full sm:w-auto" disabled={pending}>
          {pending ? (
            "Sending..."
          ) : (
            <>
              Send message <Send className="ml-2 size-4" />
            </>
          )}
        </Button>

        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1">
            <User className="size-3.5 opacity-80" /> Name
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1">
            <Mail className="size-3.5 opacity-80" /> Email
          </span>
        </div>
      </div>

      {state.message ? (
        <div
          className={[
            "rounded-3xl border p-4 text-sm",
            state.ok
              ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-200"
              : "border-destructive/20 bg-destructive/10 text-destructive",
          ].join(" ")}
          aria-live="polite"
        >
          {state.ok ? (
            <div className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 size-4" />
              <p>{state.message}</p>
            </div>
          ) : (
            <p>{state.message}</p>
          )}
        </div>
      ) : null}
    </form>
  );
}

