import Image from "next/image";
import { useState, useEffect } from "react";

const Navbar = ({ list }) => {
  const [idActiveNavbar, setIdActiveNavbar] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest(".navbar") && idActiveNavbar > 0) {
        setIdActiveNavbar(0);
      }
      if (
        !e.target.closest(".burger") &&
        !e.target.closest(".navbar") &&
        showSidebar
      ) {
        setShowSidebar(false);
      }
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [idActiveNavbar, showSidebar]);

  return (
    <nav
      className={[
        "nav flex px-[62px] relative py-10 flex-col",
        "max-lg:p-6",
      ].join(" ")}
    >
      <div
        className={["flex items-center justify-between", "max-lg:hidden"].join(
          " "
        )}
      >
        <a
          href="/"
          className="flex items-center justify-center overflow-hidden h-[42px] w-auto"
        >
          <Image
            src="/images/logo.png"
            width={0}
            sizes="100dvw"
            height={0}
            alt="logo"
            className="h-full w-auto max-w-[unset]"
            priority
          />
        </a>
        <ul
          className={[
            "navbar flex gap-x-8 font-semibold",
            "[&>li]:relative [&>li]:flex [&>li]:flex-col",
            "[&>li>a]:flex [&>li>a]:py-1.5 [&>li>a]:items-center [&>li>a]:justify-between [&>li>a]:gap-x-2",
            "[&>li>a>span]:text-[20px]",
            "[&>li>ul]:absolute [&>li>ul]:duration-500 [&>li>ul]:top-full [&>li>ul]:overflow-hidden [&>li>ul]:flex [&>li>ul]:transition-all [&>li>ul]:right-7 [&>li>ul]:flex-col [&>li>ul]:bg-white [&>li>ul]:rounded",
            "[&>li>ul>li]:flex [&>li>ul>li]:flex-col",
            "[&>li>ul>li>a]:py-1.5 [&>li>ul>li>a]:flex [&>li>ul>li>a]:items-center [&>li>ul>li>a]:justify-between [&>li>ul>li>a]:gap-x-2",
            "[&>li>ul>li>a>span]:text-[20px]",
          ].join(" ")}
        >
          {list.map((o) => (
            <li
              key={o.id}
              onClick={() => setIdActiveNavbar((v) => (v === o.id ? 0 : o.id))}
            >
              <a
                href={o.url}
                className={[o?.isHighlight ? "text-[#F5333F]" : ""].join(" ")}
              >
                <p>{o.text}</p>
                {o?.subMenu?.length > 0 ? (
                  <span className="icon-[material-symbols--keyboard-arrow-down]"></span>
                ) : (
                  <></>
                )}
              </a>
              {o?.subMenu?.length > 0 ? (
                <ul
                  style={{
                    height:
                      idActiveNavbar === o.id
                        ? `calc(100% * ${o.subMenu.length})`
                        : "0",
                  }}
                >
                  {o.subMenu.map((p) => (
                    <li key={p.id}>
                      <a href={p.url}>
                        <p>{p.text}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <></>
              )}
            </li>
          ))}
        </ul>
        <div className="flex gap-x-4">
          <a
            href="#"
            className="font-semibold flex bg-white rounded-md px-4 py-2"
          >
            Daftar
          </a>
          <a
            href="#"
            className="font-semibold flex bg-[#F5333F] rounded-md text-white px-4 py-2"
          >
            Masuk
          </a>
        </div>
      </div>
      <div
        className={["hidden items-center justify-between", "max-lg:flex"].join(
          " "
        )}
      >
        <div
          className={["flex gap-x-9 items-center", "max-sm:gap-x-4"].join(" ")}
        >
          <button
            type="button"
            className="burger flex rounded-md items-center justify-center w-9 h-9 bg-white border border-[#F5333F] text-[#F5333F]"
            onClick={() => setShowSidebar((v) => !v)}
          >
            <span className="icon-[material-symbols--menu] text-[24px]">
              menu
            </span>
          </button>
          <a
            href="/"
            className={[
              "flex items-center justify-center overflow-hidden h-[36px] w-auto",
              "max-sm:h-[28px]",
            ].join(" ")}
          >
            <Image
              src="/images/logo.png"
              width={0}
              sizes="100dvw"
              height={0}
              alt="logo"
              className="h-full w-auto max-w-[unset]"
              priority
            />
          </a>
        </div>
        <div className={["flex gap-x-4", "max-sm:gap-x-0"].join(" ")}>
          <a
            href="#"
            className="font-semibold flex bg-white rounded-md px-4 py-1.5"
          >
            Daftar
          </a>
          <a
            href="#"
            className="font-semibold flex bg-[#F5333F] rounded-md text-white px-4 py-1.5"
          >
            Masuk
          </a>
        </div>
      </div>
      {showSidebar ? (
        <div className="fixed top-[84px] left-0 bg-black/50 h-[calc(100%_-_84px)] w-full">
          <ul
            className={[
              "navbar flex flex-col w-full max-w-[240px] font-semibold bg-white h-full",
              "[&>li]:flex [&>li]:flex-col",
              "[&>li>a]:flex [&>li>a]:py-3 [&>li>a]:items-center [&>li>a]:justify-between [&>li>a]:px-6 [&>li>a]:gap-x-2",
              "[&>li>a>span]:text-[20px]",
              "[&>li>ul]:duration-500 [&>li>ul]:overflow-hidden [&>li>ul]:flex [&>li>ul]:transition-all [&>li>ul]:pl-4 [&>li>ul]:flex-col",
              "[&>li>ul>li]:flex [&>li>ul>li]:flex-col",
              "[&>li>ul>li>a]:py-3 [&>li>ul>li>a]:flex [&>li>ul>li>a]:items-center [&>li>ul>li>a]:justify-between [&>li>ul>li>a]:px-4 [&>li>ul>li>a]:gap-x-2",
              "[&>li>ul>li>a>span]:text-[20px]",
            ].join(" ")}
          >
            {list.map((o) => (
              <li
                key={o.id}
                onClick={() =>
                  setIdActiveNavbar((v) => (v === o.id ? 0 : o.id))
                }
              >
                <a
                  href={o.url}
                  className={[o?.isHighlight ? "text-[#F5333F]" : ""].join(" ")}
                >
                  <p>{o.text}</p>
                  {o?.subMenu?.length > 0 ? (
                    <span className="icon-[material-symbols--keyboard-arrow-down]"></span>
                  ) : (
                    <></>
                  )}
                </a>
                {o?.subMenu?.length > 0 ? (
                  <ul
                    style={{
                      height:
                        idActiveNavbar === o.id
                          ? `calc(100% * ${o.subMenu.length})`
                          : "0",
                    }}
                  >
                    {o.subMenu.map((p) => (
                      <li key={p.id}>
                        <a href={p.url}>
                          <p>{p.text}</p>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <></>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Navbar;
