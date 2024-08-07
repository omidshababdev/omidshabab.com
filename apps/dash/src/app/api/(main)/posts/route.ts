import { db } from "@/lib/db";
import { Post, posts } from "@/lib/db/schema/posts";
import { NextRequest, NextResponse } from "next/server";
import { eq, and } from "drizzle-orm";
import { isValidLocale } from "@/lib/utils";

export async function GET(request: NextRequest) {
  // Get the 'count' and 'page' query parameters from the request URL
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale") ?? "en";
  const count = parseInt(searchParams.get("count") || "10", 10); // Default to 10 if 'count' is not provided
  const page = parseInt(searchParams.get("page") || "1", 10); // Default to 1 if 'page' is not provided

  // Calculate the offset based on the page and count values
  const offset = (page - 1) * count;

  let newLocale: "en" | "fa" = "en"; // Default value or handle appropriately

  if (isValidLocale(locale)) {
    newLocale = locale;
  }

  // Fetch the posts from the database with limit and offset
  const results: Post[] = await db
    .select()
    .from(posts)
    .where(and(eq(posts.published, true), eq(posts.locale, newLocale)))
    .limit(count)
    .offset(offset); // Apply the offset based on the 'page' query parameter

  // Remove 'id' and 'userId' from the returned posts
  const getPosts = results.map(({ id, userId, ...rest }) => rest);

  return NextResponse.json(getPosts, { status: 200 });
}
