import { cn } from "@repo/ui/lib/utils";
import Sidebar from "./Sidebar";
import CourseSection from "./sidebar/sections/CourseSection";
import KeySection from "./sidebar/sections/KeySection";
import PortfolioSection from "./sidebar/sections/PortfolioSection";
import PostSection from "./sidebar/sections/PostSection";
import ProfileSection from "./sidebar/sections/ProfileSection";
import { useState } from "react";
import { ScrollArea } from "@repo/ui/components/ui/scroll-area";
import { Card, ProgressBar } from '@tremor/react';
import ComponentSection from "./sidebar/sections/ComponentSection";
import BookSection from "./sidebar/sections/BookSection";
import PodcastSection from "./sidebar/sections/PodcastSection";

const SidebarDesktop = () => {
     const [direction] = useState(document.documentElement.dir);

     return (
          <Sidebar className={cn(
               direction === "ltr" ? "-translate-x-full rounded-tr-[20px]" : "translate-x-full rounded-tl-[20px]",
               "bg-primary/[3%] peer absolute inset-y-0 z-30 hidden duration-300 ease-in-out data-[state=open]:translate-x-0 md:flex md:flex-col md:justify-between md:min-w-[250px] md:max-w-[250px]"
          )}>
               <ScrollArea>
                    <div className="flex flex-col justify-between gap-y-[20px] px-[25px] py-[15px] pb-[30px] mb-[100px]">
                         {/* Posts Section */}
                         <PostSection />

                         {/* Portfolio Section */}
                         <PortfolioSection />

                         {/* Courses Section */}
                         <CourseSection />

                         {/* Component Section */}
                         <ComponentSection />

                         {/* Book Section */}
                         <BookSection />

                         {/* Podcast Section */}
                         <PodcastSection />

                         {/* Key Section */}
                         <KeySection />

                         {/* Profile Section */}
                         <ProfileSection />
                    </div>
               </ScrollArea>

               <div className="fixed flex w-full items-center justify-center h-[100px] bottom-0 bg-orange-50 border-t-[1px] border-primary/5">
                    <Card className="mx-auto max-w-sm bg-transparent ring-0">
                         <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content flex items-center justify-between">
                              <span>$9,012 &bull; 45%</span>
                              <span>$20,000</span>
                         </p>
                         <ProgressBar value={45} color="orange" className="mt-[5px] opacity-20 bg-opacity-10" />
                         <p className="text-[12px] text-slate-600 font-normal py-[5px]">
                              consectetur adipisicing elit
                         </p>
                    </Card>
               </div>
          </Sidebar>
     );
}

export default SidebarDesktop;