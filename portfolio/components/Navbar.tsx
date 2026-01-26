import React from "react";
import Link from "next/link";
import {
  Home,
  BriefcaseBusiness,
  Cuboid,
  Microscope,
  LucideIcon,
} from "lucide-react";
import { Button } from "./ui/button";

interface NavItem {
  label: string;
  to: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  { label: "Home", to: "/", icon: Home },
  { label: "Work", to: "#work", icon: BriefcaseBusiness },
  { label: "Tools", to: "#tools", icon: Cuboid },
  { label: "Case Study", to: "#caseStudy", icon: Microscope },
];

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-center p-4">
      <nav className="flex gap-4 px-5 py-4 border rounded-full items-center justify-center">
        {navItems.map((item) => (
          <Link
            key={item.to}
            href={item.to}
            className="flex items-center gap-2 hover:text-blue-500 transition-colors"
          >
            <item.icon size={18} strokeWidth={2} />
            <span>{item.label}</span>
          </Link>
        ))}
        <Button className="rounded-full">Get in touch</Button>
      </nav>
    </div>
  );
};

export default Navbar;
