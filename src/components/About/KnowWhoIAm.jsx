import { theme } from "../../UI/ChangeThemeBtn";
import { FaLongArrowAltRight } from "react-icons/fa";
import Strong from "../../UI/Strong";
import coding from "../../Assets/coding3.svg";

function KnowWhoIAm() {
  return (
    <div
      className={`flex flex-col md:flex-row items-center w-screen min-h-screen gap-10 md:gap-20  md:px-16 lg:px-32 py-12 ${theme.bg_transition} ${theme.text} text-base sm:text-lg md:text-xl`}
    >
      <div className="flex flex-col gap-5 w-screen md:w-2/3 px-8 md:px-0 pt-20 md:pt-0">
        <h1 className="text-center text-3xl">
          Know Who <Strong>I'M</Strong>
        </h1>

        <div className="flex flex-col gap-2">
          <p>
            Hi Everyone, I am <Strong>Aleksandar Prpa</Strong> from{" "}
            <Strong>Paraćin, Serbia</Strong>.
          </p>
          <p>
            I finished high school with a specialization in Information
            Technology, and I am currently pursuing my university studies.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p>Apart from coding, some other activities that I love to do:</p>
          <ul>
            <li className="flex gap-3 items-center">
              <FaLongArrowAltRight /> Playing Games
            </li>
            <li className="flex gap-3 items-center">
              <FaLongArrowAltRight /> Traveling
            </li>
            <li className="flex gap-3 items-center">
              <FaLongArrowAltRight /> Playing Sports
            </li>
          </ul>
        </div>

        <div
          className={`${theme.quote} italic text-center text-lg md:text-2xl`}
        >
          <p>“Code is like humor. When you have to explain it, it’s bad.”</p>
          <p>— Cory House</p>
        </div>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/3 flex justify-center">
        <img
          src={coding}
          alt="coding"
          className="max-w-[250px] sm:max-w-[300px] md:max-w-full h-auto"
        />
      </div>
    </div>
  );
}

export default KnowWhoIAm;
