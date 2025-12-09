import { NextResponse } from "next/server";

export async function POST(req) {
  const { password } = await req.json();

  if (password === process.env.ADMIN_PASSWORD) {
    // create cookie session
    return NextResponse.json(
      { success: true },
      {
        headers: {
          "Set-Cookie": `admin_auth=true; Path=/; HttpOnly; Secure; SameSite=Lax`,
        },
      }
    );
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
