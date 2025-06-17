import { theme } from "../../UI/ChangeThemeBtn";
import { FaLongArrowAltRight } from "react-icons/fa";
import Strong from "../../UI/Strong";
import coding from "../../Assets/coding5.svg";

function KnowWhoIAm() {
  return (
    <div
      className={`flex flex-col w-screen min-h-screen md:flex-row gap-20 ${theme.bg_transition} ${theme.text} text-xl pt-50 px-40`}
    >
      <div className="flex flex-col gap-5 md:w-2/3">
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
            <li className="flex gap-4 items-center">
              <FaLongArrowAltRight /> Playing Games
            </li>
            <li className="flex gap-4 items-center">
              <FaLongArrowAltRight /> Traveling
            </li>
            <li className="flex gap-4 items-center">
              <FaLongArrowAltRight /> Playing Sports
            </li>
          </ul>
        </div>
        <div className={`${theme.quote} italic text-center`}>
          <p>“Code is like humor. When you have to explain it, it’s bad.”</p>
          <p> — Cory House</p>
        </div>
      </div>
      <div className="md:1/3">
        <img src={coding} alt="coding" className="w-100 h-100" />
      </div>
    </div>
  );
}

export default KnowWhoIAm;
