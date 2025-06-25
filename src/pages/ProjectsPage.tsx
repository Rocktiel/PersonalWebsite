// src/pages/ProjectsPage.tsx
import React from "react";

interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  techStack,
  link,
}) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 transform border border-gray-600 hover:border-indigo-500"
  >
    <h3 className="text-2xl font-bold text-indigo-400 mb-3">{title}</h3>
    <p className="text-gray-300 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {techStack.map((tech, index) => (
        <span
          key={index}
          className="bg-gray-600 text-gray-200 text-xs px-3 py-1 rounded-full"
        >
          {tech}
        </span>
      ))}
    </div>
    <span className="text-indigo-300 hover:text-indigo-200 flex items-center justify-end text-sm">
      Detayları Gör
      <svg
        className="w-4 h-4 ml-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        ></path>
      </svg>
    </span>
  </a>
);

const ProjectsPage: React.FC = () => {
  const projects: ProjectProps[] = [
    {
      title: "Proje Başlığı",
      description: "Proje Açıklaması",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe"],
      link: "Proje Linki", // Kendi proje linkiniz
    },
    // {
    //   title: "E-Ticaret Platformu",
    //   description:
    //     "Müşterilerin ürünleri keşfedip satın alabileceği tam özellikli bir e-ticaret çözümü.",
    //   techStack: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe"],
    //   link: "https://github.com/seymentsami/ecommerce-project", // Kendi proje linkiniz
    // },
    // {
    //   title: "Görev Yönetim Uygulaması",
    //   description:
    //     "Kullanıcıların görevlerini eklemesine, düzenlemesine ve takip etmesine olanak tanıyan bir uygulama.",
    //   techStack: ["Vue.js", "TypeScript", "Firebase", "Tailwind CSS"],
    //   link: "https://github.com/seymentsami/todo-app", // Kendi proje linkiniz
    // },
    // {
    //   title: "Blog Uygulaması",
    //   description:
    //     "Yazarların makale yayınlayabileceği ve okuyucuların yorum yapabileceği dinamik bir blog platformu.",
    //   techStack: ["Next.js", "GraphQL", "PostgreSQL", "Apollo Client"],
    //   link: "https://github.com/seymentsami/blog-platform", // Kendi proje linkiniz
    // },
    // Daha fazla proje ekleyebilirsiniz
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] p-6 md:p-12 text-white">
      <div className="max-w-5xl w-full bg-gray-800 rounded-2xl shadow-2xl p-10 md:p-12 border border-gray-700 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-500 mb-10">
          Projelerim
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        {projects.length === 0 && (
          <p className="text-gray-400 text-lg">
            Henüz gösterilecek bir proje yok. Yakında eklenecek!
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
