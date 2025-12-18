const Hero = () => {
  return (
    <div className="bg-orange-500 text-center py-20 px-4">

      <h1 className="text-white text-4xl font-bold mb-8">
        Order food & groceries. Discover <br />
        best restaurants. Swiggy it!
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center gap-4 flex-wrap">

        <input 
          type="text"
          placeholder="Enter your delivery location  
          "
          className="w-72 px-4 py-5 rounded-lg outline-none  bg-amber-50"
        />

        <input
          type="text"
          placeholder="Search for restaurant, item or more"
          className="w-96 px-4 py-5 rounded-lg outline-none bg-amber-50"
        />

      </div>

    </div>
  );
};

export default Hero;
