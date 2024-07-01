import { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { ReactNode } from "react"

// Dynamic Metadata based on locales
export async function generateMetadata(): Promise<Metadata> {
     const tMetadata = getTranslations("profile_metadata")

     return {
          title: {
               default: (await tMetadata)("title"),
               template: `%s, ${(await tMetadata)("title")}`,
          },
          description: (await tMetadata)("description"),
     }
}

export default function layout({
     children
}: {
     children: ReactNode
}) {
     return children
}