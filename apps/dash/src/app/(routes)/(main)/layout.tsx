import { checkAuth } from "@/lib/auth/utils";
import TrpcProvider from "@/lib/trpc/Provider";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { cookies } from "next/headers";
import { ReactNode } from "react";

// Dynamic Metadata based on locales
export async function generateMetadata(): Promise<Metadata> {
     const tMetadata = getTranslations("dash_metadata")

     return {
          title: {
               default: (await tMetadata)("title"),
               template: `%s, ${(await tMetadata)("title")}.`,
          },
          description: (await tMetadata)("description"),
     }
}

export default async function layout({
     children
}: {
     children: ReactNode
}) {
     await checkAuth();

     return (
          <TrpcProvider cookies={cookies().toString()}>
               <div className="flex w-full h-full">
                    {children}
               </div>
          </TrpcProvider>
     )
}