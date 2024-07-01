import { useSearchParams, useSelectedLayoutSegments } from "next/navigation";
import SidebarItem from "../SidebarItem";
import { dashRoutes } from "@/config/routes";

const PostSection = () => {
     const segments = useSelectedLayoutSegments();

     const searchParams = useSearchParams()

     const id = searchParams.get("id")

     return (
          <div className="flex flex-col gap-y-2">
               Posts
               <SidebarItem
                    href={dashRoutes.posts}
                    active={segments[0] === "posts" && segments[1] === undefined}>
                    Your Created Posts
               </SidebarItem>

               <SidebarItem
                    href={dashRoutes.createPost}
                    active={segments[0] === "posts" && segments[1] === "create" && id === null && true}>
                    Add a new amazing Post
               </SidebarItem>
          </div>
     );
}

export default PostSection;