import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Block from "../Block";
import Avatar from "../Avatar";
import CallToActionLink from "@/components/CallToActionLink";

const IntroBlock = () => {
     return (
          <Block card="md:col-span-4 row-span-4">
               <Avatar />
               <div className="flex flex-col gap-y-[5px]">
                    <div className="text-[22px] font-semibold">
                         omidshabab.
                    </div>
                    <div className="text-[18px] leading-[1.8rem] text-foreground">
                         dreaming, designing, and building world-changing softwares is my business. welcome to my world
                    </div>
               </div>
               <CallToActionLink text="Contact me" />
          </Block>
     );
}

export default IntroBlock;