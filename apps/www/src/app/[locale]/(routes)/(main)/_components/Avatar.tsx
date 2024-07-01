import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";

const Avatar = () => {
     return (
          <div className="relative aspect-square w-[80px] bg-primary/5 rounded-full cursor-pointer">
               <Image
                    alt="avatar"
                    className="rounded-full"
                    width={80}
                    height={80}
                    src="https://avatars.githubusercontent.com/u/100057185?v=4" />
               <div className="absolute flex p-[2px] items-center justify-center aspect-square bg-white/50 rounded-full bottom-0 right-0 backdrop-blur-sm border-[2px] border-foreground/10">
                    <ChevronDownIcon className="w-5 h-5 text-foreground" />
               </div>
          </div>
     );
}

export default Avatar;