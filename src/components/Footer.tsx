// src/components/Footer.tsx
import React from "react";
import { Link } from "react-router-dom"; // react-router-dom'dan Link'i içe aktarın

const Footer: React.FC = () => {
  // Sosyal Medya İkonları için örnek SVG'ler (Gerçek ikonları kullanmak için daha gelişmiş kütüphaneler de kullanılabilir)
  const socialLinks = [
    {
      name: "GitHub",
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.499.09.679-.217.679-.481 0-.237-.008-.865-.013-1.702-2.782.602-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.905-.619.069-.605.069-.605 1.004.072 1.531 1.032 1.531 1.032.892 1.529 2.341 1.084 2.902.829.091-.645.356-1.084.64-1.33-2.22-.253-4.555-1.113-4.555-4.956 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.704.113 2.503.324 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.099 2.651.64.698 1.028 1.591 1.028 2.682 0 3.85-2.339 4.693-4.566 4.947.357.307.676.915.676 1.854 0 1.336-.012 2.419-.012 2.747 0 .268.18.58.688.482C21.137 20.281 24 16.516 24 12.017 24 6.484 19.522 2 14 2h-2z"
            clipRule="evenodd"
          />
        </svg>
      ),
      href: "https://github.com/seymensami",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19V9h3v10H8zm5.5 0V9H17v10h-3.5zm-5.5-11a2 2 0 110-4 2 2 0 010 4zm7.5 0a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
      ),
      href: "https://linkedin.com/in/seymensami",
    },
    {
      name: "Twitter",
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M22 4.029c-.732.365-1.527.608-2.36.716a4.348 4.348 0 001.89-2.285c-.81.482-1.721.83-2.68.994A4.346 4.346 0 0015.617 2c-2.378 0-4.312 1.93-4.312 4.304 0 .337.039.667.112.981-3.585-.18-6.758-1.894-8.885-4.482-.37.639-.582 1.374-.582 2.15 0 1.493.76 2.808 1.916 3.568-.7-.022-1.358-.21-1.932-.533v.054c0 2.088 1.487 3.829 3.456 4.22a4.321 4.321 0 01-1.947.073c.552 1.71 2.146 2.956 4.041 2.989A8.675 8.675 0 013 20.443c1.785.992 3.896 1.568 6.183 1.568C15.618 22.011 20.5 17.135 20.5 11.298c0-.181-.004-.36-.012-.537.828-.598 1.547-1.352 2.109-2.207z" />
        </svg>
      ),
      href: "https://twitter.com/seymensami",
    },
    // Daha fazla sosyal medya ikonları ekleyebilirsiniz
  ];

  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-8 md:py-12 border-t border-gray-700 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 text-center md:text-left">
          {/* Sütun 1: Telif Hakkı ve Yapım Bilgisi */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Seymen Sami</h3>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Tüm hakları saklıdır.
            </p>
            <p className="mt-2 text-sm">
              Bu kişisel sayfa{" "}
              <a
                href="https://react.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline transition-colors duration-200"
              >
                React
              </a>{" "}
              ve{" "}
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline transition-colors duration-200"
              >
                Tailwind CSS
              </a>{" "}
              ile inşa edilmiştir.
            </p>
          </div>

          {/* Sütun 2: Site İçi Navigasyon */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white hover:underline transition-colors duration-200"
                >
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white hover:underline transition-colors duration-200"
                >
                  Hakkımda
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-400 hover:text-white hover:underline transition-colors duration-200"
                >
                  Projeler
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white hover:underline transition-colors duration-200"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Sütun 3: Sosyal Medya */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Beni Takip Et</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            {/* İsteğe bağlı olarak buraya e-posta veya telefon bilgisi eklenebilir */}
            <p className="mt-4 text-sm">
              <a
                href="mailto:seymensami@example.com"
                className="text-indigo-400 hover:underline transition-colors duration-200"
              >
                seymensami@example.com
              </a>
            </p>
          </div>

          {/* Sütun 4: (Opsiyonel) Ek Bilgiler / Newsletter vb. */}
          {/* <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Bülten Aboneliği</h3>
            <form>
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
              />
              <button
                type="submit"
                className="mt-3 w-full bg-indigo-600 text-white py-2 rounded font-semibold hover:bg-indigo-700 transition-colors duration-200"
              >
                Abone Ol
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
