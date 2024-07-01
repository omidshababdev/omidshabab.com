import ProfileAvatar from "@/components/ProfileAvatar";
import ToggleButton from "./ToggleButton";
import Image from "next/image";
import Link from "next/link";

import {
     Breadcrumb,
     BreadcrumbItem,
     BreadcrumbLink,
     BreadcrumbList,
     BreadcrumbPage,
     BreadcrumbSeparator,
} from "@repo/ui/components/ui/breadcrumb"

import { dashRoutes } from "@/config/routes";
import { useSelectedLayoutSegments } from "next/navigation";
import { capitalize } from "@/lib/utils";

const Navbar = () => {
     const segments = useSelectedLayoutSegments();

     return (
          <div className="flex sticky top-0 z-50 items-center justify-between gap-x-5 shrink-0 px-[25px] py-[20px]">
               <div className="flex gap-x-5 items-center">
                    <div className="flex w-min min-w-[35px] sm:w-auto sm:min-w-auto gap-x-[10px] items-center justify-start">
                         <Link href={dashRoutes.default}>
                              <Image
                                   width={32}
                                   height={32}
                                   src="/images/logo-64x64.png"
                                   alt="logo"
                                   className="w-[32px] h-[32px] aspect-square cursor-pointer" />
                         </Link>

                         <ToggleButton />
                    </div>

                    <div className="sm:px-[15px]">
                         <Breadcrumb>
                              <BreadcrumbList>
                                   <BreadcrumbItem>
                                        <BreadcrumbLink>
                                             <Link href={dashRoutes.default}>Dashboard</Link>
                                        </BreadcrumbLink>
                                   </BreadcrumbItem>
                                   {segments[0] && (
                                        <>
                                             <BreadcrumbSeparator />
                                             <BreadcrumbItem>
                                                  <BreadcrumbLink>
                                                       <Link href={`/${segments[0]}`}>{capitalize(segments[0])}</Link>
                                                  </BreadcrumbLink>
                                             </BreadcrumbItem>
                                        </>
                                   )}

                                   {segments[2] && (
                                        <>
                                             <BreadcrumbSeparator />
                                             <BreadcrumbItem>
                                                  <BreadcrumbPage>{capitalize(segments[2])}</BreadcrumbPage>
                                             </BreadcrumbItem>
                                        </>
                                   )}
                              </BreadcrumbList>
                         </Breadcrumb>
                    </div>
               </div>

               <div className="flex w-min min-w-[50px] sm:w-auto sm:min-w-auto gap-x-[20px] items-center justify-end">
                    <div className="text-[15px] font-light text-slate-600 cursor-pointer">
                         english / persian
                    </div>
                    <ProfileAvatar />
               </div>
          </div>
     );
}

export default Navbar;