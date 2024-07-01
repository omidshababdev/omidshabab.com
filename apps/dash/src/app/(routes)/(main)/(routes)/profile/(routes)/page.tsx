"use client"

import { UploadCloud, CheckIcon, ShareIcon, LogOutIcon, TrashIcon } from 'lucide-react';
import { Input } from "antd";
import { cn } from "@repo/ui/lib/utils";
import { englishBricolageGrotesqueFont } from "@/lib/fonts";
import { Spacer } from "@nextui-org/spacer";
import { Button } from "@repo/ui/components/ui/button";
import IconButton from "@/components/buttons/icon-button";
import { ScrollArea } from "@repo/ui/components/ui/scroll-area";

const { TextArea } = Input

const Page = () => {
     return (
          <div className="flex flex-col sm:flex-row w-full h-full flex-grow">
               <ScrollArea className="flex w-full h-full flex-grow">
                    <div className="flex flex-col w-full h-full flex-grow gap-y-[20px]">
                         Profile

                         <div className="flex gap-x-[20px] items-center text-[15px] leading-[1.5rem] font-normal none-scroll-bar">
                              <div className="group/avatar flex items-center justify-center w-[120px] h-[120px] rounded-full bg-primary/[3%] text-text cursor-pointer hover:bg-primary/[6%] transition-all duration-500 border-dashed border-[5px] border-primary/5 hover:border-primary/10">
                                   <UploadCloud className="w-[50px] h-[50px] opacity-30 group-hover/avatar:opacity-50 transition-all duration-500" />
                              </div>
                              <p className="max-w-[250px] text-slate-600">
                                   Drop your Image Avatar here or click on it to choose one
                              </p>
                         </div>

                         <div className="flex flex-col text-[15px] font-normal text-slate-600">
                              Name
                              <TextArea
                                   placeholder="Type your name here..."
                                   autoSize={{ maxRows: 1 }}
                                   maxLength={25}
                                   autoComplete="off"
                                   className={cn(
                                        "text-left h-full text-[15px] sm:text-[18px] px-[15px] py-[15px] none-scroll-bar focus:ring-0 focus-visible:ring-0 bg-primary/[3%] rounded-none border-0 border-b-[2px] border-primary/10 hover:bg-primary/[5%] focus:bg-primary/[5%] hover:border-primary/10 focus:border-primary/10 transition-all duration-500 cursor-text",
                                        englishBricolageGrotesqueFont.className,
                                   )}
                              />
                         </div>

                         <div className="flex flex-col text-[15px] font-normal text-slate-600">
                              Username
                              <TextArea
                                   placeholder="Type your username here..."
                                   autoSize={{ maxRows: 1 }}
                                   maxLength={25}
                                   autoComplete="off"
                                   className={cn(
                                        "text-left h-full text-[15px] sm:text-[18px] px-[15px] py-[15px] none-scroll-bar focus:ring-0 focus-visible:ring-0 bg-primary/[3%] rounded-none border-0 border-b-[2px] border-primary/10 hover:bg-primary/[5%] focus:bg-primary/[5%] hover:border-primary/10 focus:border-primary/10 transition-all duration-500 cursor-text",
                                        englishBricolageGrotesqueFont.className,
                                   )}
                              />
                         </div>

                         <div className="flex flex-col text-[15px] font-normal text-slate-600">
                              Display Name
                              <TextArea
                                   placeholder="Type your display name here..."
                                   autoSize={{ maxRows: 1 }}
                                   maxLength={25}
                                   autoComplete="off"
                                   className={cn(
                                        "text-left h-full text-[15px] sm:text-[18px] px-[15px] py-[15px] none-scroll-bar focus:ring-0 focus-visible:ring-0 bg-primary/[3%] rounded-none border-0 border-b-[2px] border-primary/10 hover:bg-primary/[5%] focus:bg-primary/[5%] hover:border-primary/10 focus:border-primary/10 transition-all duration-500 cursor-text",
                                        englishBricolageGrotesqueFont.className,
                                   )}
                              />
                         </div>

                         <div className="flex flex-col text-[15px] font-normal text-slate-600">
                              Email
                              <TextArea
                                   placeholder="Type your email here..."
                                   autoSize={{ maxRows: 1 }}
                                   maxLength={25}
                                   autoComplete="off"
                                   className={cn(
                                        "text-left h-full text-[15px] sm:text-[18px] px-[15px] py-[15px] none-scroll-bar focus:ring-0 focus-visible:ring-0 bg-primary/[3%] rounded-none border-0 border-b-[2px] border-primary/10 hover:bg-primary/[5%] focus:bg-primary/[5%] hover:border-primary/10 focus:border-primary/10 transition-all duration-500 cursor-text",
                                        englishBricolageGrotesqueFont.className,
                                   )}
                              />
                         </div>

                         <div className="flex flex-col text-[15px] font-normal text-slate-600">
                              Phone
                              <TextArea
                                   placeholder="Type your phone here..."
                                   autoSize={{ maxRows: 1 }}
                                   maxLength={25}
                                   autoComplete="off"
                                   className={cn(
                                        "text-left h-full text-[15px] sm:text-[18px] px-[15px] py-[15px] none-scroll-bar focus:ring-0 focus-visible:ring-0 bg-primary/[3%] rounded-none border-0 border-b-[2px] border-primary/10 hover:bg-primary/[5%] focus:bg-primary/[5%] hover:border-primary/10 focus:border-primary/10 transition-all duration-500 cursor-text",
                                        englishBricolageGrotesqueFont.className,
                                   )}
                              />
                         </div>

                         <div className="flex flex-col text-[15px] font-normal text-slate-600">
                              About
                              <TextArea
                                   placeholder="Type about yourself here..."
                                   autoSize={{ minRows: 4, maxRows: 6 }}
                                   maxLength={250}
                                   autoComplete="off"
                                   className={cn(
                                        "text-left h-full text-[15px] sm:text-[18px] px-[15px] py-[15px] none-scroll-bar focus:ring-0 focus-visible:ring-0 bg-primary/[3%] rounded-none border-0 border-b-[2px] border-primary/10 hover:bg-primary/[5%] focus:bg-primary/[5%] hover:border-primary/10 focus:border-primary/10 transition-all duration-500 cursor-text",
                                        englishBricolageGrotesqueFont.className,
                                   )}
                              />
                         </div>

                         <div className="h-[0px]" />

                         <div className="flex gap-x-[20px] justify-between">
                              <div className="flex flex-grow gap-x-[15px]">
                                   <div className="flex items-center justify-end gap-x-[10px]">
                                        <IconButton
                                             onClick={() => null}
                                             className="p-[10px]">
                                             <LogOutIcon className="size-[20px] sm:size-[25px] text-primary" />
                                        </IconButton>

                                        <p className="w-min min-w-[60px] text-start text-[15px] leading-[1.25rem] text-slate-600 font-normal opacity-50">
                                             Logout Now
                                        </p>
                                   </div>

                                   <div className="flex items-center justify-end gap-x-[10px]">
                                        <IconButton
                                             onClick={() => null}
                                             className="p-[10px]">
                                             <TrashIcon className="size-[20px] sm:size-[25px] text-primary" />
                                        </IconButton>

                                        <p className="w-min min-w-[100px] text-start text-[15px] leading-[1.25rem] text-slate-600 font-normal opacity-50">
                                             Delete your Account
                                        </p>
                                   </div>
                              </div>

                              <div className="flex items-center justify-end gap-x-[10px]">
                                   <p className="w-min min-w-[150px] text-end text-[15px] leading-[1.25rem] text-slate-600 font-normal opacity-50">
                                        Don&apos;t forget to save your changes
                                   </p>

                                   <IconButton
                                        onClick={() => null}
                                        className="p-[10px]">
                                        <CheckIcon className="size-[20px] sm:size-[25px] text-primary" />
                                   </IconButton>
                              </div>
                         </div>

                         <Spacer className="h-[15px]" />
                    </div>
               </ScrollArea>

               <Spacer className="hidden sm:flex w-[55px]" />

               <ScrollArea className="flex w-full h-full flex-grow none-scroll-bar">
                    <div className="relative flex flex-col gap-y-[20px] bg-primary/[3%] rounded-[20px] h-full w-full px-[35px] py-[20px]">
                         <div className="flex flex-col">
                              Preview of your Profile
                              <span className="text-[15px] font-normal text-slate-600 mt-[-5px]">
                                   See how others see your profile and change it in real time
                              </span>
                         </div>

                         <div className="flex flex-col gap-y-[20px]">
                              <div className="flex items-center justify-center w-[120px] h-[120px] rounded-full bg-primary/[3%] text-text cursor-pointer hover:bg-primary/[6%] transition-all duration-500 border-[2px] border-primary/5 hover:border-primary/10">

                              </div>

                              <div className="flex flex-col gap-y-[5px]">
                                   <div className="text-slate-800 font-semibold text-[20px] line-clamp-1 leading-[1.5rem]">
                                        Omid Shabab - Indie Hacker
                                   </div>

                                   <div className="flex text-slate-600 font-normal text-[15px] line-clamp-1 leading-[1.5rem]">
                                        @omidshabab - Offline
                                   </div>
                              </div>
                         </div>

                         <div className="flex text-slate-800 font-normal text-[16px] line-clamp-3 leading-[2.0rem]">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit assumenda velit sequi tenetur magni dicta soluta tempore doloribus voluptates cupiditate optio molestias adipisci aspernatur unde exercitationem reprehenderit, sapiente, necessitatibus animi?
                         </div>

                         <div className="flex gap-x-[10px] items-center">
                              <Button
                                   variant="secondary"
                                   size="sm"
                                   className="w-min">
                                   Follow
                              </Button>

                              <Button
                                   variant="secondary"
                                   size="sm"
                                   className="w-min">
                                   Connect
                              </Button>

                              <Button
                                   variant="secondary"
                                   size="sm"
                                   className="w-min">
                                   Send message
                              </Button>

                              <ShareIcon className="size-[15px] sm:size-[20px] text-slate-800" />
                         </div>

                         <div className="flex text-slate-800 font-normal text-[16px] line-clamp-3 leading-[2.0rem]">
                              Consectetur adipisicing elit
                         </div>
                    </div>
               </ScrollArea>
          </div>
     );
}

export default Page;