import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Article } from "../types";

type ArticleListProps = {
  articles: Article[];
};

export const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <div>
      {articles.map((article) => (
        <article className="shadow my-4 flex flex-col" key={article.id}>
          <Link href={`articles/${article.id}`} className="hover:opacity-75">
            <Image
              src="https://picsum.photos/800"
              alt=""
              width={1280}
              height={300}
            ></Image>
          </Link>
          <div className="bg-white flex flex-col justify-start p-6">
            <Link href="#" className="text-blue-700 pb-4 font-bold">
              Technology
            </Link>
            <Link
              href={`articles/${article.id}`}
              className="text-slate-900 text-3xl font-bold hover:text-gray-70"
            >
              {article.title}
            </Link>
            <p className="text-sm pb-3 text-slate-900">
              By hiro published on {article.createdAt}
            </p>
            <Link
              href={`articles/${article.id}`}
              className="text-slate-900 ph-6"
            >
              {article.content}
            </Link>
            <Link
              href={`articles/${article.id}`}
              className="text-pink-800 hover:text-black"
            >
              続きを読む
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};
