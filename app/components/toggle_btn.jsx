"use client"; // 指定這是客戶端組件

import { useState, useEffect } from 'react';

export default function ModeToggle() {
  // 從 localStorage 中讀取初始主題狀態
  const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //   // 在組件掛載時檢查 localStorage 以設置初始狀態
  //   const storedTheme = localStorage.getItem('theme');
  //   if (storedTheme === 'dark') {
  //     setDarkMode(true);
  //     document.documentElement.classList.add('dark');
  //   }
  // }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`p-2 rounded ${darkMode ? 'bg-gray-200 text-black':'bg-gray-800 text-white'}`}>
      {darkMode ? 'Light' : 'Dark'}
    </button>
  );
}
