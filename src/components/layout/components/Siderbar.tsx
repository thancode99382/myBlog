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
   
      <div className="md:h-full flex md:relative fixed bottom-0 right-0 left-0 bg-white  md:flex-col flex-row border-t-2  md:border-r-2">
        {listInfoPage.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className={` transition-all duration-600  ease-in-out w-full md:text-left   md:hover:text-indigo-700 md:hover:border-indigo-700 ${
              pathname === item.link && "md:border-indigo-700 text-indigo-700 "
            }  md:border-r-2 px-6 py-4 flex md:flex-row flex-col  gap-3`}
          >
            <div className="flex justify-center"> {item.icon}</div>{" "}
            <div className="font-semibold md:flex hidden"> {item.name}</div>{" "}
          </Link>
        ))}
      
    </div>
  );
}
