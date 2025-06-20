import React from "react";
import { BsGithub } from "react-icons/bs";

function ProjectCard({ imgPath, title, description, ghLink, isBlog }) {
  return (
    <div className="bg-slate-900 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <img
        src={imgPath}
        alt="Project Screenshot"
        className="w-full h-48 object-cover"
      />

      <div className="p-5 flex flex-col gap-4">
        <h3 className="text-white text-xl font-semibold">{title}</h3>
        <p className="text-gray-300 text-sm text-justify">{description}</p>

        <div className="flex gap-3 mt-2">
          <a
            href={ghLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
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
