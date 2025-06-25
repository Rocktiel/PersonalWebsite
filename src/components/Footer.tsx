// src/components/Footer.tsx
import React from "react";
import { Link } from "react-router-dom"; // react-router-dom'dan Link'i içe aktarın
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
const Footer: React.FC = () => {
  // Sosyal Medya İkonları için örnek SVG'ler (Gerçek ikonları kullanmak için daha gelişmiş kütüphaneler de kullanılabilir)
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
                href="mailto:seymensami81@hotmail.com"
                className="text-indigo-400 hover:underline transition-colors duration-200"
              >
                seymensami81@hotmail.com
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
