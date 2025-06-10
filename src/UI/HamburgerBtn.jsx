import React from "react";
import "../index.css";
function HamburgerBtn({ expanded, setExpanded }) {
  function handleExpanded() {
    setExpanded(!expanded);
  }
  return (
    <div className="rounded-2xl border border-[#1a1a1a] bg-white mix-blend-luminosity shadow-[0_0_0_1px_rgba(0,0,0,0.2)] backdrop-blur-lg w-16 h-16 flex justify-center items-center">
      <button
        onClick={handleExpanded}
        className={`${
          expanded ? "menu__icon_after_click" : "menu__icon"
        } w-8 h-8 p-1`}
      >
        <span className="block w-full h-[2px] rounded-sm bg-neutral-900 shadow-[0_0.5px_2px_0_rgba(0,0,0,0.2)] transition-colors duration-500 relative" />
        <span className="block w-full h-[2px] rounded-sm bg-neutral-900 shadow-[0_0.5px_2px_0_rgba(0,0,0,0.2)] transition-colors duration-500 relative mt-1.5" />
        <span className="block w-full h-[2px] rounded-sm bg-neutral-900 shadow-[0_0.5px_2px_0_rgba(0,0,0,0.2)] transition-colors duration-500 relative mt-1.5" />
      </button>
    </div>
  );
}

export default HamburgerBtn;
