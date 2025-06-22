import React from "react";
import { BsGithub } from "react-icons/bs";
import { theme } from "../../UI/ChangeThemeBtn";
import Strong from "../../UI/Strong";

function ProjectCard({ title, description, ghLink, isBlog, children }) {
  return (
    <div
      className={`rounded-2xl shadow-lg ${theme.shadow} overflow-hidden transition-transform cursor-pointer hover:scale-[1.05] duration-300 ${theme.bg_sec} ${theme.text} md:w-90 w-screen rounded-xl`}
    >
      {children}

      <div className="px-4 pb-5 flex flex-col gap-4 items-center">
        <h3 className={`text-2xl`}>
          <Strong>{title}</Strong>
        </h3>
        <p className="text-md text-justify">{description}</p>

        <div className="flex gap-3 mt-2">
          <a
            href={ghLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded transition ${theme.button}`}
          >
            <BsGithub />
            {isBlog ? "Blog" : "GitHub"}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
