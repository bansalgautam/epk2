"use client"

import SongCard from "@/src/components/SongCard";
import { details } from "@/public/details";
import { NextUIProvider } from "@nextui-org/react";

export default function UpComing() {
  return (
    <NextUIProvider>
      <div className="pb-24">
        {details.map((item, index) => (
          <SongCard {...item} key={index} />
        ))}
      </div>
    </NextUIProvider>
  );
}
