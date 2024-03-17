import Image from "next/image";

const Gallery = ({ list, className }) => {
  return (
    <section className={["flex gap-y-4 flex-col w-full", className].join(" ")}>
      <p className="text-2xl font-semibold">Tampilan Rumah</p>
      <div
        className={[
          "grid grid-cols-3 gap-4",
          "[&>div]:flex [&>div]:flex-col [&>div]:p-4 [&>div]:gap-y-6 [&>div]:rounded-lg [&>div]:border [&>div]:border-[#E6E6E6]",
          "[&>div>a]:rounded [&>div>a]:flex [&>div>a]:items-center [&>div>a]:justify-center [&>div>a]:overflow-hidden [&>div>a]:aspect-[261/201] [&>div>a]:w-full",
          "[&>div>a>img]:w-full",
          "[&>div>div]:flex [&>div>div]:gap-y-2 [&>div>div]:flex-col",
          "[&>div>div>p:first-child]:text-[#1A202C] [&>div>div>p:first-child]:font-bold [&>div>div>p:first-child]:text-[20px] [&>div>div>p:first-child]:leading-[120%]",
          "[&>div>div>p:last-child]:text-[14px] [&>div>div>p:last-child]:leading-[150%]",
          "max-xla:grid-cols-2",
          "max-mda:grid-cols-3",
          "max-md:grid-cols-2",
          "max-sma:[&>div>a]:rounded-0",
          "max-sma:[&>div]:gap-y-2 max-sma:[&>div]:p-0 max-sma:[&>div]:overflow-hidden",
          "max-sma:[&>div>div>p:first-child]:text-sm max-sma:[&>div>div>p:first-child]:font-semibold",
          "max-sma:[&>div>div]:px-2 max-sma:[&>div>div]:pb-1 max-sma:[&>div>div]:gap-y-0",
        ].join(" ")}
      >
        {list.map((o) => (
          <div key={o.id}>
            <a href={o.url}>
              <Image
                src={o.image}
                width={0}
                sizes="100dvw"
                height={0}
                alt="gallery"
                priority
              />
            </a>
            <div>
              <p>{o.title}</p>
              <p>{o.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
