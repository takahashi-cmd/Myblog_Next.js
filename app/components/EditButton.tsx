"use client";

import React from "react";
import { useRouter } from "next/navigation";

type EditButtonProps = {
  id: string;
};

const EditButton = ({ id }: EditButtonProps) => {
  const router = useRouter();
  const handleEdit = async () => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    await fetch(`${API_URL}/api/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    router.push("/");
    router.refresh();
  };
  return (
    <div
      className="bg-red-500 hover:bg-red-600 rounded-md py-2 px-5 inline cursor-pointer"
      onClick={handleEdit}
    >
      編集
    </div>
  );
};

export default EditButton;
