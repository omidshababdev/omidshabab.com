import { defaultRoutes } from "@/config/routes";
import {
     NavigationMenu,
     NavigationMenuContent,
     NavigationMenuItem,
     NavigationMenuLink,
     NavigationMenuList,
     NavigationMenuTrigger,
     navigationMenuTriggerStyle,
} from "@repo/ui/components/ui/navigation-menu"
import { cn } from "@repo/ui/lib/utils";
import { PauseIcon } from "lucide-react";
import React from "react";

const tabs: { title: string; href: string; description: string }[] = [
     {
          title: "blog - posts",
          href: defaultRoutes.blog,
          description:
               "A modal dialog that interrupts the user with important content and expects a response.",
     },
     {
          title: "portfolio",
          href: defaultRoutes.portfolio,
          description:
               "For sighted users to preview content available behind a link.",
     },
     {
          title: "courses",
          href: defaultRoutes.courses,
          description:
               "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
     },
     {
          title: "books",
          href: defaultRoutes.books,
          description: "Visually or semantically separates content.",
     },
     {
          title: "podcasts",
          href: defaultRoutes.podcasts,
          description:
               "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
     },
     {
          title: "components",
          href: defaultRoutes.components,
          description:
               "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
     },
]

const Menu = () => {
     return (
          <NavigationMenu>
               <NavigationMenuList>
                    <NavigationMenuItem>
                         <NavigationMenuTrigger className="cursor-pointer">menu</NavigationMenuTrigger>
                         <NavigationMenuContent>
                              <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[600px] ">
                                   {tabs.map((tab) => (
                                        <ListItem
                                             key={tab.title}
                                             title={tab.title}
                                             href={tab.href}
                                             className="cursor-pointer">
                                             {tab.description}
                                        </ListItem>
                                   ))}
                              </ul>
                         </NavigationMenuContent>
                    </NavigationMenuItem>
               </NavigationMenuList>
          </NavigationMenu>
     );
}

export default Menu;


const ListItem = React.forwardRef<
     React.ElementRef<"a">,
     React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
     return (
          <li>
               <NavigationMenuLink asChild>
                    <a
                         ref={ref}
                         className={cn(
                              "block select-none space-y-[8px] border-[2px] border-primary/5 rounded-[15px] px-[20px] py-[15px] leading-none no-underline outline-none transition-colors hover:bg-primary/5 hover:text-slate-800 focus:bg-primary/5 focus:text-slate-800",
                              className
                         )}
                         {...props}
                    >
                         <div className="font-medium leading-none text-text text-[16px]">{title}</div>
                         <p className="line-clamp-2 text-sm leading-snug text-slate-600 font-light">
                              {children}
                         </p>
                    </a>
               </NavigationMenuLink>
          </li>
     )
})
ListItem.displayName = "ListItem"