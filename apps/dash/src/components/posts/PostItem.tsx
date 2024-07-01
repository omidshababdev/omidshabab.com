"use client"

import { dashRoutes } from "@/config/routes";
import { CompletePost, NewPostParams, Post } from "@/lib/db/schema/posts";
import { useRouter } from "next/navigation";
import { toast } from "sonner"
import { trpc } from "@/lib/trpc/client";

import {
     ContextMenu,
     ContextMenuContent,
     ContextMenuItem,
     ContextMenuTrigger,
} from "@repo/ui/components/ui/context-menu";
import { Delete, EditSquare, CaretRight } from "react-iconly";
import { generateRandomString } from "@/lib/utils";

const PostItem = ({
     post
}: {
     post: Post
}) => {
     const router = useRouter()
     const utils = trpc.useUtils();

     const onSuccess = async (action: "create" | "update" | "delete", data?: { error?: string, post: Post }) => {
          if (data?.error) {
               toast.error(data.error);
               return;
          }

          await utils.posts.getPosts.invalidate();

          if (action === "create") {
               router.push(dashRoutes.posts + "/" + data?.post?.id);
          } else if (action === "update") {
               router.refresh();
          }

          toast.success(`Post ${action}d!`);
     };

     const onError = async (action: "create" | "update" | "delete", data?: { error?: string }) => {
          if (data?.error) {
               toast.error(data.error);
               return;
          }

          toast.error(`Post ${action} failed!`);
     };

     const { mutate: createPost, isLoading: isCreating } = trpc.posts.createPost.useMutation({
          onSuccess: (data) => onSuccess("create", data),
          onError: (err) => onError("create", { error: err.message }),
     });

     const { mutate: deletePost, isLoading: isDeleting } = trpc.posts.deletePost.useMutation({
          onSuccess: () => onSuccess("delete"),
          onError: (err) => onError("delete", { error: err.message }),
     });

     const handleDuplicate = () => {
          const { id, userId, published, createdAt, updatedAt, slug, ...restPost } = post;

          const randomString = generateRandomString(10)

          const newPostData: NewPostParams = {
               ...restPost,
               slug: `${slug}-${randomString}`,
               published: false
          };

          console.log(`=- post duplicated: ${JSON.stringify(newPostData)}`)

          createPost(newPostData)
     }

     return (
          <ContextMenu>
               <ContextMenuTrigger>
                    <div
                         onClick={() => router.push(`${dashRoutes.posts}/${post.id}`)}
                         className="group/item col-span-1 flex flex-col gap-y-[15px] cursor-pointer">
                         <div className="aspect-[6/3.5] bg-primary/[3%] rounded-[15px] group-hover/item:bg-primary/[6%] transition-all duration-500">

                         </div>
                         <div className="flex flex-col gap-y-[5px]">
                              <div className="group-hover/item:text-text transition-all duration-500 font-normal text-[16px] leading-[1.5rem] line-clamp-2">
                                   {post.title}
                              </div>
                              <div className="font-light text-[14px] leading-[1.5rem] line-clamp-1">
                                   {post.published ? (
                                        <div className="text-green-900 group-hover/item:text-green-900/80 transition-all duration-500">
                                             / published
                                        </div>
                                   ) : (
                                        <div className="text-text group-hover/item:text-text/80 transition-all duration-500">
                                             / drafted
                                        </div>
                                   )}
                              </div>
                         </div>
                    </div>
               </ContextMenuTrigger>
               <ContextMenuContent className="w-auto font-medium">
                    <ContextMenuItem
                         onClick={() => { }}
                         className="flex gap-x-2 text-slate-800">
                         <EditSquare
                              style={{ width: "16px", height: "16px" }}
                              stroke="bold" />
                         Edit Post
                    </ContextMenuItem>

                    <ContextMenuItem
                         onClick={() => handleDuplicate()}
                         className="flex gap-x-2 text-slate-800">
                         <CaretRight
                              style={{ width: "16px", height: "16px" }}
                              stroke="bold" />
                         Duplicate
                    </ContextMenuItem>

                    <ContextMenuItem
                         onClick={() => deletePost({ id: post.id })}
                         className="flex gap-x-2 text-text">
                         <Delete
                              style={{ width: "16px", height: "16px" }}
                              stroke="bold"
                         />
                         Delete
                    </ContextMenuItem>
               </ContextMenuContent>
          </ContextMenu>
     );
}

export default PostItem;