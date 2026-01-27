"use client";

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
  { label: "Home", to: "home", icon: Home },
  { label: "Work", to: "work", icon: BriefcaseBusiness },
  { label: "Tools", to: "tools", icon: Cuboid },
  { label: "Case Study", to: "case-study", icon: Microscope },
];

export default function Navbar({ activeSection }: { activeSection: string }) {
  return (
    <div className="fixed top-4 w-full flex justify-center z-50">
      <nav className="flex gap-4 px-5 py-3 border rounded-full items-center bg-white/80 backdrop-blur-md shadow-sm">
        {navItems.map((item) => {
          const isActive = activeSection === item.to;
          return (
            <Link
              key={item.to}
              href={`#${item.to}`}
              className={`flex items-center gap-2 px-3 py-1 rounded-full transition-all ${
                isActive
                  ? "bg-blue-100 text-blue-600 font-medium"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              <item.icon size={18} />
              <span className="hidden md:inline">{item.label}</span>
            </Link>
          );
        })}
        <Button className="rounded-full ml-2">Contact</Button>
      </nav>
    </div>
  );
}
