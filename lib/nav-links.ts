import HomeIcon from "@/ui/Icons/HomeIcon";
import InboxIcon from "@/ui/Icons/InboxIcon";
import TagIcon from "@/ui/Icons/TagIcon";

import { Props as NavGroupProps } from "@/ui/SideMenu/NavGroup";

export const sideMenuLinks: NavGroupProps[] = [
  {
    title: "Home",
    href: "/",
    Icon: HomeIcon,
    subLinks: [],
  },
  {
    title: "Orders",
    href: "/orders",
    Icon: InboxIcon,
    subLinks: [],
  },
  {
    title: "Products",
    href: "/products",
    Icon: TagIcon,
    subLinks: [
      {
        title: "Collections",
        href: "/collections",
      },
    ],
  },
];
