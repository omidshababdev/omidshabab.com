import { useLocale } from "next-intl";
import { isRtlLang } from "rtl-detect";
import localFont from "next/font/local";

// ENGLISH FONTS
export const englishBricolageGrotesqueFont = localFont({
  src: [
    {
      path: "../assets/fonts/en/BricolageGrotesque/BricolageGrotesque-ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "../assets/fonts/en/BricolageGrotesque/BricolageGrotesque-Light.ttf",
      weight: "300",
    },
    {
      path: "../assets/fonts/en/BricolageGrotesque/BricolageGrotesque-Regular.ttf",
      weight: "400",
    },
    {
      path: "../assets/fonts/en/BricolageGrotesque/BricolageGrotesque-Medium.ttf",
      weight: "500",
    },
    {
      path: "../assets/fonts/en/BricolageGrotesque/BricolageGrotesque-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../assets/fonts/en/BricolageGrotesque/BricolageGrotesque-Bold.ttf",
      weight: "700",
    },
    {
      path: "../assets/fonts/en/BricolageGrotesque/BricolageGrotesque-ExtraBold.ttf",
      weight: "800",
    },
  ],
  variable: "--font-heading",
});

// PERSIAN FONTS
export const persianEstedadFont = localFont({
  src: [
    {
      path: "../assets/fonts/fa/Estedad/Estedad-FD-Thin.ttf",
      weight: "100",
    },
    {
      path: "../assets/fonts/fa/Estedad/Estedad-FD-ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "../assets/fonts/fa/Estedad/Estedad-FD-Light.ttf",
      weight: "300",
    },
    {
      path: "../assets/fonts/fa/Estedad/Estedad-FD-Regular.ttf",
      weight: "400",
    },
    {
      path: "../assets/fonts/fa/Estedad/Estedad-FD-Medium.ttf",
      weight: "500",
    },
    {
      path: "../assets/fonts/fa/Estedad/Estedad-FD-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../assets/fonts/fa/Estedad/Estedad-FD-Bold.ttf",
      weight: "700",
    },
    {
      path: "../assets/fonts/fa/Estedad/Estedad-FD-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "../assets/fonts/fa/Estedad/Estedad-FD-Black.ttf",
      weight: "900",
    },
  ],
  variable: "--font-heading",
});

// FUNCTIONS
export function LangFont(locale: string): string {
  switch (locale) {
    case "en":
      return englishBricolageGrotesqueFont.className;
    case "fa":
      return persianEstedadFont.className;
    default:
      return englishBricolageGrotesqueFont.className;
  }
}

export function LangDir(locale: string) {
  // const defaultLocale = useLocale();
  // if (!locale) locale = defaultLocale;
  return isRtlLang(locale) ? "rtl" : "ltr";
}
