// src/components/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import Logo from "./Logo";
const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="w-6 h-6" />,
      href: "https://github.com/Rocktiel",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/sami-%C3%A7akalo%C4%9Flu-b7868b289/",
    },
  ];

  return (
    <footer className="w-full bg-[#b9c1c5] dark:bg-neutral-850 dark:text-gray-400 text-neutral-600 py-8 md:py-12 border-t border-gray-700 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 text-center md:text-left">
          <div className="md:col-span-1">
            <Link
              to="/"
              className="flex justify-center md:justify-start items-center"
            >
              <Logo />
            </Link>
            <p className="text-sm mt-3">
              &copy; {new Date().getFullYear()} Tüm hakları saklıdır.
            </p>
            <p className="mt-4 text-sm">
              Bu kişisel sayfa{" "}
              <a
                href="https://react.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-700 dark:text-indigo-400 hover:underline transition-colors duration-200"
              >
                React
              </a>{" "}
              ve{" "}
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-700 dark:text-indigo-400 hover:underline transition-colors duration-200"
              >
                Tailwind CSS
              </a>{" "}
              ile inşa edilmiştir.
            </p>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-xl font-bold dark:text-white text-neutral-900 mb-4">
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-2 dark:text-gray-400 text-neutral-600">
              <li>
                <Link
                  to="/"
                  className=" hover:text-white hover:underline transition-colors duration-200"
                >
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className=" hover:text-white hover:underline transition-colors duration-200"
                >
                  Hakkımda
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className=" hover:text-white hover:underline transition-colors duration-200"
                >
                  Projeler
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className=" hover:text-white hover:underline transition-colors duration-200"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-xl font-bold dark:text-white text-neutral-900 mb-4">
              Beni Takip Et
            </h3>
            <div className="flex justify-center md:justify-start space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-white hover:scale-105 transition-colors duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <p className="mt-4 text-sm">
              <a
                href="mailto:seymensami81@hotmail.com"
                className="text-indigo-700 dark:text-indigo-400 hover:underline transition-colors duration-200"
              >
                seymensami81@hotmail.com
              </a>
            </p>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-xl font-bold dark:text-white text-neutral-900 mb-4">
              CV İndir
            </h3>
            <a
              href="/CV.pdf"
              download="CV.pdf"
              className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-white hover:scale-105 transition-colors duration-200"
            >
              <MdFileDownload className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
