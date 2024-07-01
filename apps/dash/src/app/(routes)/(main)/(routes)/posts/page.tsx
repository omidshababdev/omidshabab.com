"use client"

import PostItem from "@/components/posts/PostItem";
import PostItemShimmer from "@/components/posts/PostItemShimmer";
import { trpc } from "@/lib/trpc/client";
import { ScrollArea } from "@repo/ui/components/ui/scroll-area";

const Page = () => {
     const posts = trpc.posts.getPosts.useQuery().data?.posts;

     return (
          <ScrollArea className="w-full h-full none-scroll-bar overflow-y-hidden">
               <div className="flex flex-col flex-grow w-full h-full gap-y-[20px] mb-[35px]">
                    Your Created Posts
                    <div className="flex flex-col w-full">
                         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[20px] gap-y-[30px] leading-[2rem]">
                              {posts && posts.map((post) => (
                                   <PostItem
                                        key={post.id}
                                        post={post} />
                              )).reverse()}

                              {!posts && [1, 2, 3, 4, 5, 6].map((index) => (
                                   <PostItemShimmer
                                        key={index} />
                              )).reverse()}
                         </div>

                         {posts?.length === 0 &&
                              <div className="flex w-full min-w-max h-full text-[16px] font-light text-slate-600">
                                   Not found any Post!
                              </div>}
                    </div>
               </div>
          </ScrollArea>
     );
}

export default Page;