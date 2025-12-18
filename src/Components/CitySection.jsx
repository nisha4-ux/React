// Reusable component for both food & grocery cities
const CitySection = ({ title, cities, type }) => {
  return (
    <div className="py-14 px-10">

      {/* Section heading */}
      <h2 className="text-2xl font-bold mb-8">
        {title}
      </h2>

      {/* Cities grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {cities.map((city, index) => (
          <div
            key={index}
            className="border rounded-lg py-4 text-center hover:shadow"
          >
            Order {type} online in {city}
          </div>
        ))}

      </div>
    </div>
  );
};

export default CitySection;
