"use client";

import Image from "next/image";

interface Item {
  name: string;
  timeframe: string;
  result: string;
  imageSrc: string;
}

interface TransformationGalleryGridProps {
  items?: Item[];
}

export default function TransformationGalleryGrid({
  items = [
    {
      name: "Samantha R.",
      timeframe: "16 Weeks",
      result: "-24 lbs, +core strength",
      imageSrc: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578072/site-images/fitness/13562693.jpg",
    },
    {
      name: "Marcus D.",
      timeframe: "12 Weeks",
      result: "+9 lbs lean muscle",
      imageSrc: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578068/site-images/fitness/14008976.jpg",
    },
    {
      name: "Elena T.",
      timeframe: "10 Weeks",
      result: "5K endurance unlocked",
      imageSrc: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578088/site-images/fitness/11219264.jpg",
    },
  ],
}: Partial<TransformationGalleryGridProps>) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.name} className="group relative overflow-hidden rounded-xl">
          <Image src={item.imageSrc} alt={item.name} width={1200} height={800} unoptimized className="h-80 w-full object-cover transition duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute bottom-0 p-4">
            <p className="font-['Anton'] text-2xl uppercase text-white">{item.name}</p>
            <p className="text-xs font-bold uppercase tracking-wide text-[#FF2E00]">{item.timeframe}</p>
            <p className="text-sm text-white/85">{item.result}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
