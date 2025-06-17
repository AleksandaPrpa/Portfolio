import Strong from "../../UI/Strong";
import coding from "../../Assets/coding4.svg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { theme } from "../../UI/ChangeThemeBtn";

function Home2() {
  return (
    <div
      className={`min-h-screen ${theme.bg_transition_reverse} px-6 md:px-12 lg:px-32 py-8 flex flex-col ${theme.text} `}
    >
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-2/3 flex flex-col gap-6 text-lg lg:text-xl">
          <h1 className="text-center lg:text-left text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
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
            <Strong>Modern Javascript Library and Frameworks</Strong> like{" "}
            <Strong>React.js</Strong>.
          </p>
        </div>

        <div className="w-full lg:w-1/3 flex justify-center">
          <img
            src={coding}
            alt="coding"
            className="w-[80%] max-w-[400px] md:max-w-[500px] h-auto"
          />
        </div>
      </div>

      <div className="flex flex-col items-center p-5 gap-4 mt-14">
        <h2 className="text-2xl md:text-3xl text-center">
          <Strong>FIND ME ON</Strong>
        </h2>
        <p className="text-lg md:text-xl text-center">
          Feel free to connect with me
        </p>
        <div className="flex gap-6 mt-2">
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
