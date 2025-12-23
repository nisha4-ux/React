// const Navbar = () => {
//   return (
//     <div className="flex justify-between items-center px-10 py-6 bg-orange-500">
      
//       {/* Logo */}
//       <h1 className="text-white text-2xl font-bold">Swiggy</h1>

//       {/* Right Menu */}
//       <div className="flex gap-6 items-center text-white">
//         <p>Swiggy Corporate</p>
//         <p>Partner with us</p>

//         <button className="border border-white px-4 py-2 rounded-lg">
//           Get the App
//         </button>

//         <button className="bg-black px-4 py-2 rounded-lg">
//           Sign in
//         </button>
//       </div>

//     </div>
//   );
// };

// export default Navbar;
import { useState } from "react";
import LoginDrawer from "./LoginDrawer";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <nav className="bg-orange-600 text-white flex justify-between items-center px-20 py-6">
        <h1 className="font-bold text-3xl">Swiggy</h1>

        <div className="flex gap-10 items-center">
          <span>Swiggy corporate</span>
          <span>Partner with us</span>

          <button className="py-3 px-8 border border-white rounded">
            Get the app
          </button>

          {/* SIGN IN BUTTON */}
          <button
            onClick={() => setShowLogin(true)}
            className="px-6 bg-black rounded"
          >
            Sign in
          </button>
        </div>
      </nav>

      {/* LOGIN DRAWER */}
      <LoginDrawer
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
      />
    </>
  );
}

export default Navbar;
