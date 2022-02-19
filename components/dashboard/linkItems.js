import { FiHome, FiTrendingUp, FiCompass, FiSettings } from "react-icons/fi";
import { AiOutlineUsergroupAdd, AiOutlineOrderedList } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";

export const LinkItems = [
  { caption: "Home", icon: FiHome, href: "/dashboard/" },
  { caption: "Trending", icon: FiTrendingUp, href: "/" },
  { caption: "Explore", icon: FiCompass, href: "/" },
  { caption: "Settings", icon: FiSettings, href: "/" },
];

export const adminLink = [
  // { caption: "Admin", icon: "", item: "" },
  { caption: "Create Group", icon: AiOutlineUsergroupAdd, href: "" },
  { caption: "List of Groups", icon: AiOutlineOrderedList, href: "" },
];
