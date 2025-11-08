import { supabase } from "@/app/utils/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";
import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

// 記事の詳細ページを取得
export async function GET(request: NextRequest, {params}:{params:Promise<{id: string}>}) {
  const { id } = await params
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

// 記事を編集


// 記事を削除
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { data: posts, error } = await supabase
    .from("posts")
    .delete()
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