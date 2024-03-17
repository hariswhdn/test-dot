const Reviews = ({ list, className }) => {
  return (
    <div className={["flex flex-col gap-y-4", className].join(" ")}>
      <p className="text-2xl font-semibold text-[#1A1A1A]">Testimoni</p>
      <ul
        className={[
          "flex flex-col gap-y-4",
          "[&>li]:flex [&>li]:gap-x-4",
          "[&>li>span]:text-[44px] [&>li>span]:text-[#999999] [&>li>span]:min-w-[44px]",
          "[&>li>div]:flex [&>li>div]:flex-col [&>li>div]:gap-y-1",
          "[&>li>div>div]:divide-[#C5C7D0] [&>li>div>div]:flex [&>li>div>div]:items-center [&>li>div>div]:gap-x-2 [&>li>div>div]:divide-x",
          "[&>li>div>div>p]:font-semibold [&>li>div>div>p]:text-[#1A1A1A]",
          "[&>li>div>div>div]:flex [&>li>div>div>div]:gap-x-1 [&>li>div>div>div]:pl-2",
          "[&>li>div>div>div>span]:text-[20px] [&>li>div>div>div>span]:text-[#FBBC05]",
          "[&>li>div>div>div>p]:text-[#4A5568] [&>li>div>div>div>p]:text-sm",
          "[&>li>div>p]:text-[#666666]",
        ].join(" ")}
      >
        {list.map((o) => (
          <li key={o.id}>
            <span className="icon-[mdi--account-circle]"></span>
            <div>
              <div>
                <p>{o.name}</p>
                <div>
                  <span className="icon-[material-symbols--star-rate-rounded]"></span>
                  <p>{o.rating}</p>
                </div>
              </div>
              <p>{o.reviews}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
