/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
// @ts-nocheck

import { NextRequest } from "next/server"

import { ImageResponse } from "@vercel/og"
import { cn } from "@repo/ui/lib/utils"

// import { ogImageSchema } from "@/lib/validations/og"

export const runtime = "edge"

export async function GET(request: Request) {
     try {

          const { searchParams } = new URL(request.url)

          const hasPro = searchParams.has("pro")
          const pro = hasPro ? searchParams.get("pro")?.slice(0, 35) : "Ready to dive in?"

          const hasTitle = searchParams.has("title")
          const title = hasTitle ? searchParams.get("title")?.slice(0, 65) : "omidshabab.com"

          const hasLocale = searchParams.has("locale")
          const locale = hasLocale ? searchParams.get("locale")?.slice(0, 3) : "en"

          const enFontData = await fetch(new URL("../../../assets/fonts/en/BricolageGrotesque/BricolageGrotesque-Regular.ttf", import.meta.url)).then((res) => res.arrayBuffer())
          const enFontMediumData = await fetch(new URL("../../../assets/fonts/en/BricolageGrotesque/BricolageGrotesque-Medium.ttf", import.meta.url)).then((res) => res.arrayBuffer())
          const enFontBoldData = await fetch(new URL("../../../assets/fonts/en/BricolageGrotesque/BricolageGrotesque-Bold.ttf", import.meta.url)).then((res) => res.arrayBuffer())

          const faFontData = await fetch(new URL("../../../assets/fonts/fa/Estedad/Estedad-FD-Regular.ttf", import.meta.url)).then((res) => res.arrayBuffer())
          const faFontMediumData = await fetch(new URL("../../../assets/fonts/fa/Estedad/Estedad-FD-Medium.ttf", import.meta.url)).then((res) => res.arrayBuffer())
          const faFontBoldData = await fetch(new URL("../../../assets/fonts/fa/Estedad/Estedad-FD-Bold.ttf", import.meta.url)).then((res) => res.arrayBuffer())

          const logoData = await fetch(new URL("../../../assets/images/logo-64x64.png", import.meta.url)).then((res) => res.arrayBuffer())

          return new ImageResponse(
               (<div
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ea580c' fill-opacity='0.08'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
                    tw="flex flex-col w-full h-full items-center justify-end bg-orange-50">
                    <div tw="flex w-full h-full bg-orange-50 bg-opacity-90">
                         <div tw="flex flex-col md:flex-row py-12 w-full px-[80px] items-center justify-center">
                              <h2 tw={cn(
                                   "flex flex-col gap-y-[20px] items-start text-left text-3xl sm:text-4xl",
                                   locale === "fa" && "items-end text-right"
                              )}>
                                   <img width={64} height={64} src={logoData} alt="omidshabab.com" />
                                   <div tw="h-[25px]" />
                                   <span tw="text-[35px] font-medium">
                                        {pro}
                                   </span>
                                   <div tw="h-[15px]" />
                                   <span tw="text-[55px] text-orange-600 leading-[4.5rem]">
                                        {title}
                                   </span>
                              </h2>
                         </div>
                    </div>

                    <div tw="absolute w-full h-full flex items-end justify-start px-[20px] py-[18px]">

                    </div>

                    <div tw="absolute w-full h-full flex items-end justify-end text-[20px] font-medium text-slate-800 px-[20px] py-[18px] text-opacity-50">
                         omidshabab.com
                    </div>
               </div>),
               {
                    fonts: [
                         {
                              name: "BricolageGrotesque",
                              data: enFontData,
                              style: "normal",
                              weight: 400
                         },
                         {
                              name: "BricolageGrotesque",
                              data: enFontMediumData,
                              style: "normal",
                              weight: 500
                         },
                         {
                              name: "BricolageGrotesque",
                              data: enFontBoldData,
                              style: "normal",
                              weight: 700
                         },
                         {
                              name: "Estedad",
                              data: faFontData,
                              style: "normal",
                              weight: 400
                         },
                         {
                              name: "Estedad",
                              data: faFontMediumData,
                              style: "normal",
                              weight: 500
                         },
                         {
                              name: "Estedad",
                              data: faFontBoldData,
                              style: "normal",
                              weight: 700
                         },
                    ]
               }
          )
     } catch (e: any) {
          return new Response("Failed to generate image", {
               status: 500,
          })
     }
}