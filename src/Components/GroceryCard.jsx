const GroceryCard = ({ item }) => {
  if (!item) return null;

  return (
    <div className="flex flex-col items-center min-w-[180px] p-2 bg-gray-200  h-50 rounded-xl shadow">
      <img
        src={item.image}
        alt={item.name}
        className="w-50 h-40 object-contain"
      />
      <p className="mt-2 text-sm font-medium">{item.name}</p>
    </div>
  );
};

export default GroceryCard;
