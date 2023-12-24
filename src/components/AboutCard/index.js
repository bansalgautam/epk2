"use client";

import Image from "next/image";

export default function AboutCard({
  className,
  title,
  src,
  subtitle,
  about,
  about2,
}) {
  return (
    <div
      className={`lg:flex mx-2 ${className} border-[2px] p-2 my-4 border-black`}
    >
      <div
        className={`w-full lg:w-[350px] flex flex-col justify-center items-center min-h-[400px] `}
      >
        <Image
          src={src}
          width={300}
          height={400}
          alt="Picture"
          className="h-[400px]"
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
      </div>
    </div>
  );
}
