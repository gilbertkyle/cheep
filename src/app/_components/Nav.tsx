"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { CreatePost } from "~/app/_components/post/PostWizard";

import React from "react";

const Nav = () => {
  const { isSignedIn } = useAuth();
  return (
    <nav className="flex min-h-[96px] content-center items-center border">
      {isSignedIn ? (
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: "h-14 w-auto m-2",
            },
          }}
        />
      ) : (
        <Link className="text-slate-200" href={"/sign-in"}>
          Sign in
        </Link>
      )}
      {isSignedIn && <CreatePost />}
    </nav>
  );
};

export default Nav;
