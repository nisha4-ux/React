// Simple banner component
const AppBanner = () => {
  return (
    <div className="bg-[#1b1b1b] text-white py-16 px-10 flex justify-between items-center">
      
      {/* Left text */}
      <div>
        <h1 className="text-4xl font-bold mb-3">
          Get the Swiggy App now!
        </h1>

        <p className="text-gray-300">
          For best offers and discounts curated specially for you.
        </p>
      </div>

      {/* Right text */}
      <div className="text-orange-500 font-semibold">
        Scan to download
      </div>

    </div>
  );
};

export default AppBanner;
