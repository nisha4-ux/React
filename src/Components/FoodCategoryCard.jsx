const FoodCategoryCard = ({ item }) => {
      if (!item) return null;

  return (
    <div className="flex flex-col items-center min-w-[480px]min-w-[480px] p-4 bg-white rounded-xl shadow">

      <img
        src={item.image}
        alt={item.name}
        className="w-84 h-24 object-contain"
      />

      <p className="mt-2 text-sm font-medium text-gray-700">
        {item.name}
      </p>

    </div>
  );
};

export default FoodCategoryCard;
