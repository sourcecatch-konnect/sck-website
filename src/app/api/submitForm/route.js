import { supabase } from "@/lib/supabase";
import { AdminEmail } from "@/template/email/AdminFormEmail";
import { ThankYouEmail } from "@/template/email/ThankYouEmail";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { formType, answers } = await req.json();

    if (!formType || !answers) {
      return Response.json({ error: "Missing data" }, { status: 400 });
    }

    const userEmail = answers.find((a) => a.id === "contact_email")?.answer;
    const userName = answers.find((a) => a.id === "business_name")?.answer;

    const { data, error } = await supabase
      .from("form_responses")
      .insert({ form_type: formType, answers })
      .select()
      .single();

    if (error) {
      console.error(error);
      return Response.json(
        { error: "Supabase insert failed" },
        { status: 500 }
      );
    }

    // const pdfBuffer = Buffer.from("PDF content here...");

    // Thank You Email
    await resend.emails.send({
      from: "SCK <support@sckonnect.com>",
      to: userEmail,
      subject: "Thanks for your enquiry!",
      react: ThankYouEmail({ name: userName }),
    });

    // Admin Email
    await resend.emails.send({
      from: "SCK <notifications@sckonnect.com>",
      to: "niranjan@sckonnect.com",
      subject: `New Form Submission - ${formType}`,
      react: AdminEmail({ formType, answers }),
    });

    return Response.json({ success: true, data });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
