// src/components/Header.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "@reactuses/core";
import Logo from "./Logo";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [theme, toggleDark] = useDarkMode({
    classNameDark: "dark",
    classNameLight: "",
    defaultValue: false,
  });
  return (
    <header className="w-full bg-[#b9c1c5] dark:bg-neutral-850 shadow-md sticky top-0 z-50 ">
      <nav className="container flex  justify-between items-center p-4 md:p-6 min-h-[64px] ">
        <Link to="/" className="ml-2 sm:ml-0">
          <Logo />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-preset-4  text-neutral-700 dark:text-neutral-300  hover:text-black hover:dark:text-white   duration-250 transform hover:scale-105"
          >
            Anasayfa
          </Link>
          <Link
            to="/about"
            className="text-preset-4  text-neutral-700 dark:text-neutral-300  hover:text-black hover:dark:text-white   duration-250 transform hover:scale-105"
          >
            Hakkımda
          </Link>
          <Link
            to="/projects"
            className="text-preset-4  text-neutral-700 dark:text-neutral-300  hover:text-black hover:dark:text-white   duration-250 transform hover:scale-105"
          >
            Projeler
          </Link>
          <Link
            to="/contact"
            className="text-preset-4  text-neutral-700 dark:text-neutral-300  hover:text-black hover:dark:text-white   duration-250 transform hover:scale-105"
          >
            İletişim
          </Link>

          <button
            onClick={() => toggleDark()}
            className="p-2 rounded-full bg-gray-700 text-gray-300 hover:bg-gray-600 duration-200"
            aria-label="Toggle dark mode"
          >
            {theme ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h1M3 12h1m15.325-7.757l-.707.707M5.388 18.325l-.707.707M18.325 5.388l.707-.707M5.388 5.388l-.707-.707M12 6a6 6 0 110 12 6 6 0 010-12z"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.998 9.001 0 0012 21a9.998 9.001 0 008.354-5.646z"
                ></path>
              </svg>
            )}
          </button>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => toggleDark()}
            className="p-2 rounded-full bg-gray-700 text-gray-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            {theme ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h1M3 12h1m15.325-7.757l-.707.707M5.388 18.325l-.707.707M18.325 5.388l.707-.707M5.388 5.388l-.707-.707M12 6a6 6 0 110 12 6 6 0 010-12z"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.998 9.001 0 0012 21a9.998 9.001 0 008.354-5.646z"
                ></path>
              </svg>
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-2"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-gray-800 pb-1 pt-1 fixed top-16 left-0 w-full z-50 mt-3">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-3 text-lg text-gray-200 hover:bg-gray-700 hover:text-white transition-colors duration-200"
          >
            Anasayfa
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-3 text-lg text-gray-200 hover:bg-gray-700 hover:text-white transition-colors duration-200"
          >
            Hakkımda
          </Link>
          <Link
            to="/projects"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-3 text-lg text-gray-200 hover:bg-gray-700 hover:text-white transition-colors duration-200"
          >
            Projeler
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-3 text-lg text-gray-200 hover:bg-gray-700 hover:text-white transition-colors duration-200"
          >
            İletişim
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
