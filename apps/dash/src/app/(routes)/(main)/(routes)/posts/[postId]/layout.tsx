import { PostId } from '@/lib/db/schema/posts'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

// Dynamic Metadata based on locales
export async function generateMetadata({
     params: {
          postId
     }
}: {
     params: {
          postId: PostId
     }
}): Promise<Metadata> {
     const tGeneral = getTranslations("general")

     const getTitle = async () => {
          if (postId === "create") {
               return (await tGeneral)("create")
          } else {
               return (await tGeneral)("edit")
          }
     }

     return {
          title: await getTitle(),
          description: (await tGeneral)("lorem"),
     }
}

export default function layout({
     children
}: {
     children: React.ReactNode
}) {
     return children
}
