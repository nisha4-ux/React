const CategoryCard = ({ data }) => {
  return (
    <div className="bg-white rounded-3xl p-2 w-40  shadow-lg">

      <h2 className="font-bold text-xl">{data.title}</h2>
      <p className="text-gray-500">{data.subtitle}</p>

      <span className="inline-block mt-2 text-orange-500 font-semibold">
        {data.offer}
      </span>

      <img
        src={data.image}
        alt={data.title}
        className="mt-4 rounded-xl"
      />

    </div>
  );
};

export default CategoryCard;
