const Breadcrumb = ({ list }) => {
  return (
    <ul
      className={[
        "flex gap-x-2 text-sm font-semibold px-[62px] py-6",
        "[&>li]:flex [&>li]:items-center [&>li]:gap-x-2",
        "[&>li>a]:text-[#F5333F]",
        "[&>li>span]:text-[24px] [&>li>span]:text-[#C5C7D0]",
        "[&>li:last-child>a]:text-[#999999] [&>li:last-child>a]:pointer-events-none",
        "[&>li:last-child>span]:hidden",
        "max-lg:px-6 max-lg:py-4",
      ].join(" ")}
    >
      {list.map((o) => (
        <li key={o.id}>
          <a href={o.url}>{o.text}</a>
          <span className="icon-[material-symbols--chevron-right]"></span>
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumb;
