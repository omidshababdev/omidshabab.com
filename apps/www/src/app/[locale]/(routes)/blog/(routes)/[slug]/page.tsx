"use client";

import { useEffect, useState, useMemo, Suspense } from "react";
import { ScrollArea } from "@repo/ui/components/ui/scroll-area";
import axios from 'axios';
import { generateHTML } from '@tiptap/html';
import { defaultExtensions } from '@/components/editor/Extensions';
import TableOfContents from '@/components/TableOfContents';
import Loading from "@/app/[locale]/loading";
import { Post } from "@/types";

const Page = ({
     params,
}: {
     params: {
          slug: string
     }
}) => {
     const [post, setPost] = useState<Post | null>(null);

     useEffect(() => {
          const fetchPost = async () => {
               try {
                    const response = await axios.get(`${process.env.API_BASE_URL}/posts/${params.slug}`);
                    setPost(response.data);
               } catch (error) {
                    console.error('Error fetching the post:', error);
               }
          };

          fetchPost();
     }, [params.slug]);

     const output = useMemo(() => {
          if (post) {
               return generateHTML(JSON.parse(post.desc), defaultExtensions);
          }
          return "";
     }, [post]);

     if (!post) {
          return (
               <Loading />
          )
     }

     return (
          <Suspense fallback={<Loading />}>
               <div className="relative flex flex-col sm:flex-row w-full h-full gap-x-[45px] py-[20px] sm:py-[25px]">
                    <div className="flex flex-col w-full flex-grow gap-y-[20px] text-[20px] leading-[2.5rem]">
                         <div className="text-[32px] font-semibold cursor-text leading-[3rem] text-slate-800">
                              {post.title}
                         </div>

                         <div className="w-full aspect-[6/3] rounded-[20px] bg-primary/[3%] mb-[10px]">
                         </div>

                         <div className="w-full flex flex-col cursor-text">
                              <div className="prose w-full flex flex-col" dangerouslySetInnerHTML={{ __html: output }} />
                         </div>
                    </div>

                    <div className="relative container min-w-[250px] max-w-[280px] text-slate-600 leading-[2rem] cursor-text px-0">
                         <div className="sticky top-[97px] flex flex-col w-full">
                              <div className="text-[18px] font-medium text-slate-800">
                                   Table of Contents
                              </div>

                              <TableOfContents content={output} />
                         </div>
                    </div>
               </div>
          </Suspense>
     );
}

export default Page;
