import {
  FaHome,
  // FaUsers,
  FaUser,
  FaUserFriends,
  // FaUserCog,
  FaUserPlus
} from "react-icons/fa";
// import { IoCreateOutline } from "react-icons/io5";

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
    title: "Join Groups",
    url: "/join",
    icon: FaUserPlus
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
    url: "/admin/groups",
    icon: FaUserFriends
  },
  {
    title: "New Group",
    url: "/admin/new-group",
    icon: FaUserPlus
  },
  {
    title: "Profile",
    url: "/admin/profile",
    icon: FaUser
  }
];
