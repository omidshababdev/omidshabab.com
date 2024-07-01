"use client"

import { cn } from "@repo/ui/lib/utils";
import { motion, MotionProps, useMotionTemplate, useMotionValue } from "framer-motion";
import { ReactNode } from "react";

type Props = {
     card?: string,
     content?: string,
     hover?: boolean,
     onClick?: () => void,
     children?: ReactNode
} & MotionProps

const Block = ({
     card,
     content,
     hover = true,
     onClick,
     children,
     ...props
}: Props) => {
     let mouseX = useMotionValue(0);
     let mouseY = useMotionValue(0);

     let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
     let style = { maskImage, WebkitMaskImage: maskImage };

     function onMouseMove({ currentTarget, clientX, clientY }: any) {
          let { left, top } = currentTarget.getBoundingClientRect();
          mouseX.set(clientX - left);
          mouseY.set(clientY - top);
     }

     return (
          <motion.div
               className={cn(
                    "group/card flex w-full h-full col-span-12 md:col-span-4 cursor-pointer relative rounded-[25px] border-primary/10 bg-primary/5",
                    card
               )}
               onClick={onClick}
               {...props}>

               <div className={cn(
                    "flex flex-col gap-y-[20px] text-text text-[20px] px-[30px] py-[25px]",
                    content
               )}>
                    {children}
               </div>

               <motion.div
                    className={cn(
                         "absolute flex w-full h-full opacity-0 rounded-[25px] sm:group-hover/card:opacity-15 bg-primary transition-all duration-500",
                         !hover && "opacity-0 group-hover/card:opacity-0"
                    )}
                    style={style}
                    onMouseMove={onMouseMove} />

          </motion.div>
     );
}

export default Block;