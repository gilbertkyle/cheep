import React from "react";
import { api } from "~/trpc/server";
import ProfileDisplay from "~/app/_components/profile/ProfileDisplay";

const Page = async ({ params }: { params: { userId: string } }) => {
  const { userId } = params;
  const profile = await api.profile.getUserById.query({ id: userId });
  const posts = await api.post.getPostsByUserId.query({ userId: userId });
  return <ProfileDisplay profile={profile} posts={posts} />;
};

export default Page;
