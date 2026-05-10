import Image from "next/image";
import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
  coverImageHeight?: number;
  squareCoverImage?: boolean;
};

export function PostHeader({ title, coverImage, date, author }: Props) {
  return (
    <div className="relative w-full mb-8 md:mb-16 overflow-hidden rounded-xl" style={{ height: "550px" }}>
      <Image src={coverImage} alt={`Cover image for ${title}`} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
          {title}
        </h1>
        <div className="flex items-center gap-4 text-white/80 text-sm md:text-base">
          <Avatar name={author.name} picture={author.picture} />
          <DateFormatter dateString={date} />
        </div>
      </div>
    </div>
  );
}
