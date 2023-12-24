"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();

  console.log(pathName);

  return (
    <nav className="flex flex-col lg:flex-row mx-4 justify-around my-8 gap-4">
      <div
        className={`border-[2px] border-black lg:w-[50%] text-center cursor-pointer hover:bg-black hover:text-white text-2xl py-1 ${
          pathName === "/" ? "bg-black text-white" : ""
        }`}
      >
        <Link href="/" className="block">
          About
        </Link>
      </div>
      <div
        className={`border-[2px] border-black lg:w-[50%] text-center cursor-pointer hover:bg-black hover:text-white text-2xl py-1 ${
          pathName === "/upcoming" ? "bg-black text-white" : ""
        }`}
      >
        <Link href="/upcoming" className="block">
          Upcoming Releases
        </Link>
      </div>
    </nav>
  );
}
