import { dashRoutes } from "@/config/routes";
import SidebarItem from "../SidebarItem";
import { useSearchParams, useSelectedLayoutSegments } from "next/navigation";

const PodcastSection = () => {
     const segments = useSelectedLayoutSegments();

     const searchParams = useSearchParams()

     const id = searchParams.get("id")

     return (
          <div className="flex flex-col gap-y-2">
               Podcasts
               <SidebarItem
                    href={dashRoutes.podcasts}
                    active={segments[0] === "podcasts" && segments[1] === undefined}>
                    Your Created Podcasts
               </SidebarItem>

               <SidebarItem
                    href={dashRoutes.createPodcast}
                    active={segments[0] === "podcasts" && segments[1] === "create" && id === null && true}>
                    Create a new amazing Podcast
               </SidebarItem>
          </div>
     );
}

export default PodcastSection;