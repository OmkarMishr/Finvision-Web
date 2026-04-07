"use server";

import { z } from "zod";

const schema = z.object({
  name:   z.string().min(2),
  mobile: z.string().length(10).regex(/^\d+$/),
  email:  z.string().email(),
});

export async function sendEnquiryEmail(_prev: unknown, formData: FormData) {
  const parsed = schema.safeParse({
    name:   formData.get("name"),
    mobile: formData.get("mobile"),
    email:  formData.get("email"),
  });

  if (!parsed.success) {
    return { success: false, error: "Please fill all fields correctly." };
  }

  const { name, mobile, email } = parsed.data;

  // ── 1. Push to Finvision CRM ──────────────────────────────────────────────
  try {
    const crmRes = await fetch(`${process.env.CRM_API_URL}/api/leads`, {
      method:  "POST",
      headers: {
        "Content-Type":  "application/json",
        "Authorization": `Bearer ${process.env.CRM_API_KEY}`,  // your CRM JWT/token
      },
      body: JSON.stringify({
        fullName: name,
        mobile:   mobile,
        email:    email,
        source:   "Finvision Website",   // shows up in CRM source filter
        stage:    "Enquiry",             // goes into the Enquiry pipeline stage
      }),
    });

    if (!crmRes.ok) {
      // Log but don't fail the whole form — user still gets email + WA
      console.error("CRM push failed:", await crmRes.text());
    }
  } catch (crmErr) {
    console.error("CRM unreachable:", crmErr);
  }

  // ── 2. Send email (your existing logic here) ──────────────────────────────
  // ... your existing nodemailer / resend / etc. code ...

  return {
    success:  true,
    message:  "Enquiry submitted successfully!",
    formData: { name, mobile, email },   // used by Hero.tsx to open WhatsApp
  };
}