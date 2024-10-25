"use client"; // Explicitly mark as a client component

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { HiHome, HiDotsHorizontal } from "react-icons/hi";

export default function Sidebar() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="flex flex-col gap-6 p-3 h-screen justify-between">
      <div>
        <Link href="/">
          <FaXTwitter
            className="w-16 h-16 cursor-pointer
         p-3 hover:bg-gray-100 rounded-full
         transtion-all mb-4 duration-200 "
          />
        </Link>
        <Link
          href="/"
          className="flex items-center hover:bg-gray-100 p-3 gap-3 rounded-full
        transtion-all duration-200 w-fit"
        >
          <HiHome className="w-7 h-7 " />
          <span className="font-bold hidden  sm:inline">Home</span>
        </Link>

        {!session ? (
          <button
            onClick={() => signIn()}
            className="bg-blue-400 p-3 rounded-full  w-48 text-white hover:brightness-95 shadow-md font-semibold hidden xl:inline"
          >
            Sign In
          </button>
        ) : (
          <button
            onClick={() => signOut()}
            className="bg-blue-400 p-3 mt-5 rounded-full w-48 text-white hover:brightness-95 shadow-md font-semibold hidden xl:inline"
          >
            Sign out
          </button>
        )}
      </div>

      {session && (
        <div
          className="flex text-gray-700 items-center gap-2 hover:bg-gray-100
        transtion duration-200 cursor-pointer
         p-3 mt-auto rounded-full xl:mr-3"
        >
          <img
            src={session.user.image}
            alt="user image"
            className="rounded-full h-10 w-10 xl:mr-2"
          />
          <div className="hidden xl:inline ">
            <h4 className="font-bold">{session.user.name}</h4>
            <p className="text-gray-300">{session.user.username}</p>
          </div>
          <HiDotsHorizontal className="h-5 hidden xl:inline " />
        </div>
      )}
    </div>
  );
}
