import ChangeThemeBtn, { theme } from "../UI/ChangeThemeBtn";
import Type from "../UI/Type";
import coding from "../Assets/coding3.svg";
import Strong from "../UI/Strong";
function Home1() {
  return (
    <div
      className={`md:p-60 md:pt-80 pt-35 px-8 flex md:flex-row flex-col gap-20 md:gap-0 ${theme.bg}`}
    >
      <div
        className={`flex flex-col md:w-2/3 gap-8 md:text-4xl text-3xl ${theme.text}`}
      >
        <h1>
          Hi There! <span className="wave_hand">👋🏻</span>
        </h1>
        <h1 className="md:text-5xl text-4xl">
          I'M <Strong>ALEKSANDAR PRPA</Strong>
        </h1>
        <div className={`py-5 md:text-4xl text-3xl h-7 ${theme.accent}`}>
          <Type />
        </div>
      </div>
      <div className="md:w-1/3">
        <img src={coding} alt="coding" className="md:w-90 md:h-90" />
      </div>
    </div>
  );
}

export default Home1;
