"use client"

import * as React from "react"

import { useSidebar } from '@/lib/hooks/useSidebar'
import { Button } from '@repo/ui/components/ui/button'
import { PanelLeft } from 'lucide-react'

const ToggleButton = () => {
     const { toggleSidebar } = useSidebar()

     return (
          <Button
               variant="outline"
               className="hidden size-9 md:flex py-[5px] px-[5px] sm:py-[5px] sm:px-[5px] border-0 text-text"
               onClick={() => {
                    toggleSidebar()
               }}>
               <PanelLeft className="size-5" />
          </Button>
     );
}

export default ToggleButton;