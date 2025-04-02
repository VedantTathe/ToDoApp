import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Todo from "./components/TodoList";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-gray-100"} transition`}>
      <Navbar toggleTheme={() => setDarkMode(!darkMode)} />
      <Todo />
    </div>
  );
}

export default App;
