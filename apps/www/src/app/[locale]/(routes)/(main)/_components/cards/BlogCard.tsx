import { cn } from "@repo/ui/lib/utils";
import Block from "../Block";
import CallToActionLink from "@/components/CallToActionLink";

const BlogCard = ({
     className,
     cta
}: {
     className?: string,
     cta?: boolean | false
}) => {
     return (
          <Block card={cn(
               "md:col-span-6 min-h-[250px] cursor-pointer hover:bg-primary/10 transition-all duration-500",
               className
          )}
               content="flex flex-col justify-end gap-y-[15px]">
               <div className="line-clamp-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
               </div>
               {cta && <CallToActionLink text="Read Now" />}
          </Block>
     );
}

export default BlogCard;