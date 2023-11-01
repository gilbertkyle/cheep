import PostDisplay from "~/app/_components/post/PostDisplay";
import { api } from "~/trpc/server";
import Nav from "~/app/_components/Nav";

export default async function Home() {
  const posts = await api.post.getAll.query();
  return (
    <main className="mx-auto w-full md:w-[35%]">
      <Nav />
      {posts.map((fullPost) => (
        <PostDisplay {...fullPost} key={fullPost.post.id} />
      ))}
    </main>
  );
}
