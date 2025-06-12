import ChangeThemeBtn, { theme } from "../UI/ChangeThemeBtn";
import Strong from "../UI/Strong";
import coding from "../Assets/coding4.svg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Home2() {
  return (
    <div
      className={`min-h-screen ${theme.bg_transition} md:px-60 md:pt-15 flex flex-col ${theme.text} border-t-1 ${theme.border_color} pt-3`}
    >
      <div className="flex md:flex-row flex-col md:gap-20">
        <div className="md:w-2/3 w-screen p-4 flex flex-col gap-6 md:gap-10 text-xl  md:text-xl">
          <h1 className="text-center text-5xl md:text-6xl">
            LET ME <Strong>INTRODUCE</Strong> MYSELF
          </h1>
          <p>
            I fell in love with programming and I have at least learnt
            something, I think…
          </p>
          <p>
            I am fluent in classics like{" "}
            <Strong>C, C++, C# and Javascript</Strong>.
          </p>
          <p>
            My field of interest includes building new{" "}
            <Strong>Web Technologies and Products</Strong>, and also in areas
            related to <Strong>Databases and Data Management</Strong>.
          </p>
          <p>
            Whenever possible, I also apply my passion for developing products
            with <Strong>Node.js</Strong> and{" "}
            <Strong>Modern Javascript Library and Frameworks</Strong> like
            <Strong>React.js</Strong>
          </p>
        </div>
        <div className="pt-4">
          <img src={coding} alt="coding" className="md:w-100 md:h-100" />
        </div>
      </div>
      <div className="flex flex-col items-center p-5 gap-5">
        <h1 className="text-3xl">
          <Strong>FIND ME ON</Strong>
        </h1>
        <p className="text-xl">Feel free to connect with me</p>
        <div className="flex gap-4 items-center">
          <a
            href="https://github.com/AleksandaPrpa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className={`text-3xl hover:${theme.accent} transition`} />
          </a>
          <a
            href="https://www.instagram.com/prpa___/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              className={`text-3xl hover:${theme.accent} transition`}
            />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              className={`text-3xl hover:${theme.accent} transition`}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home2;
