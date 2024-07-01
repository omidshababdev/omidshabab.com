import { cn } from "@repo/ui/lib/utils";
import React from "react";

const IconButton = ({
     children,
     animateOnHover = false,
     onClick,
     disabled,
     className,
}: {
     children: React.ReactNode;
     animateOnHover?: boolean
     onClick?: React.MouseEventHandler<HTMLDivElement>;
     disabled?: boolean;
     className?: string;
}) => {
     return (
          <div
               onClick={!disabled ? onClick : undefined}
               className={cn(
                    "flex justify-center items-center border-[3px] border-primary/20 bg-primary/10 cursor-pointer p-3 rounded-full hover:bg-primary/15 transform transition-all duration-500 aspect-square",
                    disabled && "cursor-not-allowed opacity-50",
                    animateOnHover && "hover:-translate-y-1",
                    className,
               )}>
               {children}
          </div>
     );
};

export default IconButton;