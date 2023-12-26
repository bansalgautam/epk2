"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();

  return (
    <div className="text-white bg-[#0a0a23] border-b-2 px-4 select-none">
      <h1 className="text-center text-5xl font-bold pt-4">LOGO</h1>
      <nav className="flex flex-col lg:flex-row justify-around py-4 gap-4">
        <div
          className={`border-[2px] border-white lg:w-[50%] text-center cursor-pointer hover:bg-white hover:text-black text-2xl py-1 ${
            pathName === "/" ? "bg-white text-black" : ""
          }`}
        >
          <Link href="/" className="block">
            About
          </Link>
        </div>
        <div
          className={`border-[2px] border-white lg:w-[50%] text-center cursor-pointer hover:bg-white hover:text-black text-2xl py-1 ${
            pathName === "/upcoming" ? "bg-white text-black" : ""
          }`}
        >
          <Link href="/upcoming" className="block">
            Upcoming Releases
          </Link>
        </div>
      </nav>
    </div>
  );
}
