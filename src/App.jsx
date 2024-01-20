import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  // Check local storage for user's dark mode preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialDarkMode = savedTheme === 'dark' || (!savedTheme && prefersDarkMode);
 
  const [darkMode, setDarkMode] = useState(initialDarkMode);
 
  useEffect(() => {
    // Apply the dark mode class to the body element
    document.documentElement.classList.toggle('dark', darkMode);
 
    // Save user's preference in local storage
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Outlet/>
    </div>
  )
}

export default App;