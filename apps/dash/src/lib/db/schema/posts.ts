import { type getPosts } from "@/lib/api/posts/queries";
import { nanoid, timestamps } from "@/lib/utils";
import { sql } from "drizzle-orm";
import {
  boolean,
  json,
  pgTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const posts = pgTable("posts", {
  id: varchar("id", { length: 191 })
    .primaryKey()
    .$defaultFn(() => nanoid()),
  title: varchar("title", { length: 150 }).notNull(),
  desc: text("desc").notNull(),
  image: varchar("image", { length: 500 }).notNull(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  published: boolean("published").default(false),
  userId: varchar("user_id", { length: 256 }).notNull(),

  createdAt: timestamp("created_at")
    .notNull()
    .default(sql`now()`),
  updatedAt: timestamp("updated_at")
    .notNull()
    .default(sql`now()`),
});

// Schema for posts - used to validate API requests
const baseSchema = createSelectSchema(posts).omit(timestamps);

export const insertPostSchema = createInsertSchema(posts).omit(timestamps);
export const insertPostParams = baseSchema
  .extend({
    published: z.coerce.boolean(),
  })
  .omit({
    id: true,
    userId: true,
  });

export const updatePostSchema = baseSchema;
export const updatePostParams = baseSchema
  .extend({
    published: z.coerce.boolean(),
  })
  .omit({
    userId: true,
  });
export const postIdSchema = baseSchema.pick({ id: true });
export const postSlugSchema = baseSchema.pick({ slug: true });

// Types for posts - used to type API request params and within Components
export type Post = typeof posts.$inferSelect;
export type NewPost = z.infer<typeof insertPostSchema>;
export type NewPostParams = z.infer<typeof insertPostParams>;
export type UpdatePostParams = z.infer<typeof updatePostParams>;
export type PostId = z.infer<typeof postIdSchema>["id"];
export type PostSlug = z.infer<typeof postSlugSchema>["slug"];

// this type infers the return from getPost() - meaning it will include any joins
export type CompletePost = Awaited<
  ReturnType<typeof getPosts>
>["posts"][number];
