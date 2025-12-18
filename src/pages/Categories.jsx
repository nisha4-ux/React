// import { FoodCategoryCard } from "../Components/FoodCategoryCard";

// import categoriesData from "../data/categoriesData";

// const Categories = () => {
//   return (
//     <div className="w-full px-6 py-10 bg-white">
      
//       <h2 className="text-2xl font-bold mb-6">
//         Order our best food options
//       </h2>

//       <div className="flex gap-6 overflow-x-scroll scrollbar-hide">
//         {categoriesData.map((item) => (
//           <CategoryCard
//             key={item.id}
//             image={item.image}
//             name={item.name}
//           />
//         ))}
//       </div>

//     </div>
//   );
// };

// export default Categories;

import FoodCategoryCard from "../Components/FoodCategoryCard";
import categoriesData from "../data/categoriesData";

import GroceryCard from "../Components/GroceryCard";
import groceriesData from "../data/groceriesData";
import RestaurantCard from "../Components/RestaurantCard";
import restaurantsData from "../data/restaurantsData";


const Categories = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        Order our best food options
      </h2>

      <div className="grid grid-cols-10     gap-6">
        {categoriesData.map((item) => (
          <FoodCategoryCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
      {/* Instamart Groceries Section */}
      <h2 className="text-2xl font-bold mb-4">Shop groceries on Instamart</h2>
      <div className="flex gap-4 overflow-x-scroll pb-4">
        {groceriesData.map((item) => (
          <GroceryCard key={item.id} item={item} />
        ))}
      </div>
        {/* Restaurants Section */}
      <h2 className="text-2xl font-bold mb-4">Best Restaurants in Indore</h2>
      <div className="flex gap-6 overflow-x-scroll pb-4">
        {restaurantsData.map((item) => (
          <RestaurantCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Categories;

