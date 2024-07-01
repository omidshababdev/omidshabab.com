import { useSearchParams, useSelectedLayoutSegments } from "next/navigation";
import SidebarItem from "../SidebarItem";
import { dashRoutes } from "@/config/routes";

const ComponentSection = () => {
     const segments = useSelectedLayoutSegments();

     const searchParams = useSearchParams()

     const id = searchParams.get("id")

     return (
          <div className="flex flex-col gap-y-2">
               Components
               <SidebarItem
                    href={dashRoutes.components}
                    active={segments[0] === "components" && segments[1] === undefined}>
                    Your Created Components
               </SidebarItem>

               <SidebarItem
                    href={dashRoutes.createComponent}
                    active={segments[0] === "components" && segments[1] === "create" && id === null && true}>
                    Add a new amazing Component
               </SidebarItem>
          </div>
     );
}

export default ComponentSection;