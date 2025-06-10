import { useState } from "react";
import { MdLightMode, MdNightlight } from "react-icons/md";
import { themes } from "../themes";
function ChangeThemeBtn() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  function handleChangeTheme() {
    if (theme === "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
      window.location.reload(true);
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
      window.location.reload(true);
    }
  }
  const className = `${
    localStorage.getItem("theme") === "dark"
      ? "hover:text-teal-400"
      : "hover:text-teal-700"
  } text-6xl my-0.5 md:text-4xl cursor-pointer `;
  return (
    <>
      {theme === "dark" ? (
        <MdLightMode onClick={handleChangeTheme} className={className} />
      ) : (
        <MdNightlight onClick={handleChangeTheme} className={className} />
      )}
    </>
  );
}

export default ChangeThemeBtn;

export const theme =
  localStorage.getItem("theme") === "dark" ? themes.dark : themes.light;
