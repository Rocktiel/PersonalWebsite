// src/pages/ContactPage.tsx
import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] p-6 md:p-12 text-white">
      <div className="max-w-xl w-full bg-gray-800 rounded-2xl shadow-2xl p-10 md:p-12 border border-gray-700 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-500 mb-6">
          İletişim
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
          Bana ulaşmak için aşağıdaki yöntemleri kullanabilirsiniz. Yeni
          projeler veya işbirliği fırsatları için her zaman açığım!
        </p>
        <div className="space-y-4">
          <p className="text-lg">
            <strong className="text-indigo-400">E-posta:</strong>{" "}
            <a
              href="mailto:info@seymentsami.com"
              className="text-white hover:text-indigo-300 transition-colors duration-200"
            >
              info@seymentsami.com
            </a>
          </p>
          <p className="text-lg">
            <strong className="text-indigo-400">LinkedIn:</strong>{" "}
            <a
              href="https://linkedin.com/in/seymentsami"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-300 transition-colors duration-200"
            >
              linkedin.com/in/seymentsami
            </a>
          </p>
          <p className="text-lg">
            <strong className="text-indigo-400">GitHub:</strong>{" "}
            <a
              href="https://github.com/seymentsami"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-300 transition-colors duration-200"
            >
              github.com/seymentsami
            </a>
          </p>
          {/* İsteğe bağlı olarak bir iletişim formu ekleyebilirsiniz */}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
