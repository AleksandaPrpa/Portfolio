import { theme } from "../../UI/ChangeThemeBtn";
import Strong from "../../UI/Strong";
import { SiJetbrains } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaFigma } from "react-icons/fa6";

function ToolsIUse() {
  const editors = [
    { name: "VS Code", icon: <VscVscode /> },
    { name: "Rider", icon: <SiJetbrains /> },
    { name: "Figma", icon: <FaFigma /> },
  ];

  return (
    <div
      className={`${theme.bg_transition_reverse} ${theme.text} w-screen py-10 justify-center items-center flex flex-col`}
    >
      <h1 className="text-center text-4xl mb-10">
        <Strong>Tools</Strong> I use
      </h1>
      <div className="flex flex-wrap justify-center w-1/2 gap-8 px-4">
        {editors.map((editor) => (
          <div
            key={editor.name}
            className={`flex flex-col items-center md:w-40 text-7xl`}
          >
            <div
              className={` hover:scale-130 transition-transform duration-300 cursor-pointer hover:${theme.accent}`}
            >
              {editor.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToolsIUse;
