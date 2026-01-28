"use client";

import Link from "next/link";
import {
  Home,
  BriefcaseBusiness,
  Cuboid,
  Microscope,
  LucideIcon,
  Mail,
} from "lucide-react";

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
  { label: "Contact", to: "contact", icon: Mail },
];

const Navbar = ({ activeSection }: { activeSection: string }) => {
  return (
    <div className="fixed top-6 w-full flex justify-center z-50 px-4 pointer-events-none">
      <nav
        aria-label="Main navigation"
        className="flex gap-2 md:gap-4 px-4 py-2 border border-white/10 rounded-full items-center justify-center bg-black/40 backdrop-blur-xl shadow-2xl pointer-events-auto"
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.to;

          return (
            <Link
              key={item.to}
              href={`#${item.to}`}
              className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 ring-blue-500 ${
                isActive
                  ? "text-white bg-white/10"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <item.icon size={18} strokeWidth={isActive ? 2.5 : 2} />
              <span className="hidden md:inline text-sm font-medium">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
