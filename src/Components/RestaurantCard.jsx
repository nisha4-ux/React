// import { Link } from "react-router-dom";


// const RestaurantCard = ({ data }) => {
// return (
// <Link to={`/restaurant/${data.id}`}>
// <div className="border rounded-lg overflow-hidden shadow hover:scale-105 transition">
// <img src={data.image} alt={data.name} className="h-40 w-full object-cover" />
// <div className="p-3">
// <h2 className="font-bold text-lg">{data.name}</h2>
// <p className="text-sm text-gray-500">{data.cuisine}</p>
// <p className="text-sm font-semibold">⭐ {data.rating}</p>
// </div>
// </div>
// </Link>
// );
// };


// export default RestaurantCard;
import { FaStar } from "react-icons/fa"; // For rating star

const RestaurantCard = ({ item }) => {
  if (!item) return null;

  return (
    <div className="relative flex flex-col items-center min-w-[200px] bg-white rounded-xl shadow p-4">
      
      {/* Image */}
      <div className="relative w-full h-36">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover rounded-xl"
        />
        {/* Rating icon */}
        <div className="absolute top-2 right-2 flex items-center gap-1 bg-white px-2 py-1 rounded">
          <FaStar className="text-yellow-500" /> 
          <span className="text-sm font-medium">{item.rating}</span>
        </div>
      </div>

      {/* Name and cuisine */}
      <h3 className="mt-3 text-lg font-bold">{item.name}</h3>
      <p className="text-gray-500 text-sm">{item.cuisine}</p>
      <p className="text-gray-400 text-xs mt-1">Best desserts restaurants of Indore</p>

      {/* Table booking button */}
      <button className="mt-3 bg-blue-500 text-white mr-30  px-3 rounded hover:bg-blue-600  text-sm">
        Book Table
      </button>

      {/* Discount tag */}
      <div className="mt-2 bg-emerald-500 text-white text-xs px-20 py-2 rounded">
        {item.discount}
      </div>
    </div>
  );
};

export default RestaurantCard;
