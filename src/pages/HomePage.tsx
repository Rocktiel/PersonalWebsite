// // src/pages/HomePage.tsx
// import React from "react";
// import profileLogo from "../../public/profile.jpg"; // Profil resminizi assets klasörüne koyun
// import PersonalCard from "../components/PersonalCard";
// import { motion } from "framer-motion";
// const HomePage: React.FC = () => {
//   const socialLinks = [
//     { platform: "github", link: "https://github.com/seymentsami" }, // Kendi GitHub adresiniz
//     { platform: "linkedin", link: "https://linkedin.com/in/seymentsami" }, // Kendi LinkedIn adresiniz
//     { platform: "twitter", link: "https://twitter.com/seymentsami" }, // Kendi Twitter/X adresiniz
//     { platform: "instagram", link: "https://instagram.com/seymentsami" }, // Kendi Instagram adresiniz
//     { platform: "email", link: "mailto:info@seymentsami.com" }, // Kendi e-posta adresiniz
//   ];

//   const skills = [
//     "React",
//     "TypeScript",
//     "JavaScript",
//     "Node.js",
//     "Express.js",
//     "MongoDB",
//     "PostgreSQL",
//     "HTML5",
//     "CSS3",
//     "Tailwind CSS",
//     "Git",
//     "RESTful APIs",
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-12 bg-gray-900 text-white min-h-screen">
//       {/* Sol Taraftaki Hoş Geldiniz Mesajı */}
//       <div className="w-full flex flex-col items-left justify-center text-center md:text-left p-10 md:p-12 md:items-end md:text-right p-4 md:p-0">
//         <h1
//           className="text-6xl md:text-7xl font-extrabold text-indigo-500 mb-6
//                    dark:text-indigo-400"
//         >
//           Sami Çakaloğlu
//         </h1>
//         {/* Buraya isterseniz kısa bir giriş metni de ekleyebilirsiniz */}
//         <p className="text-xl md:text-2xl text-gray-300 dark:text-gray-400">
//           Web Geliştirici
//         </p>
//       </div>

//       {/* Sağ Taraftaki Profil Resmi */}
//       <div
//         className="w-full p-10 md:p-12 text-center
//              flex flex-col items-left justify-center
//              "
//       >
//         {" "}
//         {/* Light mod için varsayılan */}
//         <img
//           src={profileLogo} // Kendi profil resminizin yolu, public klasörüne koyun
//           alt={""}
//           className="w-80 h-80 rounded-full object-cover mb-6 border-4 border-indigo-500 shadow-xl hover:scale-105 transition-transform duration-300"
//         />
//       </div>
//     </div>
//   );
// };

// export default HomePage;
// src/pages/HomePage.tsx

import { motion, type Variants } from "framer-motion";
import profileLogo from "../../public/profile.jpg"; // Profil resminizi assets klasörüne koyun

// // Yeni Bölümler İçin Bileşenler (Basit Tutuyorum, Dilerseniz Detaylandırabilirsiniz)
// const BlogSection: React.FC = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.3 }); // Sadece bir kez tetikle ve %30'u görünür olunca

//   const variants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   const blogPosts = [
//     {
//       title: "React State Yönetimi",
//       snippet:
//         "React uygulamalarında state yönetimini derinlemesine inceleyin...",
//       link: "#",
//     },
//     {
//       title: "Tailwind CSS ile Hızlı Geliştirme",
//       snippet: "Modern arayüzler tasarlarken Tailwind CSS'in gücü...",
//       link: "#",
//     },
//     {
//       title: "Node.js ile REST API Geliştirme",
//       snippet: "Backend projelerinizde Node.js ve Express kullanımı...",
//       link: "#",
//     },
//   ];

//   return (
//     <motion.section
//       ref={ref}
//       className="max-w-5xl mx-auto p-8 my-16 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 text-white text-center"
//       initial="hidden"
//       animate={isInView ? "visible" : "hidden"}
//       variants={variants}
//     >
//       <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-500 mb-8">
//         Yazılarım
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {blogPosts.map((post, index) => (
//           <a
//             key={index}
//             href={post.link}
//             className="block p-6 bg-gray-700 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 transform border border-gray-600 hover:border-indigo-500 text-left"
//           >
//             <h3 className="text-xl font-bold text-indigo-400 mb-2">
//               {post.title}
//             </h3>
//             <p className="text-gray-300 text-sm">{post.snippet}</p>
//             <span className="text-indigo-300 hover:text-indigo-200 mt-3 block text-sm">
//               Devamını Oku &rarr;
//             </span>
//           </a>
//         ))}
//       </div>
//       <a
//         href="/blog"
//         className="mt-8 inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300"
//       >
//         Tüm Yazılarımı Gör
//       </a>
//     </motion.section>
//   );
// };

// const ExperienceSection: React.FC = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.3 }); // Sadece bir kez tetikle ve %30'u görünür olunca

//   const variants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   const experiences = [
//     {
//       title: "Kıdemli Web Geliştirici",
//       company: "Tech Solutions A.Ş.",
//       duration: "Haziran 2022 - Devam Ediyor",
//       description:
//         "Büyük ölçekli web uygulamalarının geliştirilmesi ve bakımında lider rol üstlendim. React, Node.js ve bulut teknolojilerini kullandım.",
//     },
//     {
//       title: "Junior Yazılım Geliştirici",
//       company: "Yenilikçi Yazılım Ltd.",
//       duration: "Eylül 2020 - Mayıs 2022",
//       description:
//         "Frontend ve backend geliştirme süreçlerinde yer aldım. Ekiple birlikte yeni özellikler geliştirdim ve test süreçlerine katkıda bulundum.",
//     },
//   ];

//   return (
//     <motion.section
//       ref={ref}
//       className="max-w-5xl mx-auto p-8 my-16 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 text-white text-center"
//       initial="hidden"
//       animate={isInView ? "visible" : "hidden"}
//       variants={variants}
//     >
//       <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-500 mb-8">
//         İş Tecrübelerim
//       </h2>
//       <div className="space-y-8">
//         {experiences.map((exp, index) => (
//           <div
//             key={index}
//             className="text-left bg-gray-700 p-6 rounded-lg shadow-md border border-gray-600"
//           >
//             <h3 className="text-2xl font-bold text-indigo-400 mb-1">
//               {exp.title}
//             </h3>
//             <p className="text-lg text-gray-300 mb-1">
//               {exp.company} | {exp.duration}
//             </p>
//             <p className="text-gray-400">{exp.description}</p>
//           </div>
//         ))}
//       </div>
//       <a
//         href="/resume"
//         className="mt-8 inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300"
//       >
//         Tüm CV'mi İncele
//       </a>
//     </motion.section>
//   );
// };

// const HomePage: React.FC = () => {
//   // İlk bölümdeki yazı ve resim animasyonları (mevcut halleri)
//   const textVariants = {
//     hidden: { opacity: 0, x: -100 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   const imageVariants = {
//     hidden: { opacity: 0, x: 100 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   const sentenceVariants = {
//     hidden: { opacity: 0, x: -50 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <div className="bg-gray-900 text-white">
//       {" "}
//       {/* Ana arkaplan ve metin rengi */}
//       {/* Giriş Bölümü */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-12 lg:p-20 min-h-screen">
//         {/* Sol Taraftaki Yazılar */}
//         <motion.div
//           className="col-span-1 w-full flex flex-col items-center justify-center text-center md:items-end md:text-right md:pr-10"
//           initial="hidden"
//           animate="visible"
//           variants={textVariants}
//         >
//           <motion.h1
//             className="text-6xl md:text-7xl font-extrabold text-indigo-500 mb-4 md:mb-6
//                          dark:text-indigo-400"
//             variants={sentenceVariants}
//           >
//             Sami Çakaloğlu
//           </motion.h1>
//           <motion.p
//             className="text-xl md:text-3xl text-gray-300 dark:text-gray-400"
//             variants={sentenceVariants}
//             transition={{ delay: 0.2 }}
//           >
//             Web Geliştirici
//           </motion.p>
//           <motion.p
//             className="mt-4 text-lg md:text-xl text-gray-400 dark:text-gray-500 max-w-lg"
//             variants={sentenceVariants}
//             transition={{ delay: 0.4 }}
//           >
//             Kullanıcı dostu ve performanslı web uygulamaları geliştirmeye
//             odaklanmış bir web geliştiricisiyim.
//           </motion.p>
//         </motion.div>

//         {/* Sağ Taraftaki Profil Resmi */}
//         <motion.div
//           className="col-span-1 w-full flex flex-col items-center justify-center md:pl-10"
//           initial="hidden"
//           animate="visible"
//           variants={imageVariants}
//         >
//           <img
//             src={profileLogo}
//             alt={"Sami Çakaloğlu Profile"}
//             className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-indigo-500 shadow-xl hover:scale-105 transition-transform duration-300"
//           />
//         </motion.div>
//       </div>
//       {/* Hakkımda Bölümü (Mevcut PersonalCard'ı kullanabilirsiniz) */}
//       <div className="py-12">
//         {/* HomePage.tsx'teki PersonalCard'ı buraya taşıyabiliriz, veya AboutPage'i render edebiliriz.
//               Şimdilik PersonalCard'ı doğrudan buraya alalım, ancak ideal olarak AboutPage'e yönlendirmek daha iyidir.
//               Eğer AboutPage'e yönlendirecekseniz, aşağıdaki div yerine <AboutPage /> kullanın ve App.tsx'teki rotayı ayarlayın.
//           */}
//         <div className="flex justify-center items-center">
//           {/* HomePage'de tanımlanan socialLinks ve skills kullanılabilir */}
//           {/* <PersonalCard ...props /> */}
//         </div>
//       </div>
//       {/* Yazılarım Bölümü */}
//       <BlogSection />
//       {/* İş Tecrübelerim Bölümü */}
//       <ExperienceSection />
//       {/* Ek Bilgiler Bölümü (İsteğe bağlı) */}
//       <motion.section
//         className="max-w-4xl mx-auto p-8 my-16 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 text-white text-center"
//         initial="hidden"
//         whileInView="visible" // Görünüme girdiğinde animasyonu tetikle
//         viewport={{ once: true, amount: 0.4 }} // %40'ı görünür olunca tetikle
//         variants={{
//           hidden: { opacity: 0, scale: 0.9 },
//           visible: {
//             opacity: 1,
//             scale: 1,
//             transition: { duration: 0.8, ease: "easeOut" },
//           },
//         }}
//       >
//         <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-500 mb-8">
//           İlgi Alanlarım
//         </h2>
//         <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
//           Kodlamanın yanı sıra, yeni teknolojileri keşfetmekten, bilim kurgu
//           kitapları okumaktan ve doğa yürüyüşleri yapmaktan keyif alırım.
//         </p>
//       </motion.section>
//     </div>
//   );
// };

// export default HomePage;
// Animasyon varyantları (Genel olarak kullanılacak)
const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// BlogSection bileşeni
const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      title: "Yazı Başlığı",
      snippet: "İçerik.",
      link: "#",
    },
    // {
    //   title: "Tailwind CSS ile Hızlı Geliştirme",
    //   snippet: "Modern arayüzler tasarlarken Tailwind CSS'in gücü...",
    //   link: "#",
    // },
    // {
    //   title: "Node.js ile REST API Geliştirme",
    //   snippet: "Backend projelerinizde Node.js ve Express kullanımı...",
    //   link: "#",
    // },
  ];

  return (
    <motion.section
      className="max-w-5xl mx-auto p-8 my-16 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 text-white text-center"
      initial="hidden"
      whileInView="visible" // Görünüme girdiğinde 'visible' durumuna geçer
      viewport={{ once: false, amount: 0.3 }} // %30'u görünür olunca tetikler, her zaman tekrar oynatır
      variants={slideInLeft} // Soldan gelme animasyonu
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-500 mb-8">
        Yazılarım
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <a
            key={index}
            href={post.link}
            className="block p-6 bg-gray-700 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 transform border border-gray-600 hover:border-indigo-500 text-left"
          >
            <h3 className="text-xl font-bold text-indigo-400 mb-2">
              {post.title}
            </h3>
            <p className="text-gray-300 text-sm">{post.snippet}</p>
            <span className="text-indigo-300 hover:text-indigo-200 mt-3 block text-sm">
              Devamını Oku &rarr;
            </span>
          </a>
        ))}
      </div>
      <a
        href="/blog"
        className="mt-8 inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300"
      >
        Tüm Yazılarımı Gör
      </a>
    </motion.section>
  );
};

// ExperienceSection bileşeni
const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: "Başlık",
      company: "Şirket",
      duration: "Süre",
      description: "Açıklama",
    },
    // {
    //   title: "Kıdemli Web Geliştirici",
    //   company: "Tech Solutions A.Ş.",
    //   duration: "Haziran 2022 - Devam Ediyor",
    //   description:
    //     "Büyük ölçekli web uygulamalarının geliştirilmesi ve bakımında lider rol üstlendim. React, Node.js ve bulut teknolojilerini kullandım.",
    // },
    // {
    //   title: "Junior Yazılım Geliştirici",
    //   company: "Yenilikçi Yazılım Ltd.",
    //   duration: "Eylül 2020 - Mayıs 2022",
    //   description:
    //     "Frontend ve backend geliştirme süreçlerinde yer aldım. Ekiple birlikte yeni özellikler geliştirdim ve test süreçlerine katkıda bulundum.",
    // },
  ];

  return (
    <motion.section
      className="max-w-5xl mx-auto p-8 my-16 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 text-white text-center"
      initial="hidden"
      whileInView="visible" // Görünüme girdiğinde 'visible' durumuna geçer
      viewport={{ once: false, amount: 0.3 }} // %30'u görünür olunca tetikler, her zaman tekrar oynatır
      variants={slideInRight} // Sağdan gelme animasyonu
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-500 mb-8">
        İş Tecrübelerim
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="text-left bg-gray-700 p-6 rounded-lg shadow-md border border-gray-600"
          >
            <h3 className="text-2xl font-bold text-indigo-400 mb-1">
              {exp.title}
            </h3>
            <p className="text-lg text-gray-300 mb-1">
              {exp.company} | {exp.duration}
            </p>
            <p className="text-gray-400">{exp.description}</p>
          </div>
        ))}
      </div>
      <a
        href="/resume"
        className="mt-8 inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300"
      >
        Tüm CV'mi İncele
      </a>
    </motion.section>
  );
};

// İlgi Alanlarım bileşeni
const InterestsSection: React.FC = () => {
  return (
    <motion.section
      className="max-w-4xl mx-auto p-8 my-16 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 text-white text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
      variants={fadeIn} // Örneğin alttan yukarıya fade in animasyonu
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-500 mb-8">
        İlgi Alanlarım
      </h2>
      <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
        Kodlamanın yanı sıra, yeni teknolojileri keşfetmekten, bilim kurgu
        kitapları okumaktan ve doğa yürüyüşleri yapmaktan keyif alırım.
      </p>
    </motion.section>
  );
};

const HomePage: React.FC = () => {
  // Giriş bölümündeki yazı ve resim animasyonları (İlk yüklendiğinde çalışacak)
  const textVariants: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const sentenceVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-gray-900 text-white">
      {/* Giriş Bölümü */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-1 md:p-12 lg:p-20 min-h-screen">
        {/* Sol Taraftaki Yazılar */}
        <motion.div
          className="col-span-1 w-full flex flex-col items-center justify-center text-center md:items-end md:text-right md:pr-10"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <motion.h1
            className="text-6xl md:text-7xl font-extrabold text-indigo-500 mb-4 md:mb-6
                       dark:text-indigo-400"
            variants={sentenceVariants}
          >
            Sami Çakaloğlu
          </motion.h1>
          <motion.p
            className="text-xl md:text-3xl text-gray-300 dark:text-gray-400"
            variants={sentenceVariants}
            transition={{ delay: 0.2 }}
          >
            Bilgisayar Mühendisi
          </motion.p>
        </motion.div>

        {/* Sağ Taraftaki Profil Resmi */}
        <motion.div
          className="col-span-1 w-full flex flex-col items-center justify-center md:pl-10"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img
            src={profileLogo}
            alt={"Sami Çakaloğlu Profile"}
            className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-indigo-500 shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>

      {/* Yazılarım Bölümü */}
      <BlogSection />

      {/* İş Tecrübelerim Bölümü */}
      <ExperienceSection />

      {/* İlgi Alanlarım Bölümü */}
      <InterestsSection />

      {/* Hakkımda Bölümü (Burayı PersonalCard veya ayrı bir About bileşeni olarak düşünebilirsiniz) */}
      {/* Eğer burada PersonalCard bileşenini göstermek istiyorsanız: */}
      {/* <div className="flex justify-center items-center py-12">
            <PersonalCard
              name="Seymen Sami"
              title="Web Geliştirici"
              bio="Merhaba! Ben Seymen Sami..."
              profileImage="/profile.jpg"
              socialLinks={[...]}
              skills={[...]}
            />
          </div> */}
    </div>
  );
};

export default HomePage;
