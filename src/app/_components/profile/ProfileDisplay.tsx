"use client";

import React from "react";
import type { RouterOutputs } from "~/trpc/shared";
import Image from "next/image";
import PostDisplay from "~/app/_components/post/PostDisplay";

type Profile = RouterOutputs["profile"]["getUserById"];
type Post = RouterOutputs["post"]["getPostsByUserId"][number];

const ProfileDisplay = (props: { profile: Profile; posts: Post[] }) => {
  const { profile, posts } = props;
  const { imageUrl, username } = profile;
  return (
    <>
      <div className="h-36 w-full border border-slate-200 bg-gray-400">
        <Image
          priority
          src={imageUrl}
          alt={`Profile picture for ${username}`}
          width={128}
          height={128}
          className="relative left-4 top-20 rounded-full border-4 border-slate-600"
        />
      </div>
      <div className=" flex h-32 w-full flex-col justify-end border border-slate-200">
        <span className="relative p-4 text-xl font-bold text-slate-200">{`@${username}`}</span>
      </div>
      <div>
        {posts.map((fullPost) => (
          <PostDisplay key={fullPost.post.id} {...fullPost} />
        ))}
      </div>
    </>
  );
};

export default ProfileDisplay;
