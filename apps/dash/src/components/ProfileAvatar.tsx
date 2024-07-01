"use client"

import { dashRoutes } from "@/config/routes";
import Avatar from "./Avatar";

const ProfileAvatar = () => {
     return (
          <Avatar link={dashRoutes.profile} />
     );
}

export default ProfileAvatar;