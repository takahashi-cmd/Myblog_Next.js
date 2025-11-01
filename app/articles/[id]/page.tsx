"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { getDetailArticle } from "@/app/blogAPI";

const Article = () => {
  const params = useParams<{ id: string }>();
  const detailArticle = getDetailArticle(params.id);
  return (
    <div className="max-w-3xl mx-auto p-5">
      <Image
        src="https://picsum.photos/800"
        alt=""
        width={1280}
        height={300}
      ></Image>
      <h1 className="text-4xl text-center mb-10 mt-10">ここがタイトルです</h1>
      <div className="text-lg leading-relaxed text-justify">
        <p>ここが本文です</p>
      </div>
    </div>
  );
};

export default Article;
