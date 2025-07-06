import { motion, type Variants } from "framer-motion";
export default function Blogs() {
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

  const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -100 },
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
      variants={slideInLeft}
    >
      <h2 className="text-3xl md:text-5xl font-extrabold text-indigo-500 mb-8">
        Yazılarım
      </h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <a
            key={index}
            href={post.link}
            className="block p-6 bg-neutral-700 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 transform border border-gray-600 hover:border-indigo-500 text-left"
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
}
