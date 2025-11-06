import { supabase } from "@/app/utils/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";
import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, {params}:{params:Promise<{id: string}>}) {
  const { id } = await params
  console.log(`記事ID：${id}`);
  const { data: posts, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  if (!posts) {
    notFound();
  }
  return NextResponse.json(posts);
}
