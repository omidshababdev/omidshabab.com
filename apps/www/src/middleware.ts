import { type Locale, locales } from "@/lib/locales";
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales,
  defaultLocale: "en" satisfies Locale,
  localeDetection: true,
  localePrefix: "as-needed",
});

export const config = {
  matcher: [
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};