import { db } from "@/lib/db/index";
import {
  Post,
  PostId,
  postIdSchema,
  posts,
  PostSlug,
  postSlugSchema,
} from "@/lib/db/schema/posts";
import { isValidLocale } from "@/lib/utils";
import { eq, and } from "drizzle-orm";
import { getLocale } from "next-intl/server";

export const getPosts = async () => {
  const locale = await getLocale();

  let newLocale: "en" | "fa" = "en"; // Default value or handle appropriately

  if (isValidLocale(locale)) {
    newLocale = locale;
  }

  const rows = await db.select().from(posts).where(eq(posts.locale, newLocale));

  const t: Post[] = rows;
  return { posts: t };
};

export const getPostById = async (id?: PostId) => {
  const locale = await getLocale();

  const { id: postId } = postIdSchema.parse({ id });

  let newLocale: "en" | "fa" = "en"; // Default value or handle appropriately

  if (isValidLocale(locale)) {
    newLocale = locale;
  }

  const [row] = await db
    .select()
    .from(posts)
    .where(and(eq(posts.id, postId), eq(posts.locale, newLocale)));
  if (row === undefined) return {};
  const t = row;
  return { post: t };
};

export const getPostBySlug = async (slug?: PostSlug) => {
  const { slug: postSlug } = postSlugSchema.parse({ slug });
  const [row] = await db
    .select()
    .from(posts)
    .where(and(eq(posts.slug, postSlug)));
  if (row === undefined) return {};
  const t = row;
  return { post: t };
};
