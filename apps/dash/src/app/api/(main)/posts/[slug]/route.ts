import { Post } from "@/lib/db/schema/posts";
import { api } from "@/lib/trpc/api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { post }: { post?: Post } = await api.posts.getPostBySlug.query({
    slug: params.slug,
  });

  if (post === undefined)
    return NextResponse.json({ error: "not found" }, { status: 404 });

  if (!post.published) {
    return NextResponse.json(
      { error: "post is not in publishing mode" },
      { status: 403 }
    );
  }

  const { id, userId, ...rest } = post;

  return NextResponse.json(rest, { status: 200 });
}
