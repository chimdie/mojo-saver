import { FaHome, FaUser, FaUserFriends } from "react-icons/fa";

export const userLinks = [
  {
    title: "Dashboard",
    url: "/",
    icon: FaHome
  },
  {
    title: "My Groups",
    url: "/groups",
    icon: FaUserFriends
  },
  {
    title: "Profile",
    url: "/profile",
    icon: FaUser
  }
];

export const adminLinks = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: FaHome
  },
  {
    title: "Groups",
    url: "/admin.groups",
    icon: FaUserFriends
  },
  {
    title: "Profile",
    url: "/admin.profile",
    icon: FaUser
  }
];
