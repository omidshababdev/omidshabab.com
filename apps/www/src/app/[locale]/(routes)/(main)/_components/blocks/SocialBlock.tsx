"use client"

import { SiGithub, SiInstagram, SiTwitter, SiX, SiYoutube } from "react-icons/si";
import SocialCard from "../cards/SocialCard";
import { site } from "@/config/site";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SocialBlock = () => {
     const router = useRouter()

     return (
          <div className="col-span-12 md:col-span-3 md:row-span-4 grid grid-cols-4 grid-rows-4 gap-3">
               <SocialCard
                    href={site.links.youtube}
                    className=" bg-red-600/90 hover:bg-red-600">
                    <SiYoutube size={45} className="text-white" />
               </SocialCard>

               <SocialCard
                    href={site.links.github}
                    className=" bg-black/90 hover:bg-black">
                    <SiGithub size={45} className="text-white" />
               </SocialCard>

               <SocialCard
                    href={site.links.twitter}
                    className="bg-blue-600/90 hover:bg-blue-600">
                    <SiX size={45} className="text-white" />
               </SocialCard>

               <SocialCard
                    href={site.links.instagram}
                    className="bg-pink-600/90 hover:bg-pink-600">
                    <SiInstagram size={45} className="text-white" />
               </SocialCard>
          </div>
     );
}

export default SocialBlock;