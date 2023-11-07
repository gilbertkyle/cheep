import React from "react";
import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";
dayjs.extend(relativeTime);

import type { RouterOutputs } from "~/trpc/shared";

type Post = RouterOutputs["post"]["getAll"][number];

const PostDisplay = (props: Post) => {
  const { post, author } = props;
  return (
    <div className="flex min-h-[64px] border border-slate-200">
      <Image
        src={author ? author.imageUrl : ""}
        alt="Profile picture"
        width={64}
        height={64}
        className="m-2 rounded-full"
      />
      <div className="flex flex-col">
        <div>
          <Link
            href={`/${author ? `${author.id}` : ""}`}
            className="text-slate-200"
          >{`@${author ? author.username : ""}`}</Link>
          <span className="text-sm text-slate-200">
            {"  "}
            {dayjs(post.createdAt).fromNow()}
          </span>
        </div>
        <div className="text-slate-200">{post.content}</div>
      </div>
    </div>
  );
};

export default PostDisplay;
