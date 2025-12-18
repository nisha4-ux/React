import { useParams } from "react-router-dom";
import restaurants from "../data/restaurants";


const Restaurant = () => {
const { id } = useParams();
const restaurant = restaurants.find((item) => item.id === Number(id));


return (
<div className="p-6">
<img src={restaurant.image} className="w-full h-60 object-cover rounded" />
<h1 className="text-3xl font-bold mt-4">{restaurant.name}</h1>
<p className="text-lg text-gray-600">{restaurant.cuisine}</p>
<p className="text-lg">⭐ {restaurant.rating}</p>
</div>
);
};


export default Restaurant;