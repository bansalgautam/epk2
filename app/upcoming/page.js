import SongCard from "@/src/components/SongCard";
import { details } from "@/public/details";

export default function UpComing() {
  return (
    <div className="pb-24">
      {details.map((item, index) => (
        <SongCard {...item} key={index} />
      ))}
    </div>
  );
}
