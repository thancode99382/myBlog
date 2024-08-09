"use client"
import { House, Newspaper, SquarePlus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const listInfoPage = [
  { id: 1, name: "Trang chủ", icon: <House />, link: "/" },
  { id: 2, name: "Tin Blog", icon: <Newspaper />, link: "/news" },
  { id: 3, name: "Tạo", icon: <SquarePlus />, link: "/create" },
];

export default function Siderbar() {
  const pathname = usePathname();
  return (
   
      <div className="h-screen border-r-2">
        {listInfoPage.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className={`w-full text-left hover:text-indigo-700 hover:border-indigo-700 ${
              pathname === item.link && "border-indigo-700 text-indigo-700 "
            } border-r-2 px-6 py-4 flex  gap-3`}
          >
            <div> {item.icon}</div>{" "}
            <div className="font-semibold"> {item.name}</div>{" "}
          </Link>
        ))}
      
    </div>
  );
}
