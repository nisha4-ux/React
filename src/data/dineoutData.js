const dineoutData = [
  {
    id: 1,
    name: "House Of Candy",
    image:
      "https://images.unsplash.com/photo-1589712235274-8c1fda9b6a2d",
    cuisine: "Desserts",
    location: "Chhoti Gwaltoli, Indore",
    price: "₹500 for two",
    rating: "3.8",
    offer: "Flat 20% off on pre-booking",
  },
  {
    id: 2,
    name: "Dosa Partner",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    cuisine: "South Indian",
    location: "Rajwada, Indore",
    price: "₹200 for two",
    rating: "4.8",
    offer: "Flat 10% off on walk-in",
  },
  {
    id: 3,
    name: "Saffron",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
    cuisine: "North Indian, Mughlai",
    location: "Saket Nagar, Indore",
    price: "₹700 for two",
    rating: "4.6",
    offer: "Flat 10% off on walk-in",
  },

  // 👉 duplicate pattern till 18 items
  ...Array.from({ length: 15 }, (_, i) => ({
    id: i + 4,
    name: `Restaurant ${i + 4}`,
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9",
    cuisine: "Multi Cuisine",
    location: "Indore",
    price: "₹600 for two",
    rating: "4.2",
    offer: "Up to 10% off with bank offers",
  })),
];

export default dineoutData;
