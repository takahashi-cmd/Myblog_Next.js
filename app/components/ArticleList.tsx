import Link from "next/link";
import React from "react";
import Image from "next/image";

export const ArticleList = () => {
  return (
    <div>
      <article className="shadow my-4 flex flex-col">
        <Link href="#" className="hover:opacity-75">
          <Image
            src="https://picsum.photos/800"
            alt=""
            width={300}
            height={300}
          ></Image>
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 pb-4 font-bold">Technology</Link>
          <Link href="#" className="text-slate-900 text-3xl font-bold hover:text-gray-70">Next.jsの勉強中</Link>
          <p className="text-sm pb-3 text-slate-900">By hiro published on 2025/10/26</p>
          <Link href="#" className="text-slate-900 ph-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque nemo inventore atque cumque reiciendis provident repudiandae dolorum quos? Cupiditate veniam vitae, sunt aut quas ipsam perspiciatis modi ullam. Doloremque, animi!</Link>
          <Link href="#" className="text-pink-800 hover:text-black">続きを読む</Link>
        </div>
      </article>
    </div>
  );
};
