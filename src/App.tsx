// src/App.tsx
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import "./index.css"; // Tailwind CSS'i ve tema değişkenlerini içe aktarın

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  });

  const [showScrollToTop, setShowScrollToTop] = useState(false); // En üste çık butonu durumu

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Sayfa kaydırma olayını dinleyerek butonu göster/gizle
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        // 300px aşağı kaydırıldığında göster
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // En üste kaydırma fonksiyonu
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Yumuşak kaydırma
    });
  };

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen dark:bg-gray-900">
        <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />

        {/* En Üste Çık Butonu */}
        {showScrollToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-4 bg-indigo-600 text-white rounded-full shadow-lg
                       hover:bg-indigo-700 transition-all duration-300 z-50
                       focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label="Scroll to top"
          >
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
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              ></path>
            </svg>
          </button>
        )}
      </div>
    </Router>
  );
}

export default App;
