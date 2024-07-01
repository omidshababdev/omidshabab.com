import { getTranslations } from "next-intl/server";
import BlogSection from "./_components/sections/BlogSection";
import IntroSection from "./_components/sections/IntroSection";
import LastSection from "./_components/sections/LastSection";
import PortfolioSection from "./_components/sections/PortfolioSection";
import { Metadata } from "next";

// Dynamic Metadata based on locales
export async function generateMetadata(): Promise<Metadata> {
     const tMetadata = getTranslations("home_metadata")

     return {
          title: {
               default: (await tMetadata)("title"),
               template: `%s, ${(await tMetadata)("title")}`,
          },
          description: (await tMetadata)("desc"),
     }
}

const Page = () => {
     return (
          <div className="flex flex-col sm:flex-row w-full h-full gap-x-[30px] py-0 sm:py-[15px]">
               <div className="grid grid-cols-12 grid-flow-dense gap-5">
                    <IntroSection />

                    <PortfolioSection />

                    <BlogSection />

                    <LastSection />
               </div>
          </div>
     );
}

export default Page;