import Image from "next/image";

const ListPartner = ({ title, list }) => {
  return (
    <div className="flex flex-col gap-y-1">
      <p className="font-semibold">{title}</p>
      <ul
        className={[
          "flex gap-x-6",
          "[&>li>a]:flex [&>li>a]:items-center [&>li>a]:justify-center [&>li>a]:overflow-hidden [&>li>a]:h-14 [&>li>a]:w-14",
          "[&>li>a>img]:h-auto [&>li>a>img]:w-full",
        ].join(" ")}
      >
        {list.map((o) => (
          <li key={o.id}>
            <a href={o.url}>
              <Image
                src={o.image}
                width={0}
                sizes="100dvw"
                height={0}
                alt="partner"
                priority
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPartner;
