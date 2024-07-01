import { getUserAuth } from "@/lib/auth/utils"
import { Metadata } from "next"
import { getLocale, getTranslations } from "next-intl/server"
import { redirect } from "next/navigation"

// Dynamic Metadata based on locales
export async function generateMetadata(): Promise<Metadata> {
  const tMetadata = getTranslations("register_metadata")

  return {
    title: (await tMetadata)("title"),
    description: (await tMetadata)("description"),
  }
}

export default async function layout({
  children
}: {
  children: React.ReactNode
}) {
  const { session } = await getUserAuth();
  if (session) redirect("/");

  return (
    <div className="w-full h-full flex justify-center items-center">
      {children}
    </div>
  )
}