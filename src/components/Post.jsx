import Link from "next/link";
import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";

export default function Post({ post, id }) {
  return (
    <div className="flex my-3">
      <img src={post?.profileImage} className="w-11 h-12 rounded-full" />
      <div className="flex flex-col flex-1 ml-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center  space-x-1">
            <p className="font-bold truncate ">{post?.name}</p>
            <span className="text-sm truncate">{post?.username}</span>
          </div>
          <HiDotsHorizontal className="text-sm" />
        </div>
        <Link href={`post/${id}`} className="my-4 text-gray-700 text-sm">
          {post?.text}
        </Link>
        <Link href={`post/${id}`}>
          <img src={post.image} className="rounded-2xl" />
        </Link>
      </div>
    </div>
  );
}
