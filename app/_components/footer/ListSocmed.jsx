import { Icon } from "@iconify/react";

const ListSocmed = ({ list, className }) => {
  return (
    <div className={["flex flex-col gap-y-4", className].join(" ")}>
      <p>Sosial Media :</p>
      <ul
        className={[
          "flex gap-x-[26px]",
          "[&>li]:flex",
          "[&>li>a]:rounded-full [&>li>a]:w-[50px] [&>li>a]:h-[50px] [&>li>a]:flex [&>li>a]:items-center [&>li>a]:justify-center",
          "[&>li>a>svg]:text-[24px]",
        ].join(" ")}
      >
        {list.map((o, i) => (
          <li key={o.id}>
            <a
              href={o.url}
              className={
                i === 0
                  ? ["bg-[#2C373E]", "[&>svg]:text-[#fff]"].join(" ")
                  : ["bg-white", "[&>svg]:text-[#2C373E]"].join(" ")
              }
            >
              <Icon icon={o.icon} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListSocmed;
