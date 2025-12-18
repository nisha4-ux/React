// import restaurants from "../data/restaurants";
// import RestaurantCard from "../components/RestaurantCard";


// const Home = () => {
// return (
// <div className="p-6">
// <h1 className="text-2xl font-bold mb-4">Restaurants Near You</h1>
// <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// {restaurants.map((item) => (
// <RestaurantCard key={item.id} data={item} />
// ))}
// </div>
// </div>
// );
// };


// export default Home;


// import Navbar from "../Components/Navbar";
// import Hero from "../Components/Hero";
// import CategoryCard from "../Components/CategoryCard";
// import categories from "../data/categories";
// import AppBanner from "../Components/AppBanner";
// import CitySection from "../Components/CitySection";
// import Footer from "../Components/Footer";

// // Importing data
// import { foodCities, groceryCities } from "../data/citiesData";

// const Home = () => {
//   return (
//     <>
//       <Navbar />
//       <Hero />

//       {/* Cards Section */}
//       <div className="bg-orange-500      border-2    pb-20">
//         <div className="flex justify-center gap-8  flex-wrap">
//           {categories.map((item) => (
//             <CategoryCard key={item.id} data={item} />
//           ))}
//         </div>
        
//       </div>

//        <div>

//       {/* Groceries & Instamart already above */}

//       <AppBanner />

//       <CitySection
//         title="Cities with food delivery"
//         cities={foodCities}
//         type="food"
//       />

//       <CitySection
//         title="Cities with grocery delivery"
//         cities={groceryCities}
//         type="grocery"
//       />

//       <Footer />

//     </div>
//     </>
//   );
// };

// export default Home;


// // const Home = () => {
// //   return <h1>Home page working</h1>;
// // };

// // export default Home;
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import CategoryCard from "../Components/CategoryCard";
import categories from "../data/categories";
import AppBanner from "../Components/AppBanner";
import CitySection from "../Components/CitySection";
import Footer from "../Components/Footer";

// Importing data
import { foodCities, groceryCities } from "../data/citiesData";

const Home = () => {
  return (
    <>
      {/* 🔝 Navbar */}
      <Navbar />

      {/* 🧡 Hero Section */}
      <Hero />

      {/* 🍔 Food & 🛒 Instamart Cards (ARRAY + MAP) */}
      <div className="bg-orange-500 border-2 pb-20">
        <div className="flex justify-center gap-8 flex-wrap">
          {categories.map((item) => (
            <CategoryCard key={item.id} data={item} />
          ))}
        </div>
      </div>

      {/* 📱 Swiggy Scanner / App Download Banner */}
      <AppBanner />

      {/* 🌆 Cities with Food Delivery */}
      <CitySection
        title="Cities with food delivery"
        cities={foodCities}
        type="food"
      />

      {/* 🏙️ Cities with Grocery Delivery */}
      <CitySection
        title="Cities with grocery delivery"
        cities={groceryCities}
        type="grocery"
      />

      {/* 🔻 Footer */}
      <Footer />
    </>
  );
};

export default Home;

