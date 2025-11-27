import nodemailer from "nodemailer";
const { NextResponse } = require("next/server");

export async function POST(req) {
  const body = await req.json();

  const { fullName, email, phone, service, message } = body;
  if ((!fullName, !email, !phone, !service, !message)) {
    return NextResponse.json(
      { success: false, message: "Invalid Data" },
      { status: 404 }
    );
  }
}
