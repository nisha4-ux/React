function LoginDrawer({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      
      {/* Dark overlay */}
      <div
        className="flex-1 bg-black bg-opacity-60"
        onClick={onClose}
      ></div>

      {/* Right side login panel */}
      <div className="w-[400px] bg-white p-8 relative">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-2xl"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold mb-1">Login</h2>
        <p className="text-sm mb-6">
          or <span className="text-orange-500 cursor-pointer">create an account</span>
        </p>

        <div className="border-b mb-6"></div>

        <input
          type="text"
          placeholder="Phone number"
          className="w-full border px-4 py-3 mb-6 outline-none"
        />

        <button className="w-full bg-orange-500 text-white py-3 font-bold">
          LOGIN
        </button>

        <p className="text-xs mt-4 text-gray-600">
          By clicking on Login, I accept the{" "}
          <span className="font-bold">Terms & Conditions</span> &{" "}
          <span className="font-bold">Privacy Policy</span>
        </p>

      </div>
    </div>
  );
}

export default LoginDrawer;
