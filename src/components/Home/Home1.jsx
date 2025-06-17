import Type from "../../UI/Type";
import coding from "../../Assets/coding3.svg";
import Strong from "../../UI/Strong";
import { theme } from "../../UI/ChangeThemeBtn";

function Home1() {
  return (
    <div
      className={`min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-12 lg:px-32 pt-20 md:pt-40 ${theme.bg_transition} ${theme.text}`}
    >
      <div className="flex flex-col gap-6 text-center md:text-left md:w-1/2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Hi There! <span className="wave_hand">👋🏻</span>
        </h1>
        <h1 className="text-3xl md:text-5xl font-bold">
          I'M <Strong>ALEKSANDAR PRPA</Strong>
        </h1>
        <div className={`text-2xl md:text-3xl pt-2`}>
          <Type />
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <img
          src={coding}
          alt="coding"
          className="w-[80%] max-w-[400px] md:max-w-[500px]"
        />
      </div>
    </div>
  );
}

export default Home1;
