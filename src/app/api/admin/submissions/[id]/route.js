import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req, context) {
  const params = await context.params;
  const { id } = params;

  const { data, error } = await supabase
    .from("form_responses")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Supabase error:", error);
    // 404 if not found, 500 otherwise
    if (
      error.code === "PGRST116" ||
      error.message?.includes(
        "JSON object requested, multiple (or no) rows returned"
      )
    ) {
      return NextResponse.json(
        { error: "Submission not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: "Failed to fetch submission" },
      { status: 500 }
    );
  }

  return NextResponse.json({ submission: data });
}
