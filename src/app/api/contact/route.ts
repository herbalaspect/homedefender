import { NextResponse } from "next/server";
import { Resend } from "resend";
import { BUSINESS } from "@/lib/constants";

/**
 * Contact form submissions. Posts come from <ContactForm /> at /contact.
 * Uses Resend for delivery — RESEND_API_KEY in .env.local (and Vercel env).
 *
 * If the key is missing we log and return 503 instead of crashing — the form
 * UI surfaces a friendly retry-or-call message, and we still have the request
 * in server logs for manual follow-up.
 */

export const runtime = "nodejs";

interface Payload {
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
  service?: string;
  message?: string;
  website?: string; // honeypot
}

const SERVICE_LABELS: Record<string, string> = {
  roofing: "Roofing",
  gutter: "Gutters",
  windows: "Windows",
  "storm-damage": "Storm damage / insurance claim",
  "defender-shield": "The Defender Shield",
  other: "Other",
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot: silently accept then drop
  if (body.website && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const required = ["name", "phone", "email", "service", "message"] as const;
  for (const k of required) {
    if (!body[k] || String(body[k]).trim() === "") {
      return NextResponse.json(
        { error: `Missing required field: ${k}` },
        { status: 400 },
      );
    }
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error(
      "[/api/contact] RESEND_API_KEY missing — accepted submission but did not send",
      { name: body.name, email: body.email, service: body.service },
    );
    return NextResponse.json(
      {
        error:
          "Email service not configured. Please call (608) 925-3576 or try again shortly.",
      },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const serviceLabel = SERVICE_LABELS[body.service ?? ""] ?? body.service ?? "Unspecified";

  const safe = {
    name: escapeHtml(body.name!.trim()),
    phone: escapeHtml(body.phone!.trim()),
    email: escapeHtml(body.email!.trim()),
    address: body.address ? escapeHtml(body.address.trim()) : "",
    service: escapeHtml(serviceLabel),
    message: escapeHtml(body.message!.trim()).replace(/\n/g, "<br>"),
  };

  try {
    const { error } = await resend.emails.send({
      from: `Home Defender Remodeling <website@${BUSINESS.domain}>`,
      to: [BUSINESS.email],
      replyTo: body.email!,
      subject: `New estimate request — ${serviceLabel} — ${body.name}`,
      html: `
<h2>New estimate request</h2>
<p><strong>Service:</strong> ${safe.service}</p>
<p><strong>Name:</strong> ${safe.name}</p>
<p><strong>Phone:</strong> ${safe.phone}</p>
<p><strong>Email:</strong> ${safe.email}</p>
${safe.address ? `<p><strong>Address:</strong> ${safe.address}</p>` : ""}
<hr>
<p>${safe.message}</p>
`,
    });

    if (error) {
      console.error("[/api/contact] resend error", error);
      return NextResponse.json(
        { error: "Could not send. Please call (608) 925-3576." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[/api/contact] unexpected error", err);
    return NextResponse.json(
      { error: "Could not send. Please call (608) 925-3576." },
      { status: 500 },
    );
  }
}
