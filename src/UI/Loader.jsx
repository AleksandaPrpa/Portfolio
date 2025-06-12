import "../index.css";
import { theme } from "./ChangeThemeBtn";
function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent ">
      <div className="loader relative">
        <div className={`box1 border-4 absolute ${theme.border_color}`}></div>
        <div className={`box2 border-4 absolute ${theme.border_color}`}></div>
        <div className={`box3 border-4 absolute ${theme.border_color}`}></div>
      </div>
    </div>
  );
}

export default Loader;
