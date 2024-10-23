import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-4 p-3">
      <Link href="/">
        <FaXTwitter
          className="w-16 h-16 cursor-pointer
         p-3 hover:bg-gray-100 rounded-full
         transtion-all duration-200 "
        />
      </Link>
      <Link
        href="/"
        className="flex items-center hover:bg-gray-100 p-3 gap-3 rounded-full
        transtion-all duration-200 w-fit"
      >
        <HiHome className="w-7 h-7 " />
        <span className="font-bold hidden sm:inline">Home</span>
      </Link>
      <button className="bg-blue-400 p-3 rounded-full w-48 text-white hover:brightness-95 shadow-md font-semibold hidden xl:inline">
        Sign In
      </button>
    </div>
  );
}
