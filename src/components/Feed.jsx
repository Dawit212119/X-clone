import React from "react";
import { db } from "../firebase";

import { collection, getDocs, query, orderBy } from "firebase/firestore";
import Post from "./Post";
export default async function Feed() {
  const posts = query(collection(db, "posts"), orderBy("createdAt", "desc"));
  const querysnapshot = await getDocs(posts);
  let data = querysnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  console.log(data);
  return (
    <div>
      {data.map((post) => (
        <Post key={post.id} post={post} id={post.id} />
      ))}
    </div>
  );
}
