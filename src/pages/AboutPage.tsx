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
          Ben Sami Çakaloğlu, Bolu Abant İzzet Baysal Üniversitesi Bilgisayar
          Mühendisliği bölümünden mezun oldum. Yazılım geliştirme ve problem
          çözme tutkusu olan biriyim.
        </p>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
          Teknolojinin sunduğu imkanları kullanarak karmaşık problemleri çözmeyi
          ve yenilikçi uygulamalar geliştirmeyi seviyorum. Sürekli öğrenmeye ve
          kendimi geliştirmeye açık bir yapıya sahibim.
        </p>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
          Benim için yazılım sadece bir meslek değil, sürekli gelişen bir
          sorumluluk alanı. Yeni teknolojileri öğrenmekten çekinmem, aksine
          onları anlamlandırmak ve projelerime entegre etmek için
          sabırsızlanırım.
        </p>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
          Çözüm odaklı yaklaşımım ve hızlı adaptasyon kabiliyetim sayesinde bir
          projede tek başıma değer yaratabilir, bir ekip içinde uyumla
          çalışabilirim.
        </p>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Boş zamanlarımda bilgisayar oyunları oynamak ve futbol oynamak en
          sevdiğim aktiviteler arasında.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
