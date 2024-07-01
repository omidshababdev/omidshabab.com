import { useSearchParams, useSelectedLayoutSegments } from "next/navigation";
import SidebarItem from "../SidebarItem";
import { dashRoutes } from "@/config/routes";

const CourseSection = () => {
     const segments = useSelectedLayoutSegments();

     const searchParams = useSearchParams()

     const id = searchParams.get("id")

     return (
          <div className="flex flex-col gap-y-2">
               Courses
               <SidebarItem
                    href={dashRoutes.courses}
                    active={segments[0] === "courses" && segments[1] === undefined}>
                    Your Created Courses
               </SidebarItem>

               <SidebarItem
                    href={dashRoutes.createCourse}
                    active={segments[0] === "courses" && segments[1] === "create" && id === null && true}>
                    Add a new amazing Course
               </SidebarItem>
          </div>
     );
}

export default CourseSection;