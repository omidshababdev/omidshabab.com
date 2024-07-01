import { Metadata } from "next"
import { getTranslations } from "next-intl/server"

// Dynamic Metadata based on locales
export async function generateMetadata(): Promise<Metadata> {
     const tMetadata = getTranslations("posts_metadata")

     return {
          title: {
               default: (await tMetadata)("title"),
               template: `%s, ${(await tMetadata)("title")}.`,
          },
          description: (await tMetadata)("description"),
     }
}

export default function layout({
     children
}: {
     children: React.ReactNode,
}) {
     return children
}