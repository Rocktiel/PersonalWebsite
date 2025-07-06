import { motion, type Variants } from "framer-motion";
import profileLogo from "/profile.jpg";
import Blogs from "../components/Blogs";
import Experiences from "../components/Experiences";

const HomePage: React.FC = () => {
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
    <div className="overflow-x-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-1 md:p-12 lg:p-20 min-h-[200px]">
        <motion.div
          className="col-span-1 w-full flex flex-col items-center mt-40 text-center md:items-end md:text-right md:pr-10"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <motion.h1
            className="text-6xl md:text-7xl font-extrabold text-neutral-900 mb-4 md:mb-6
                       dark:text-neutral-0"
            variants={sentenceVariants}
          >
            Sami Çakaloğlu
          </motion.h1>
          <motion.p
            className="text-xl md:text-3xl text-neutral-600 dark:text-neutral-300"
            variants={sentenceVariants}
            transition={{ delay: 0.2 }}
          >
            Bilgisayar Mühendisi
          </motion.p>
        </motion.div>

        <motion.div
          className="col-span-1 w-full flex flex-col items-center mt-20 md:pl-10"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img
            src={profileLogo}
            alt={"Sami Çakaloğlu Profile"}
            className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-neutral-900
            dark:border-neutral-0 shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>

      <Blogs />

      <Experiences />
    </div>
  );
};

export default HomePage;
