import { theme } from "../../UI/ChangeThemeBtn";
import Strong from "../../UI/Strong";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiC, SiCplusplus, SiUnity, SiMysql } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaNode } from "react-icons/fa6";

function ProfessionalSkillset() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNode /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "SQL", icon: <SiMysql /> },
    { name: "C", icon: <SiC /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "C#", icon: <TbBrandCSharp /> },
    { name: "Unity", icon: <SiUnity /> },
  ];

  return (
    <div
      className={`${theme.bg_sec} ${theme.text} w-screen py-10 justify-center items-center flex flex-col`}
    >
      <h1 className="text-center text-4xl mb-10">
        Professional <Strong>Skillset</Strong>
      </h1>
      <div className="flex flex-wrap justify-center  md:w-screen lg:w-3/4 xl:w-1/2 w-screen gap-10 md:gap-8 px-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`flex flex-col items-center md:w-40 text-7xl`}
          >
            <div
              className={` hover:scale-130 transition-transform duration-300 cursor-pointer hover:${theme.accent}`}
            >
              {skill.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfessionalSkillset;
