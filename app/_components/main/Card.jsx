import Image from "next/image";

const Card = ({ isRecommendation, data, className }) => {
  return (
    <div
      className={[
        "border border-[#E6E6E6] flex flex-col",
        isRecommendation ? "p-4 rounded-lg" : "p-6 rounded-2xl",
        className,
      ].join(" ")}
    >
      <div className="flex flex-col gap-y-6">
        {isRecommendation ? (
          <a
            href={data.url}
            className="flex items-center rounded justify-center overflow-hidden h-auto aspect-[284/201] w-full"
          >
            <Image
              src={data.image}
              width={0}
              sizes="100dvw"
              height={0}
              alt="thumbnail"
              className="w-full"
              priority
            />
          </a>
        ) : (
          <></>
        )}
        <div
          className={[
            "divide-y divide-[#E6E6E6]",
            "[&>*:not(:first-child)]:pt-4",
            "[&>*:not(:last-child)]:pb-4",
          ].join(" ")}
        >
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
              <div className="flex gap-x-2 items-center">
                <p
                  className={[
                    isRecommendation
                      ? "text-xl font-bold text-[#1A202C]"
                      : "text-[#1A1A1A] text-2xl font-semibold",
                  ].join(" ")}
                >
                  {data.title}
                </p>
                {isRecommendation ? (
                  <div className="px-3 py-1 bg-[#F1F1F1] rounded-2xl text-sm">
                    {data.category}
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <a href="#" className="flex items-center gap-x-1">
                <div className="flex items-center justify-center overflow-hidden h-7 w-7">
                  <Image
                    src={data.photo}
                    width={0}
                    sizes="100dvw"
                    height={0}
                    alt="photo"
                    className="h-full w-auto max-w-[unset]"
                    priority
                  />
                </div>
                <p className="text-sm">{data.name}</p>
              </a>
            </div>
            {isRecommendation ? (
              <></>
            ) : (
              <ul
                className={[
                  "flex flex-col gap-y-2 text-sm",
                  "[&>li]:flex [&>li]:gap-x-6",
                  "[&>li>p]:w-1/3 [&>li>p]:text-[#4D4D4D]",
                  "[&>li>div]:w-2/3 [&>li>div]:flex [&>li>div]:items-center [&>li>div]:gap-x-2",
                  "[&>li>div:has(span)]:text-[#F5333F]",
                ].join(" ")}
              >
                <li>
                  <p>Jenis Rumah</p>
                  <div>
                    <p>{data.category}</p>
                  </div>
                </li>
                <li>
                  <p>Tipe Desain</p>
                  <div>
                    <span className="icon-[material-symbols--check-circle]"></span>
                    <p>Dapat Dimodifikasi</p>
                  </div>
                </li>
              </ul>
            )}
          </div>
          <ul
            className={[
              "flex justify-between",
              "[&>li]:flex [&>li]:items-center [&>li]:flex-col",
              "[&>li>span]:text-[#F5333F] [&>li>span]:text-[24px]",
              "[&>li>p]:leading-[150%]",
              "[&>li>p:nth-child(2)]:text-[12px] [&>li>p:nth-child(2)]:text-[#808080]",
              "[&>li>p:last-child]:text-[14px]",
              isRecommendation ? "!border-t-0 !pt-0" : "",
            ].join(" ")}
          >
            <li>
              <span className="icon-[material-symbols--width]"></span>
              <p>Dmnsi Tanah</p>
              <p>{data.spesification.dimensiTanah}</p>
            </li>
            <li>
              <span className="icon-[mdi--house-swap-outline]"></span>
              <p>Luas Bangnn</p>
              <p>{data.spesification.luasBangunan}</p>
            </li>
            <li>
              <span className="icon-[ph--stairs]"></span>
              <p>Lantai</p>
              <p>{data.spesification.lantai}</p>
            </li>
            <li>
              <span className="icon-[material-symbols--bedroom-parent-outline]"></span>
              <p>Kmr Tidur</p>
              <p>{data.spesification.kamarTidur}</p>
            </li>
          </ul>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-1">
              <p className="text-sm">Harga Desain</p>
              <p
                className={[
                  "leading-[120%] font-semibold",
                  isRecommendation ? "text-[24px]" : "text-[32px]",
                ].join(" ")}
              >
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                }).format(data.price)}
              </p>
              <p className="text-sm text-[#808080]">
                Harga konstruksi mulai dari&nbsp;
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                }).format(data.priceStartAt)}
              </p>
            </div>
            <a
              href={data.url}
              className={[
                "flex items-center justify-center rounded-md font-semibold px-4 border",
                isRecommendation
                  ? "text-sm bg-white text-[#F94355] py-2 border-[#F94355]"
                  : "bg-[#F5333F] border-[#F5333F] py-3 text-white",
              ].join(" ")}
            >
              {isRecommendation ? "Lihat Detail" : "Konsultasi Sekarang"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
