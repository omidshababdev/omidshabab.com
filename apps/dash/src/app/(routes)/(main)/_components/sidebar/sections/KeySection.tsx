import { dashRoutes } from "@/config/routes";
import SidebarItem from "../SidebarItem";
import { useSelectedLayoutSegments } from "next/navigation";

const KeySection = () => {
     const segments = useSelectedLayoutSegments();

     return (
          <div className="flex flex-col gap-y-2">
               API Keys
               <SidebarItem
                    href={dashRoutes.keys}
                    active={segments[0] === "keys" && segments[2] === undefined}>
                    Your Created API Keys
               </SidebarItem>

               <SidebarItem
                    href={dashRoutes.usage}
                    active={segments[0] === "keys" && segments[2] === "usage"}>
                    Usage of API Keys
               </SidebarItem>
          </div>
     );
}

export default KeySection;