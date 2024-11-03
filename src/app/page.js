import Feed from "@/components/Feed";
import Input from "@/components/input";
import React from "react";

export default function page() {
  return (
    <div className="w-full flex flex-col mx-auto border-l border-r p-3 min-h-screen">
      <div className="">
        <h1 className="font-bold text-xl sticky top-0 z-50 border-b border-gray-300 pb-6 w-full py-5 px-3">
          Home
        </h1>
      </div>
      <Input />
      <Feed />
    </div>
  );
}
