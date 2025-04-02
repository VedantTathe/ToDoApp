import { useState } from "react";

const Navbar = ({ toggleTheme }) => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md">
      <h1 className="text-xl font-bold">📝 To-Do App</h1>
      <button
        onClick={toggleTheme}
        className="bg-gray-800 text-white px-3 py-1 rounded-lg hover:bg-gray-700 transition"
      >
        🌙 Toggle Dark Mode
      </button>
    </nav>
  );
};

export default Navbar;
