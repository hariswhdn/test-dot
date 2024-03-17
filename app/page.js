"use client";
import Navbar from "./_components/header/Navbar";
import Breadcrumb from "./_components/main/Breadcrumb";
import Carousel from "./_components/main/Carousel";
import Gallery from "./_components/main/Gallery";
import Reviews from "./_components/main/Reviews";
import Recommendations from "./_components/main/Recommendations";
import Card from "./_components/main/Card";
import ListSocmed from "./_components/footer/ListSocmed";
import ListLink from "./_components/footer/ListLink";
import ListPartner from "./_components/footer/ListPartner";
import Image from "next/image";

export default function Home() {
  const obj_widget = {
    navbar: [
      {
        id: 1,
        text: "Tentang Kami",
        url: "#",
        subMenu: [
          {
            id: 1,
            text: "Submenu 1",
            url: "#",
          },
          {
            id: 2,
            text: "Submenu 2",
            url: "#",
          },
        ],
      },
      {
        id: 2,
        text: "Produk & Layanan",
        url: "#",
        isHighlight: true,
        subMenu: [
          {
            id: 1,
            text: "Submenu 3",
            url: "#",
          },
          {
            id: 2,
            text: "Submenu 4",
            url: "#",
          },
        ],
      },
      {
        id: 3,
        text: "Blog",
        url: "#",
      },
      {
        id: 4,
        text: "FAQ",
        url: "#",
      },
    ],
    breadcrumb: [
      {
        id: 1,
        text: "Home",
        url: "/",
      },
      {
        id: 2,
        text: "Layanan Desain",
        url: "#",
      },
      {
        id: 3,
        text: "Omah Apik 3",
        url: "#",
      },
    ],
    carousel: [
      {
        id: 1,
        image: "/images/carousel/a.png",
        url: "#",
      },
      {
        id: 2,
        image: "/images/carousel/b.png",
        url: "#",
      },
    ],
    gallery: [
      {
        id: 1,
        url: "#",
        title: "Ruang Keluarga",
        description: "2.0 x 2.9",
        image: "/images/gallery/a.png",
      },
      {
        id: 2,
        url: "#",
        title: "Kamar tidur",
        description: "4.0 x 3.4",
        image: "/images/gallery/b.png",
      },
      {
        id: 3,
        url: "#",
        title: "Ruang Makan & Dapur",
        description: "3.0 x 2.9",
        image: "/images/gallery/c.png",
      },
      {
        id: 4,
        url: "#",
        title: "Ruang Keluarga",
        description: "2.0 x 2.9",
        image: "/images/gallery/a.png",
      },
      {
        id: 5,
        url: "#",
        title: "Kamar tidur",
        description: "4.0 x 3.4",
        image: "/images/gallery/b.png",
      },
    ],
    reviews: [
      {
        id: 1,
        name: "Budi Setiadi",
        rating: 4.5,
        reviews:
          "Desainnya sangat bagus dan pengirimannya cepat. Terima kasih Sobat Bangun",
      },
      {
        id: 2,
        name: "Budi Setiadi",
        rating: 4.5,
        reviews:
          "Desainnya sangat bagus dan pengirimannya cepat. Terima kasih Sobat Bangun",
      },
      {
        id: 3,
        name: "Budi Setiadi",
        rating: 4.5,
        reviews:
          "Desainnya sangat bagus dan pengirimannya cepat. Terima kasih Sobat Bangun",
      },
    ],
    orderNow: {
      image: "/images/recommendations/c.png",
      title: "Omah Apik 3",
      category: "Scandinavian",
      photo: "/images/photo.png",
      name: "Studio SAe",
      spesification: {
        dimensiTanah: "15 x 8m",
        luasBangunan: "112m2",
        lantai: 2,
        kamarTidur: 4,
      },
      price: 32500000,
      priceStartAt: 560000000,
      url: "#",
    },
    recommendations: [
      {
        id: 1,
        data: {
          image: "/images/recommendations/a.png",
          title: "Omah Apik 1",
          category: "Scandinavian",
          photo: "/images/photo.png",
          name: "Studio SAe",
          spesification: {
            dimensiTanah: "15 x 8m",
            luasBangunan: "112m2",
            lantai: 2,
            kamarTidur: 4,
          },
          price: 32500000,
          priceStartAt: 560000000,
          url: "#",
        },
      },
      {
        id: 2,
        data: {
          image: "/images/recommendations/b.png",
          title: "Omah Apik 2",
          category: "Scandinavian",
          photo: "/images/photo.png",
          name: "Studio SAe",
          spesification: {
            dimensiTanah: "15 x 8m",
            luasBangunan: "112m2",
            lantai: 2,
            kamarTidur: 4,
          },
          price: 32500000,
          priceStartAt: 560000000,
          url: "#",
        },
      },
      {
        id: 3,
        data: {
          image: "/images/recommendations/c.png",
          title: "Omah Apik 3",
          category: "Scandinavian",
          photo: "/images/photo.png",
          name: "Studio SAe",
          spesification: {
            dimensiTanah: "15 x 8m",
            luasBangunan: "112m2",
            lantai: 2,
            kamarTidur: 4,
          },
          price: 32500000,
          priceStartAt: 560000000,
          url: "#",
        },
      },
      {
        id: 4,
        data: {
          image: "/images/recommendations/d.png",
          title: "Omah Apik 4",
          category: "Scandinavian",
          photo: "/images/photo.png",
          name: "Studio SAe",
          spesification: {
            dimensiTanah: "15 x 8m",
            luasBangunan: "112m2",
            lantai: 2,
            kamarTidur: 4,
          },
          price: 32500000,
          priceStartAt: 560000000,
          url: "#",
        },
      },
    ],
    footerSocialMedia: [
      {
        id: 1,
        url: "#",
        icon: "ri:instagram-line",
      },
      {
        id: 2,
        url: "#",
        icon: "ri:facebook-fill",
      },
      {
        id: 3,
        url: "#",
        icon: "ri:youtube-fill",
      },
    ],
    footerLinks: [
      [
        {
          id: 1,
          text: "Renovasi",
          url: "#",
        },
        {
          id: 2,
          text: "Bangun Rumah",
          url: "#",
        },
        {
          id: 3,
          text: "Layanan Desain",
          url: "#",
        },
        {
          id: 4,
          text: "Teknologi Tambahan",
          url: "#",
        },
        {
          id: 5,
          text: "Beli Material",
          url: "#",
        },
      ],
      [
        {
          id: 1,
          text: "Tentang SobatBangun",
          url: "#",
        },
        {
          id: 2,
          text: "Kebijakan Dan Privasi",
          url: "#",
        },
        {
          id: 3,
          text: "Syarat Dan Ketentuan",
          url: "#",
        },
        {
          id: 4,
          text: "FAQ",
          url: "#",
        },
        {
          id: 5,
          text: "Daftar Menjadi Mitra",
          url: "#",
        },
      ],
    ],
    footerPartners: [
      [
        {
          id: 1,
          url: "#",
          image: "/images/partners/a.png",
        },
        {
          id: 2,
          url: "#",
          image: "/images/partners/b.png",
        },
        {
          id: 3,
          url: "#",
          image: "/images/partners/c.png",
        },
      ],
      [
        {
          id: 1,
          url: "#",
          image: "/images/partners/a.png",
        },
        {
          id: 2,
          url: "#",
          image: "/images/partners/d.png",
        },
        {
          id: 3,
          url: "#",
          image: "/images/partners/c.png",
        },
        {
          id: 4,
          url: "#",
          image: "/images/partners/e.png",
        },
      ],
      [
        {
          id: 1,
          url: "#",
          image: "/images/partners/f.png",
        },
        {
          id: 2,
          url: "#",
          image: "/images/partners/g.png",
        },
        {
          id: 3,
          url: "#",
          image: "/images/partners/h.png",
        },
      ],
      [
        {
          id: 1,
          url: "#",
          image: "/images/partners/i.png",
        },
        {
          id: 2,
          url: "#",
          image: "/images/partners/j.png",
        },
        {
          id: 3,
          url: "#",
          image: "/images/partners/k.png",
        },
        {
          id: 4,
          url: "#",
          image: "/images/partners/l.png",
        },
      ],
    ],
  };

  return (
    <div className="bg-[#E6E6E6]">
      <section className="flex min-w-[360px] flex-col max-w-[1440px] w-full mx-auto min-h-[100dvh] bg-white">
        <header className="flex flex-col sticky top-0 bg-white z-10">
          <Navbar list={obj_widget.navbar} />
        </header>
        <section className="flex flex-col">
          <Breadcrumb list={obj_widget.breadcrumb} />
          <Carousel list={obj_widget.carousel} />
          <section
            className={[
              "flex flex-col px-16 pt-6 pb-[41px] gap-y-[135px]",
              "max-lg:p-6 max-lg:gap-6",
            ].join(" ")}
          >
            <section
              className={[
                "flex gap-x-9",
                "max-lg:gap-6",
                "max-mda:flex-col",
              ].join(" ")}
            >
              <Gallery list={obj_widget.gallery} />
              <aside
                className={[
                  "w-[364px] flex flex-col gap-y-8 min-w-[364px]",
                  "max-lg:gap-6",
                  "max-mda:min-w-[unset] max-mda:w-[unset] max-mda:grid max-mda:grid-cols-2",
                  "max-md:flex max-md:flex-col",
                ].join(" ")}
              >
                <Card
                  data={obj_widget.orderNow}
                  className="md:max-mda:order-2"
                />
                <Reviews
                  list={obj_widget.reviews}
                  className="md:max-mda:order-1"
                />
              </aside>
            </section>
            <Recommendations list={obj_widget.recommendations} />
          </section>
        </section>
        <footer
          className={[
            "flex flex-col gap-y-[46px] px-16 py-[39px] bg-[#012846] text-white",
            "max-lg:p-6 max-lg:gap-y-6",
          ].join(" ")}
        >
          <div
            className={[
              "flex gap-x-12 justify-between",
              "max-lg:flex-col max-lg:items-center max-lg:gap-y-6",
            ].join(" ")}
          >
            <div
              className={[
                "w-full max-w-[608px] flex flex-col items-start gap-y-6",
                "max-lg:items-center",
              ].join(" ")}
            >
              <a
                href="#"
                className="flex items-center justify-center overflow-hidden h-[47px] w-auto"
              >
                <Image
                  src="/images/logo_footer.png"
                  width={0}
                  sizes="100dvw"
                  height={0}
                  alt="logo_footer"
                  className="h-full w-auto max-w-[unset]"
                  priority
                />
              </a>
              <p>
                SobatBangun adalah platform digital dari SIG yang bergerak
                dengan misi mengembangkan proses pembangunan dan renovasi rumah
                secara lebih baik serta berkelanjutan.
              </p>
              <div className="flex items-center gap-x-3">
                <span className="icon-[material-symbols--mail-outline] text-[24px]"></span>
                <a href="mailto:sobat@sobatbangum.com" className="underline">
                  sobat@sobatbangum.com
                </a>
              </div>
              <ListSocmed
                className="max-lg:items-center"
                list={obj_widget.footerSocialMedia}
              />
            </div>
            <div
              className={[
                "flex gap-x-12",
                "max-lg:gap-x-4",
                "max-sma:flex-col max-sma:gap-y-6",
              ].join(" ")}
            >
              <ListLink
                className={["max-sma:items-start", "max-lg:items-center"].join(
                  " "
                )}
                title="Produk & Layanan"
                list={obj_widget.footerLinks[0]}
              />
              <ListLink
                className={["max-sma:items-start", "max-lg:items-center"].join(
                  " "
                )}
                title="Tentang Kami"
                list={obj_widget.footerLinks[1]}
              />
            </div>
          </div>
          <div
            className={[
              "grid grid-cols-4 w-full mx-auto gap-4",
              "[&>div]:place-self-center",
              "xla:[&>div:first-child]:place-self-start xla:[&>div:last-child]:place-self-end",
              "max-xla:grid-cols-3",
              "lga:max-xla:[&>div:first-child]:place-self-start lga:max-xla:[&>div:last-child]:place-self-start lga:max-xla:[&>div:nth-child(3)]:place-self-end",
              "max-lga:grid-cols-2",
              "max-md:grid-cols-1 max-md:w-[unset]",
              "max-md:[&>div]:place-self-start",
            ].join(" ")}
          >
            <ListPartner
              title="Kredit Bangun Rumah"
              list={obj_widget.footerPartners[0]}
            />
            <ListPartner
              title="Tunai Via Bank Transfer"
              list={obj_widget.footerPartners[1]}
            />
            <ListPartner
              title="Kartu Kredit"
              list={obj_widget.footerPartners[2]}
            />
            <ListPartner
              title="Rekan Teknologi Tambahan"
              list={obj_widget.footerPartners[3]}
            />
          </div>
          <div
            className={[
              "flex justify-between items-center gap-y-4",
              "max-md:flex-col",
            ].join(" ")}
          >
            <div className="flex items-center gap-x-4">
              <p>Powered by :</p>
              <a
                href="#"
                className="flex items-center justify-center overflow-hidden h-[41px] w-auto"
              >
                <Image
                  src="/images/logo_parent.png"
                  width={0}
                  sizes="100dvw"
                  height={0}
                  alt="logo_parent"
                  className="h-full w-auto max-w-[unset]"
                  priority
                />
              </a>
            </div>
            <p className="text-sm">
              Copyright © 2023 SobatBangun. All rights reserved.
            </p>
          </div>
        </footer>
      </section>
    </div>
  );
}
