"use client"

import Loading from "@/app/[locale]/loading";
import { Post } from "@/types";
import { ScrollArea } from "@repo/ui/components/ui/scroll-area";
import axios from "axios";
import { useEffect, useState } from "react";
import PostItem from "../_components/PostItem";
import PostItemShimmer from "../_components/PostItemShimmer";

const Page = () => {
     const [posts, setPosts] = useState<Post[] | null>(null);

     useEffect(() => {
          const fetchPost = async () => {
               try {
                    const response = await axios.get(`${process.env.API_BASE_URL}/posts`);
                    setPosts(response.data);
               } catch (error) {
                    console.error('Error fetching the post:', error);
               }
          };

          fetchPost();
     }, []);

     return (
          <div className="flex flex-col flex-grow w-full h-full gap-y-[20px] py-[20px] sm:py-[25px]">
               <h2 className="text-[20px] font-medium leading-[1.8rem] sm:leading-[2.5rem]">
                    Mastering Software Creation: Your Guide
               </h2>
               <div className="flex flex-col w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[20px] gap-y-[30px] leading-[2rem]">
                         {posts && posts.map((post, index) => (
                              <PostItem
                                   key={index}
                                   post={post} />
                         )).reverse()}

                         {!posts && [1, 2, 3, 4, 5, 6].map((index) => (
                              <PostItemShimmer
                                   key={index} />
                         )).reverse()}
                    </div>

                    {posts?.length === 0 &&
                         <div className="flex w-full min-w-max h-full">
                              Not found any Post!
                         </div>}
               </div>
          </div>
     );
}

export default Page;