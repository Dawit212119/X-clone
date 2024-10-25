"use client";

import { useSession } from "next-auth/react";
import React, { useRef } from "react";
import { HiOutlinePhotograph } from "react-icons/hi";

export default function Input() {
  const { data: session } = useSession();
  const ref = useRef();
  return (
    <>
      {session && (
        <div className="flex  gap-2  pb-10 pt-4 w-full border-b  ">
          <img src={session.user.image} className="w-10 h-10 rounded-full" />
          <div className=" flex flex-col divide-y w-full divide-gray-300">
            <textarea
              rows="2"
              type="text"
              className="text-xl  min-h-[50px] tracking-wide mb-6 border-none text-gray-600 font-semibold w-full focus:outline-none"
              placeholder="whats happing?"
            />
            <div className="flex item-center border-b border-gray-300 justify-between pt-5  ">
              <HiOutlinePhotograph className="text-sky-500 h-10 w-10 cursor-pointer hover:bg-sky-100 rounded-full p-2" />
              <button className="bg-blue-400 ml-10 border-b  rounded-full px-4 text-white py-1.5 w-[100px] hover:brightness-95 transition duration-200">
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
