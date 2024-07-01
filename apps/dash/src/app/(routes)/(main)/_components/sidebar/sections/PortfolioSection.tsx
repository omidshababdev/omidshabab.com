import { useSearchParams, useSelectedLayoutSegments } from "next/navigation";
import SidebarItem from "../SidebarItem";
import { dashRoutes } from "@/config/routes";

const PortfolioSection = () => {
     const segments = useSelectedLayoutSegments();

     const searchParams = useSearchParams()

     const id = searchParams.get("id")

     return (
          <div className="flex flex-col gap-y-2">
               Portfolio
               <SidebarItem
                    href={dashRoutes.portfolio}
                    active={segments[0] === "portfolio" && segments[1] === undefined}>
                    Your Created Portfolio
               </SidebarItem>

               <SidebarItem
                    href={dashRoutes.createPortfolio}
                    active={segments[0] === "portfolio" && segments[1] === "create" && id === null && true}>
                    Add a new amazing Portfolio
               </SidebarItem>
          </div>
     );
}

export default PortfolioSection;