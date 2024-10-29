"use client";

import { app } from "@/firebase";
import { useSession } from "next-auth/react";
import React, { useEffect, useRef, useState } from "react";
import { HiOutlinePhotograph } from "react-icons/hi";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export default function Input() {
  const { data: session } = useSession();
  const [postLoading, setPostLoading] = useState(false);
  const [fileselected, setfileselected] = useState(null);
  const [imageurl, setimageurl] = useState(null);
  const [text, settext] = useState("");
  const [ImageFileUploading, setImageFileUploading] = useState(false);
  const imageref = useRef();
  const imagehandle = (e) => {
    const file = e.target.files[0];
    if (file) {
      setfileselected(file);
      setimageurl(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    if (fileselected) {
      uploadimagetofb();
    }
  }, [fileselected]);

  const handleSubmit = async () => {
    setPostLoading(true);
    try {
      const post = await addDoc(collection(db, "posts"), {
        uid: session.user.id,
        image: imageurl,
        profileImage: session.user.image,
        text,
        name: session.user.name,
        username: session.user.username,
        createdAt: serverTimestamp(),
      });
      console.log(post.id);
      setPostLoading(false);
      setimageurl(null);
      setImageFileUploading(false);
      settext("");
      setfileselected(null);
    } catch (e) {
      console.log(e);
    }
  };

  const uploadimagetofb = () => {
    setImageFileUploading(true);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + "-" + fileselected.name;
    const storegeRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storegeRef, fileselected);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.log(error);
        setImageFileUploading(false);
        setimageurl(null);
        setfileselected(null);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setimageurl(downloadURL);
          setImageFileUploading(false);
        });
      }
    );
  };
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
              value={text}
              onChange={(e) => settext(e.target.value)}
            />
            {fileselected && (
              <img
                src={imageurl}
                className={`max-h-[200px] cursor-pointer rounded-xl ${
                  ImageFileUploading ? "animate-pulse" : ""
                }`}
              />
            )}
            {ImageFileUploading && <p>Loading...</p>}
            <div className="flex item-center border-b border-gray-300 justify-between pt-5  ">
              <HiOutlinePhotograph
                onClick={() => imageref.current.click()}
                className="text-sky-500 h-10 w-10 cursor-pointer hover:bg-sky-100 rounded-full p-2"
              />
              <input
                type="file"
                ref={imageref}
                onChange={imagehandle}
                accept="image/*"
                hidden
              />
              <button
                disabled={
                  text.trim() === "" || postLoading || ImageFileUploading
                }
                onClick={handleSubmit}
                className="bg-blue-400 ml-10 border-b  rounded-full px-4 text-white py-1.5 w-[100px] cursor-pointer hover:brightness-95 transition duration-200"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
