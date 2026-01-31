import Link from "next/link";
import {
  LayoutDashboard,
  Briefcase,
  Folder,
  Settings,
  PlusCircle,
} from "lucide-react";
import "../globals.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems = [
    { name: "Overview", href: "/admin", icon: LayoutDashboard },
    { name: "Projects", href: "/admin/projects", icon: Folder },
    { name: "Experience", href: "/admin/experience", icon: Briefcase },
  ];

  return (
    <html>
      <body>
        <div className="flex min-h-screen bg-muted/30">
          {/* Sidebar */}
          <aside className="w-64 border-r bg-background hidden md:block">
            <div className="p-6">
              <h1 className="text-xl font-bold tracking-tight">
                Portfolio Admin
              </h1>
            </div>
            <nav className="px-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent transition-colors"
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-8">
            <div className="max-w-5xl mx-auto">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
