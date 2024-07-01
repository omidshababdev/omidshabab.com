import { dashRoutes } from "@/config/routes";
import SidebarItem from "../SidebarItem";
import { useSearchParams, useSelectedLayoutSegments } from "next/navigation";

const BookSection = () => {
     const segments = useSelectedLayoutSegments();

     const searchParams = useSearchParams()

     const id = searchParams.get("id")

     return (
          <div className="flex flex-col gap-y-2">
               Books
               <SidebarItem
                    href={dashRoutes.books}
                    active={segments[0] === "books" && segments[1] === undefined}>
                    Your Created Books
               </SidebarItem>

               <SidebarItem
                    href={dashRoutes.createBook}
                    active={segments[0] === "books" && segments[1] === "create" && id === null && true}>
                    Add a new amazing Book
               </SidebarItem>
          </div>
     );
}

export default BookSection;