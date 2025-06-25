// src/components/PersonalCard.tsx
import React from "react";
import SocialIcon from "./SocialIcon";

interface PersonalCardProps {
  name: string;
  title: string;
  bio: string;
  profileImage: string;
  socialLinks: {
    platform: "github" | "linkedin" | "twitter" | "instagram" | "email";
    link: string;
  }[];
  skills?: string[]; // Beceri listesi (isteğe bağlı)
}

const PersonalCard: React.FC<PersonalCardProps> = ({
  name,
  title,
  bio,
  profileImage,
  socialLinks,
  skills,
}) => {
  return (
    <div className="max-w-3xl w-full p-10 md:p-12 bg-gray-800 rounded-2xl shadow-2xl text-center flex flex-col items-center border border-gray-700 dark:bg-gray-900 dark:border-white dark:text-800">
      {/* Profil Resmi */}
      <img
        src={profileImage}
        alt={`${name} Profile`}
        className="w-40 h-40 rounded-full object-cover mb-6 border-4 border-indigo-500 shadow-xl hover:scale-105 transition-transform duration-300"
      />

      {/* İsim */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-500 mb-2 leading-tight tracking-tight dark:text-white">
        {name}
      </h1>

      {/* Unvan */}
      <p className="text-2xl md:text-3xl text-gray-400 font-light mb-8 dark:text-white">
        {title}
      </p>

      {/* Biyografi */}
      <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-10">
        {bio}
      </p>

      {/* Sosyal Medya Bağlantıları */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {socialLinks.map((social, index) => (
          <SocialIcon
            key={index}
            platform={social.platform}
            link={social.link}
          />
        ))}
      </div>

      {/* Beceriler (isteğe bağlı) */}
      {skills && skills.length > 0 && (
        <>
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-500 mb-6 mt-4">
            Becerilerim
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-xl mb-6">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-sm font-semibold hover:bg-indigo-600 transition-colors duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PersonalCard;
