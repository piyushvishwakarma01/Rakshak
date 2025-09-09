import {
  DropletIcon,
  LeafIcon,
  LayoutDashboardIcon,
  LandPlotIcon,
  Bot,
  Sprout,
  CloudSun,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

const sidebarItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Crop Health",
    path: "/dashboard/crop-health",
    icon: Sprout,
  },
  {
    title: "Soil Quality",
    path: "/dashboard/soil",
    icon: LandPlotIcon,
  },
  {
    title: "Water Quality",
    path: "/dashboard/water",
    icon: DropletIcon,
  },
  {
    title: "Weather",
    path: "/dashboard/weather",
    icon: CloudSun,
  },
  {
    title: "AI Learning",
    path: "/dashboard/learning",
    icon: Bot,
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-background border-r border-gray-200 shadow-sm">
      <nav className="mt-5 px-2">
        {sidebarItems.map((item) => (
          <Button
            key={item.title}
            className={`w-full justify-start mb-2 px-4 py-2 text-foreground hover:bg-primary-100 hover:text-primary-600 transition-colors duration-200 ${
              (location.pathname === item.path || 
               (item.path === "/dashboard" && location.pathname === "/dashboard/"))
                ? "bg-primary-100 text-primary-600"
                : "bg-transparent"
            }`}
            variant="ghost"
            asChild
          >
            <Link to={item.path}>
              <item.icon className="mr-2 h-5 w-5" />
              {item.title}
            </Link>
          </Button>
        ))}
      </nav>
    </aside>
  );
}