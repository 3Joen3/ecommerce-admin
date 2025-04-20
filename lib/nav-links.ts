import HomeIcon from "@/components/Icons/HomeIcon";
import InboxIcon from "@/components/Icons/InboxIcon";
import TagIcon from "@/components/Icons/TagIcon";

import { Props as NavGroupProps } from "@/components/SideMenu/NavGroup";

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
