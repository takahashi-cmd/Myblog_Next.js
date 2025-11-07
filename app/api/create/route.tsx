import { supabase } from "@/app/utils/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";
import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { id, title, content } = await request.json();
  const { data: posts, error } = await supabase
    .from("posts")
    .insert([{ id, title, content, createdAt: new Date().toISOString() }]);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(posts);
}
