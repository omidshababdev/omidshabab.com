"use client"

import { dashRoutes } from "@/config/routes";
import { useRouter } from "next/navigation";

const PostItem = () => {
     const router = useRouter()

     return (
          <div
               onClick={() => router.push(dashRoutes.editPost)}
               className="group/item col-span-4 lg:col-span-1 md:col-span-2 flex flex-col gap-y-[15px] cursor-pointer">
               <div className="aspect-[6/3.5] bg-primary/[3%] rounded-[15px] group-hover/item:bg-primary/[6%] transition-all duration-500">

               </div>
               <div className="flex flex-col gap-y-[5px]">
                    <div className="group-hover/item:text-text transition-all duration-500 font-normal text-[16px] leading-[1.5rem]">
                         Lorem, ipsum dolor sit amet consectetur
                    </div>
                    <p className="group-hover/item:text-text/80 text-slate-800 transition-all duration-500 font-normal text-[14px] leading-[1.5rem]">
                         Amet Consectetur
                    </p>
               </div>
          </div>
     );
}

export default PostItem;