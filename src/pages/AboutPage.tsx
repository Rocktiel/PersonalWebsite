// src/pages/AboutPage.tsx
import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] p-6 md:p-12 text-white">
      <div className="max-w-3xl w-full bg-gray-800 rounded-2xl shadow-2xl p-10 md:p-12 border border-gray-700 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-500 mb-6">
          Hakkımda
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
          Ben Seymen Sami, yazılım geliştirme dünyasına olan tutkumla bu yola
          çıkmış bir profesyonelim. Özellikle web teknolojilerine odaklanmış
          olup, modern ve etkileşimli kullanıcı deneyimleri oluşturmak için
          çalışıyorum.
        </p>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
          Teknolojinin sunduğu imkanları kullanarak karmaşık problemleri çözmeyi
          ve yenilikçi uygulamalar geliştirmeyi seviyorum. Sürekli öğrenmeye ve
          kendimi geliştirmeye açık bir yapıya sahibim.
        </p>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Boş zamanlarımda kitap okumak, doğa yürüyüşleri yapmak ve yeni
          mutfakları denemek en sevdiğim aktiviteler arasında.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
