"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Chrome as Home, Calendar, Hotel, DollarSign, Building2, Users, ChartBar as BarChart3, Settings, Receipt, TrendingUp, MessageCircle, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface MenuItem {
  title: string;
  icon: any;
  href?: string;
  children?: {
    title: string;
    href: string;
  }[];
}

const menuItems: MenuItem[] = [
  {
    title: "Dashboard",
    icon: Home,
    href: "/",
  },
  {
    title: "Bookings",
    icon: Calendar,
    children: [
      { title: "Make A Reservation", href: "/bookings/new" },
      { title: "Hold Booking", href: "/bookings/hold" },
      { title: "Booking Report", href: "/bookings/report" },
      { title: "Today Check In-Out", href: "/bookings/today" },
      { title: "Credit Report", href: "/bookings/credit" },
    ],
  },
  {
    title: "Room Management",
    icon: Hotel,
    children: [
      { title: "Room Inventory", href: "/rooms/inventory" },
      { title: "Add / Edit Room", href: "/rooms/manage" },
      { title: "Housekeeping Status", href: "/rooms/housekeeping" },
      { title: "Maintenance Logs", href: "/rooms/maintenance" },
    ],
  },
  {
    title: "Rate Management",
    icon: DollarSign,
    children: [
      { title: "Set Room Rates", href: "/rates/manage" },
      { title: "Rate Plan Calendar", href: "/rates/calendar" },
      { title: "Promotions & Discounts", href: "/rates/promotions" },
      { title: "OTA Rate Sync", href: "/rates/ota-sync" },
    ],
  },
  {
    title: "Hotel Details",
    icon: Building2,
    children: [
      { title: "Hotel Profile", href: "/hotel/profile" },
      { title: "Policies & Amenities", href: "/hotel/policies" },
      { title: "Photo Gallery", href: "/hotel/gallery" },
    ],
  },
  {
    title: "User Management",
    icon: Users,
    children: [
      { title: "User Roles", href: "/users/roles" },
      { title: "Add / Remove Users", href: "/users/manage" },
      { title: "Activity Log", href: "/users/activity" },
    ],
  },
  {
    title: "Reports",
    icon: BarChart3,
    children: [
      { title: "Revenue Report", href: "/reports/revenue" },
      { title: "Occupancy Report", href: "/reports/occupancy" },
      { title: "Guest Demographics", href: "/reports/demographics" },
      { title: "Expense Report", href: "/reports/expenses" },
    ],
  },
  {
    title: "System Settings",
    icon: Settings,
    children: [
      { title: "Integration Management", href: "/settings/integrations" },
      { title: "Email & SMS Templates", href: "/settings/templates" },
      { title: "Backup & Restore", href: "/settings/backup" },
      { title: "Security Settings", href: "/settings/security" },
    ],
  },
  {
    title: "Accounts",
    icon: Receipt,
    children: [
      { title: "Invoices & Billing", href: "/accounts/invoices" },
      { title: "Payment History", href: "/accounts/payments" },
      { title: "Tax Settings", href: "/accounts/tax" },
    ],
  },
  {
    title: "Analytics",
    icon: TrendingUp,
    children: [
      { title: "Dashboard Analytics", href: "/analytics/dashboard" },
      { title: "Forecasting", href: "/analytics/forecast" },
      { title: "Performance Metrics", href: "/analytics/performance" },
    ],
  },
  {
    title: "Support",
    icon: MessageCircle,
    children: [
      { title: "Help Center", href: "/support/help" },
      { title: "Contact Support", href: "/support/contact" },
      { title: "System Updates", href: "/support/updates" },
    ],
  },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>(["Dashboard"]);
  const pathname = usePathname();

  const toggleExpanded = (title: string) => {
    setExpandedItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 overflow-y-auto scrollbar-thin z-40 transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isExpanded = expandedItems.includes(item.title);
          const isActive = item.href === pathname ||
            item.children?.some((child) => child.href === pathname);

          return (
            <div key={item.title}>
              {item.href ? (
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-950/30 dark:hover:to-indigo-950/30",
                    isActive
                      ? "bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 text-blue-700 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300"
                  )}
                >
                  <Icon className={cn("h-5 w-5", isActive && "text-blue-600 dark:text-blue-400")} />
                  <span>{item.title}</span>
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => toggleExpanded(item.title)}
                    className={cn(
                      "w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-950/30 dark:hover:to-indigo-950/30",
                      isActive
                        ? "bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 text-blue-700 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={cn("h-5 w-5", isActive && "text-blue-600 dark:text-blue-400")} />
                      <span>{item.title}</span>
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </button>
                  {isExpanded && item.children && (
                    <div className="mt-1 ml-4 space-y-1 border-l-2 border-gray-200 dark:border-gray-800 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "block px-3 py-2 rounded-md text-sm transition-colors",
                            child.href === pathname
                              ? "bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 font-medium"
                              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-900/50"
                          )}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
        </nav>
      </aside>
    </>
  );
}
