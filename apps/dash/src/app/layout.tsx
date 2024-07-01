import type { Metadata } from "next";
import "@repo/ui/globals.css"
import { LangDir, LangFont } from "@/lib/fonts";
import { NextIntlClientProvider } from "next-intl";
import { Toaster } from "@repo/ui/components/ui/sonner";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { GoogleAnalytics } from "@next/third-parties/google"
import { Analytics } from '@vercel/analytics/react';
import { cn } from "@repo/ui/lib/utils";
import Providers from "@/components/ProvidersWrapper";

import "@/styles/editor.css";
import { env } from "@/lib/env.mjs";

// Dynamic Metadata based on locales
export async function generateMetadata(): Promise<Metadata> {
  const tGeneral = getTranslations("general")
  const tMetadata = getTranslations("metadata")

  return {
    title: {
      default: `${(await tGeneral)("dashboard")} ,${(await tMetadata)("name")}`,
      template: `%s, ${(await tMetadata)("name")}`,
    },
    description: (await tMetadata)("description"),
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  const messages = await getMessages();

  const font = LangFont(locale);
  const dir = LangDir(locale);

  return (
    <html lang={locale} dir={dir}>
      <body className={cn(
        font,
        "cursor-default"
      )}>
        <Providers>
          <NextIntlClientProvider
            locale={locale}
            messages={messages}>
            {children}
            <Toaster
              font={font}
              others={{
                position: "top-center",
              }} />
          </NextIntlClientProvider>
        </Providers>
      </body>
      <Analytics />
      <GoogleAnalytics gaId={env.GOOGLE_ANALYTICS_ID} />
    </html>
  );
}
