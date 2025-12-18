const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 py-6 bg-orange-500">
      
      {/* Logo */}
      <h1 className="text-white text-2xl font-bold">Swiggy</h1>

      {/* Right Menu */}
      <div className="flex gap-6 items-center text-white">
        <p>Swiggy Corporate</p>
        <p>Partner with us</p>

        <button className="border border-white px-4 py-2 rounded-lg">
          Get the App
        </button>

        <button className="bg-black px-4 py-2 rounded-lg">
          Sign in
        </button>
      </div>

    </div>
  );
};

export default Navbar;
