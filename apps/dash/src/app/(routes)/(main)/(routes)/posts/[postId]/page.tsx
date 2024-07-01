import PostEditor from "@/components/posts/PostEditor";
import { PostId } from "@/lib/db/schema/posts";
import { api } from "@/lib/trpc/api";
import { notFound } from "next/navigation";

const Page = async ({
     params: {
          postId
     }
}: {
     params: {
          postId: PostId
     }
}) => {
     const { posts } = await api.posts.getPosts.query();
     const result = await api.posts.getPostById.query({ id: postId });

     if (postId === "create" || posts.some((post) => post.id === postId)) {
          return <PostEditor postId={result?.post?.id} />
     } else {
          notFound()
     }

};

export default Page;