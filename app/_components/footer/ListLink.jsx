const ListLink = ({ title, list, className }) => {
  return (
    <div
      className={[
        "flex flex-col w-[254px] min-w-[254px] gap-y-6",
        className,
      ].join(" ")}
    >
      <p className="font-bold text-xl">{title}</p>
      <ul className="flex flex-col gap-y-2 leading-[220%]">
        {list.map((o) => (
          <li key={o.id}>
            <a href={o.url}>{o.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListLink;
