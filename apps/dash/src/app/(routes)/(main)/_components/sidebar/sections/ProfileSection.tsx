import { useSelectedLayoutSegments } from "next/navigation";
import SidebarItem from "../SidebarItem";
import { dashRoutes } from "@/config/routes";

const ProfileSection = () => {
  const segments = useSelectedLayoutSegments();

  return (
    <div className="flex flex-col gap-y-2">
      Profile
      <SidebarItem
        href={dashRoutes.profile}
        active={segments[0] === "profile" && segments[2] === undefined}>
        Edit your Profile Details
      </SidebarItem>

      <SidebarItem
        href={dashRoutes.settings}
        active={segments[0] === "profile" && segments[2] === "settings"}>
        Settings of your Account
      </SidebarItem>
    </div>
  );
}

export default ProfileSection;