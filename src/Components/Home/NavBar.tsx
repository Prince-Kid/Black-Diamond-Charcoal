import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [active, setActive] = useState("home");
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle toggling dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    const theme = newMode ? "dark" : "light";
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", newMode);
  };

  // Initialize theme on first load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleSetActive = (section: string) => {
    setActive(section);
    setIsMobileMenuOpen(false); // Close menu on link click
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 fixed top-0 left-0 right-0 z-50 shadow-lg pb-7">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <img
              src="https://www.pngitem.com/pimgs/m/267-2678022_charcoal-png-transparent-png.png"
              className="mr-3 h-6 sm:h-9"
              alt="Black Chalcoal Diamond Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Black Chalcoal Diamond
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              {darkMode ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 018 8 8.001 8.001 0 01-7.485 7.96A7 7 0 0012 4a7.97 7.97 0 00-2-.26A8.005 8.005 0 0110 2z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15a5 5 0 100-10 5 5 0 000 10zm0 1a6 6 0 110-12 6 6 0 010 12z" />
                </svg>
              )}
            </button>
            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
          {/* Links */}
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {["home", "about", "team", "contact"].map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    onClick={() => handleSetActive(section)}
                    className={`block py-2 pr-4 pl-3 ${
                      active === section ? "text-primary-700" : "text-gray-700"
                    } rounded lg:bg-transparent`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
