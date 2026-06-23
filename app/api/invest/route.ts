import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, mobile, email, project, tokens, remarks } = await req.json();

    await resend.emails.send({
      from:    "Hound Charge <onboarding@resend.dev>",
      to:      ["rohithnairreghu@gmail.com"],
      replyTo: email,
      subject: `Investor Enquiry — ${project}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #0a0a0a; color: #fdffea; border-radius: 12px;">
          <h2 style="color: #c9ad7d; margin: 0 0 24px 0; font-size: 22px; font-weight: 400;">New Investor Enquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; color: rgba(255,255,255,0.45); font-size: 12px; letter-spacing: 1px; text-transform: uppercase; width: 140px;">Name</td><td style="padding: 10px 0; color: #fdffea;">${name}</td></tr>
            <tr><td style="padding: 10px 0; color: rgba(255,255,255,0.45); font-size: 12px; letter-spacing: 1px; text-transform: uppercase;">Mobile</td><td style="padding: 10px 0; color: #fdffea;">${mobile}</td></tr>
            <tr><td style="padding: 10px 0; color: rgba(255,255,255,0.45); font-size: 12px; letter-spacing: 1px; text-transform: uppercase;">Email</td><td style="padding: 10px 0; color: #c9ad7d;">${email}</td></tr>
            <tr><td style="padding: 10px 0; color: rgba(255,255,255,0.45); font-size: 12px; letter-spacing: 1px; text-transform: uppercase;">Project</td><td style="padding: 10px 0; color: #fdffea;">${project}</td></tr>
            <tr><td style="padding: 10px 0; color: rgba(255,255,255,0.45); font-size: 12px; letter-spacing: 1px; text-transform: uppercase;">Tokens</td><td style="padding: 10px 0; color: #c9ad7d; font-size: 16px; font-weight: 600;">${tokens} token${tokens > 1 ? "s" : ""} — ₹${tokens * 5} Lakhs</td></tr>
            ${remarks ? `<tr><td style="padding: 10px 0; color: rgba(255,255,255,0.45); font-size: 12px; letter-spacing: 1px; text-transform: uppercase; vertical-align: top;">Remarks</td><td style="padding: 10px 0; color: #fdffea;">${remarks}</td></tr>` : ""}
          </table>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
