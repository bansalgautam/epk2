"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function AboutCard({
  className,
  title,
  src,
  subtitle,
  about,
  about2,
  facebook,
  instagram,
  twitter,
}) {
  return (
    <div className={`lg:flex mx-2 ${className} px-4 py-4 pb-24 lg:pb-8`}>
      <div
        className={`w-full lg:w-[450px] flex flex-col justify-center items-center min-h-[400px] `}
      >
        <Image
          src={src}
          width={600}
          height={300}
          alt="Picture"
          className="w-auto max-h-[400px]"
        />
        <div className="text-3xl font-semibold">{title}</div>
      </div>
      <div className="flex-1 lg:mr-2">
        <h1 className="text-center text-3xl font-bold">{subtitle}</h1>
        <h1 className="text-center text-2xl font-semibold my-2">ABOUT</h1>
        <div className="text-justify text-lg flex flex-col gap-4 my-4">
          <p>{about} </p>
          <p>{about2}</p>
        </div>
        <div className="gap-4 flex items-center flex-col lg:flex-row">
          <div className="text-xl font-semibold">Social Handles: </div>
          <div className="flex gap-2">
            <Link href={facebook} target="_blank">
              <FaFacebookF className="w-[30px] h-auto hover:opacity-60 cursor-pointer" />
            </Link>
            <Link href={instagram} target="_blank">
              <FaInstagram className="w-[30px] h-auto hover:opacity-60 cursor-pointer" />
            </Link>
            <Link href={twitter} target="_blank">
              <FaXTwitter className="w-[30px] h-auto hover:opacity-60 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
