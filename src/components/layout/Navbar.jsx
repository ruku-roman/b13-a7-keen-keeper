"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/Lib/utils";
import { FaHome } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa6";
import Image from "next/image";

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: FaHome, path: "/" },
  { id: "timeline", label: "Timeline", icon: FaClockRotateLeft, path: "/timeline" },
  { id: "stats", label: "Stats", icon: FaChartLine, path: "/stats" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-4">

      <div className="flex-1">
        <Link href="/" className="text-xl font-bold text-[#000000]">
          Keen<span className="font-normal text-[#1C4D42]">Keeper</span>
        </Link>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal gap-1 px-1">

          {NAV_ITEMS.map(({ id, label, icon: Icon, path }) => {
            const isActive = pathname === path;

            return (
              <li key={id}>
                <Link
                  href={path}
                  className={cn(
                    "flex items-center gap-2 rounded-btn transition-all px-3 py-2",
                    isActive
                      ? "bg-[#1C4D42] text-white rounded-md font-semibold"
                      : "hover:bg-base-200"
                  )}
                >
                  <Icon size={18} />
                  <span className="hidden sm:inline">{label}</span>
                </Link>
              </li>
            );
          })}

        </ul>
      </div>
    </div>
  );
};

export default Navbar;