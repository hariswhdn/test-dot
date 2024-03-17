import Card from "./Card";

export const Recommendations = ({ list }) => {
  return (
    <div className="flex flex-col gap-y-6">
      <p className="text-2xl font-semibold">Desain Lainnya oleh Studio SAe</p>
      <div
        className={[
          "grid grid-cols-4 gap-4",
          "max-xla:grid-cols-3",
          "max-lg:grid-cols-2",
          "max-mdb:grid-cols-1",
        ].join(" ")}
      >
        {list.map((o) => (
          <Card key={o.id} isRecommendation={true} data={o.data} />
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
