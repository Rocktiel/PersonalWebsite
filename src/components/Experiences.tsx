import { motion, type Variants } from "framer-motion";
export default function Experiences() {
  const experiences = [
    // {
    //   title: "Başlık",
    //   company: "Şirket",
    //   duration: "Süre",
    //   description: "Açıklama",
    // },
    {
      title: "Stajyer Yazılım Geliştirici",
      company: "BOLTAS A.Ş.",
      duration: "Ağustos 2023 - Eylül 2023",
      description:
        " C# ile backend geliştirme süreçlerine dair pratik deneyim kazandım. Microsoft SQL Server kullanarak veri tabanı yönetimi ve sorgulama konularında bilgi sahibi oldum.",
    },
    {
      title: "Stajyer Yazılım Geliştirici",
      company: "Tein Teknoloji A.Ş.",
      duration: "Ağustos 2024 - Eylül 2024",
      description:
        " React Native, NodeJS ve PostgreSQL kullanarak yürütülen aktif bir mobil geliştirme projesinde yer aldım.",
    },
  ];
  const slideInRight: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  return (
    <motion.section
      className="max-w-96 md:max-w-3xl lg:max-w-4xl mx-auto p-8 my-16 bg-neutral-0 dark:bg-neutral-800 rounded-2xl shadow-2xl border border-gray-700 text-white text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={slideInRight}
    >
      <h2 className="text-3xl md:text-5xl font-extrabold text-indigo-500 mb-8">
        İş Tecrübelerim
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="text-left bg-neutral-700 p-6 rounded-lg shadow-md border border-gray-600"
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
        href="/CV.pdf"
        download="CV.pdf"
        className="mt-8 inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300"
      >
        CV'mi İndir
      </a>
    </motion.section>
  );
}
