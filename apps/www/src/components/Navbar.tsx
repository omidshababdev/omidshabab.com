"use client"

import Image from "next/image";
import Link from "next/link";
import { defaultRoutes } from "@/config/routes";
import Menu from "./Menu";

const Navbar = () => {
     return (
          <div className="flex sticky top-0 z-50 items-center justify-between gap-x-5 shrink-0 py-[20px]">
               <div className="flex gap-x-5 items-center">
                    <div className="flex w-min min-w-[35px] sm:w-auto sm:min-w-auto gap-x-[10px] items-center justify-start">
                         <Link
                              href={defaultRoutes.default}
                              className="flex items-center gap-x-[15px] font-medium text-text">
                              <Image
                                   width={32}
                                   height={32}
                                   src="/images/logo-64x64.png"
                                   alt="logo"
                                   className="w-[32px] h-[32px] aspect-square cursor-pointer" />

                              <div className="flex gap-x-[5px]">omidshabab.<span className="hidden sm:block font-light text-slate-600">/ software</span></div>
                         </Link>

                         {/* <ToggleButton /> */}
                    </div>

                    <div className="hidden sm:block">
                         <Menu />
                    </div>
               </div>

               <div className="flex w-min min-w-[50px] sm:w-auto sm:min-w-auto gap-x-[20px] items-center justify-end">
                    <div className="hidden sm:block text-[15px] font-light text-slate-600 cursor-pointer">
                         english / persian
                    </div>
               </div>
          </div>
     );
}

export default Navbar;