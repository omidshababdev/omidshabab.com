import { db } from "@/lib/db";
import { Post, posts } from "@/lib/db/schema/posts";
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export async function GET(request: NextRequest) {
  const results: Post[] = await db
    .select()
    .from(posts)
    .where(eq(posts.published, true));

  const getPosts = results.map(({ id, userId, ...rest }) => rest);

  return NextResponse.json(getPosts, { status: 200 });
}
