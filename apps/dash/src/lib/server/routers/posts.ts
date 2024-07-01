import {
  insertPostParams,
  postIdSchema,
  postSlugSchema,
  updatePostParams,
} from "@/lib/db/schema/posts";
import { publicProcedure, router } from "../trpc";
import { getPostById, getPostBySlug, getPosts } from "@/lib/api/posts/queries";
import { createPost, deletePost, updatePost } from "@/lib/api/posts/mutations";

export const postsRouter = router({
  getPosts: publicProcedure.query(async () => {
    return getPosts();
  }),
  getPostById: publicProcedure.input(postIdSchema).query(async ({ input }) => {
    return getPostById(input.id);
  }),
  getPostBySlug: publicProcedure
    .input(postSlugSchema)
    .query(async ({ input }) => {
      return getPostBySlug(input.slug);
    }),
  createPost: publicProcedure
    .input(insertPostParams)
    .mutation(async ({ input }) => {
      return createPost(input);
    }),
  updatePost: publicProcedure
    .input(updatePostParams)
    .mutation(async ({ input }) => {
      return updatePost(input.id, input);
    }),
  deletePost: publicProcedure
    .input(postIdSchema)
    .mutation(async ({ input }) => {
      return deletePost(input.id);
    }),
});
