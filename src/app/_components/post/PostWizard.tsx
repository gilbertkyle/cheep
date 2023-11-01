"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "~/trpc/react";

export function CreatePost() {
  const router = useRouter();
  const [content, setContent] = useState("");

  const { mutate, isLoading: isPosting } = api.post.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setContent("");
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        mutate({ content });
      }}
      className=" flex w-full justify-between"
    >
      <input
        type="text"
        placeholder="Post content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            if (content !== "") {
              mutate({ content });
            }
          }
        }}
        className="m-4 grow bg-transparent text-slate-200 outline-none"
      />
      <button type="submit" className="m-2 text-slate-200" disabled={isPosting}>
        {isPosting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
