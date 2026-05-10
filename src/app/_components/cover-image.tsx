import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
  height?: number;
  square?: boolean;
};

const CoverImage = ({ title, src, slug, height = 430, square = false }: Props) => {
  const image = square ? (
    <div
      className={cn("relative w-full aspect-[10/9] overflow-hidden shadow-sm", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
    >
      <Image src={src} alt={`Cover Image for ${title}`} fill className="object-cover" />
    </div>
  ) : (
    <div
      className={cn("relative w-full overflow-hidden shadow-sm", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
      style={{ height: `${height}px` }}
    >
      <Image src={src} alt={`Cover Image for ${title}`} fill className="object-cover" />
    </div>
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
