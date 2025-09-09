import { Link } from "react-router-dom";
import {
  Leaf,
  Droplet,
  Sprout,
  Sun,
  BookOpen,
  BarChart,
  GraduationCap,
} from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    {
      icon: <BarChart className="h-5 w-5" />,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: <Leaf className="h-5 w-5" />,
      label: "Crop Health",
      path: "/dashboard/crop-health",
      description: "Disease Detection & Monitoring",
    },
    {
      icon: <Sprout className="h-5 w-5" />,
      label: "Soil",
      path: "/dashboard/soil",
    },
    {
      icon: <Droplet className="h-5 w-5" />,
      label: "Water Quality",
      path: "/dashboard/water",
    },
    {
      icon: <Sun className="h-5 w-5" />,
      label: "Weather",
      path: "/dashboard/weather",
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      label: "Learning",
      path: "/dashboard/learning",
    },
  ];

  return (
    <div className="h-screen w-64 bg-[#0A0A0F] text-white p-4">
      <div className="flex items-center gap-2 mb-8">
        <Leaf className="h-8 w-8 text-green-500" />
        <span className="text-xl font-bold">GramRakshak</span>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors group"
          >
            {item.icon}
            <div>
              <span>{item.label}</span>
              {item.description && (
                <p className="text-xs text-gray-500 group-hover:text-gray-400">
                  {item.description}
                </p>
              )}
            </div>
          </Link>
        ))}
      </nav>

      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-green-600/10 text-green-500 p-4 rounded-lg">
          <GraduationCap className="h-6 w-6 mb-2" />
          <h3 className="font-medium mb-1">AI Learning Assistant</h3>
          <p className="text-sm text-green-400">
            Get personalized farming guidance
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 