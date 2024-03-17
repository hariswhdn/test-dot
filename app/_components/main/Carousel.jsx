import Image from "next/image";
import { useState } from "react";

const Carousel = ({ list }) => {
  const [idxActiveCarousel, setIdxActiveCarousel] = useState(1);

  return (
    <section
      className={[
        "flex flex-col relative overflow-hidden",
        "[&>div]:w-[calc(100%_*_2)] [&>div]:duration-500 [&>div]:flex [&>div]:transition-all",
        "[&>div>a]:w-full [&>div>a]:flex [&>div>a]:items-center [&>div>a]:justify-center [&>div>a]:overflow-hidden [&>div>a]:h-auto [&>div>a]:aspect-[1440/552] [&>div>a]:w-full",
        "[&>button]:absolute [&>button]:top-1/2 [&>button]:-translate-y-1/2 [&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button]:w-12 [&>button]:h-12 [&>button]:border [&>button]:border-[#F5333F] [&>button]:bg-white",
        "[&>button:first-of-type]:left-[42px]",
        "[&>button:last-of-type]:right-[42px]",
        "[&>button>span]:text-[28px]",
        "max-lg:[&>button]:w-9 max-lg:[&>button]:h-9",
        "max-lg:[&>button:first-of-type]:left-6",
        "max-lg:[&>button:last-of-type]:right-6",
      ].join(" ")}
    >
      <div
        style={{
          marginLeft: `calc((100% * ${idxActiveCarousel - 1}) * -1)`,
        }}
      >
        {list.map((o) => (
          <a key={o.id} href={o.url}>
            <Image
              src={o.image}
              width={0}
              sizes="100dvw"
              height={0}
              alt="carousel"
              className="w-full"
              priority
            />
          </a>
        ))}
      </div>
      <button
        type="button"
        onClick={() =>
          setIdxActiveCarousel((v) => (v === 1 ? list.length : v - 1))
        }
      >
        <span className="icon-[material-symbols--chevron-left]"></span>
      </button>
      <button
        type="button"
        onClick={() =>
          setIdxActiveCarousel((v) => (v === list.length ? 1 : v + 1))
        }
      >
        <span className="icon-[material-symbols--chevron-right]"></span>
      </button>
    </section>
  );
};

export default Carousel;
