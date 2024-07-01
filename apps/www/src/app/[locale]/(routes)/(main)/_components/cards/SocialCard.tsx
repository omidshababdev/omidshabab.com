import { cn } from "@repo/ui/lib/utils";
import Block from "../Block";
import { ReactNode } from "react";
import Link from "next/link";

const SocialCard = ({
     href,
     className,
     children,
     ...props
}: {
     href: string
     className?: string,
     children?: ReactNode
}) => {
     return (
          <Link
               href={href}
               target="_blank"
               className="col-span-2 md:col-span-2 row-span-2 md:row-span-2">
               <Block
                    card={cn(
                         "flex justify-center items-center cursor-pointer transition-all duration-500",
                         className,
                    )}
                    content="flex flex-col justify-center items-center gap-y-[10px]"
                    hover={false}
                    {...props}>
                    {children}
               </Block>
          </Link>

     );
}

export default SocialCard;