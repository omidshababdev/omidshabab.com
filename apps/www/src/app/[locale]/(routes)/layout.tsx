import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { LangDir } from "@/lib/fonts"
import { Locale } from "@/lib/locales"
import { ScrollArea } from "@repo/ui/components/ui/scroll-area"
import { ReactNode } from "react"

export default function layout({
     children,
     params: {
          locale
     }
}: {
     children: ReactNode
     params: {
          locale: Locale
     }
}) {
     const dir = LangDir(locale);

     return (
          <div className="w-full h-screen bg-grid-black/[0.1] flex relative justify-center">
               <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
               <div className="w-full max-w-6xl flex items-center justify-center h-full cursor-d z-20">
                    <div className="flex flex-col w-full h-full">
                         <ScrollArea dir={dir} className="w-full h-full none-scroll-bar overflow-y-hidden">
                              <div className="flex flex-col w-full h-full gap-x-[30px] px-[30px] xl:px-[0px]">
                                   <Navbar dir={dir} />
                                   {children}
                                   <Footer />
                              </div>
                         </ScrollArea>
                    </div>
               </div>
          </div>
     )
}
