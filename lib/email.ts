import "server-only";

import nodemailer from "nodemailer";

type SendEmailArgs = {
  fromName: string;
  fromEmail: string;
  message: string;
};

function requireEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `Missing ${name}. Add it to your environment variables to enable the contact form.`,
    );
  }
  return value;
}

export async function sendEmail(args: SendEmailArgs) {
  const host = requireEnv("SMTP_HOST");
  const port = Number(requireEnv("SMTP_PORT"));
  const user = requireEnv("SMTP_USER");
  const pass = requireEnv("SMTP_PASS");
  const to = requireEnv("CONTACT_TO");

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `"${args.fromName}" <${user}>`,
    replyTo: args.fromEmail,
    to,
    subject: `Portfolio contact — ${args.fromName}`,
    text: `${args.message}\n\nFrom: ${args.fromName} <${args.fromEmail}>`,
  });
}

