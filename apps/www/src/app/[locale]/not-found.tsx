"use client"

import { Button } from '@repo/ui/components/ui/button'
import { useRouter } from 'next/navigation'

export default function NotFound() {
     const router = useRouter()

     return (
          <div className="flex flex-col w-full h-screen justify-center items-center gap-y-[35px]">
               <div className="flex flex-col gap-y-[10px] text-center">
                    <h2 className="text-[25px] font-bold text-slate-800">Not Found what you looking for!</h2>
                    <p className="text-[15px] text-slate-600">Try it again or contact the support to help you.</p>
               </div>
               <Button
                    variant="secondary"
                    size="sm"
                    className="px-[28px] py-[25px] rounded-[12px]"
                    onClick={() => router.push("/")}>
                    Return Home
               </Button>
          </div>
     )
}