import React from "react";
import Image from "next/image";
import { getDetailArticle } from "@/app/blogAPI";
import DeleteButton from "@/app/components/DeleteButton";

const Article = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  // const detailArticle = await getDetailArticle(id);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/${id}`, { next: { revalidate: 10 } });
  const detailArticle = await res.json();

  return (
    <div className="max-w-3xl mx-auto p-5">
      <Image
        src={`https://picsum.photos/id/${detailArticle.id}/1000/500`}
        alt=""
        width={1280}
        height={300}
      ></Image>
      <h1 className="text-4xl text-center mb-10 mt-10">
        {detailArticle.title}
      </h1>
      <div className="text-lg leading-relaxed text-justify">
        <p>{detailArticle.content}</p>
      </div>
      <div className="text-right mt-3">
        <DeleteButton id={detailArticle.id} />
      </div>
    </div>
  );
};

export default Article;
