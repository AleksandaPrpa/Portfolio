import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import HamburgerBtn from "./HamburgerBtn";
import { useWindowWidth } from "../utils/helpers";
import ChangeThemeBtn, { theme } from "./ChangeThemeBtn";

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const width = useWindowWidth();

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ease-in-out text-xl ${theme.bg} ${theme.shadow}
      `}
    >
      {/* Top nav bar */}
      <div
        className={`flex ${
          width < 768 ? "h-auto flex-col" : "flex-row"
        } justify-between items-center px-4 py-3 md:px-8`}
      >
        <div className="flex flex-rows justify-between w-screen align-middles justify-items-center h-auto p-2">
          <Link to="/" className="text-white font-bold text-2xl p-2 w-1/2">
            AP
          </Link>
          {width < 768 && (
            <div className="flex flex-row pr-2 justify-end gap-4 w-2/4">
              <ChangeThemeBtn />
              <HamburgerBtn expanded={expanded} setExpanded={setExpanded} />
            </div>
          )}
        </div>
        {/* Hamburger */}
        {width < 768 ? (
          <div
            className={`w-screen transition-all duration-300  ease-in-out ${
              expanded ? "expanded_menu" : "hidden_menu"
            }`}
          >
            {expanded && (
              <ul className="flex flex-col items-center w-screen px-4 md:p-0 rounded-md  shadow-lg ">
                {[
                  { id: 1, to: "/", icon: <AiOutlineHome />, label: "Home" },
                  {
                    id: 2,
                    to: "/about",
                    icon: <AiOutlineUser />,
                    label: "About",
                  },
                  {
                    id: 3,
                    to: "/projects",
                    icon: <AiOutlineFundProjectionScreen />,
                    label: "Projects",
                  },
                ].map(({ to, icon, label, id }) => (
                  <li
                    key={label}
                    className={`${
                      expanded ? "menu_item_visible " : "menu_item_hidden"
                    } w-screen md:w-auto text-center`}
                  >
                    <Link
                      to={to}
                      onClick={() => setExpanded(false)}
                      className={`flex items-center justify-center py-3 gap-1 transition-colors duration-200 border-b-1 ${
                        theme.border_color
                      } ${
                        localStorage.getItem("theme") === "dark"
                          ? "hover:text-teal-400"
                          : "hover:text-teal-700"
                      } ${id % 2 === 0 ? theme.bg : theme.bg_sec}`}
                    >
                      {icon} {label}
                    </Link>
                  </li>
                ))}

                <li
                  className={`${
                    theme.bg
                  } w-screen md:w-auto text-center flex items-center justify-center py-3 transition-colors duration-200 border-b-1 ${
                    theme.border_color
                  } ${expanded ? "menu_item_visible " : "menu_item_hidden"}`}
                >
                  <a
                    href="https://github.com/AleksandaPrpa"
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center justify-center gap-1 px-3 py-1 border rounded-full transition-colors duration-200  ${
                      localStorage.getItem("theme") === "dark"
                        ? "hover:text-teal-400"
                        : "hover:text-teal-700"
                    } ${theme.bg}`}
                  >
                    <CgGitFork />
                    <AiFillStar />
                  </a>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <div>
            <ul className="flex flex-col md:flex-row items-center gap-6 px-4 pb-4 md:p-0 bg-[rgba(0,0,0,0.7)] md:bg-transparent rounded-md md:rounded-none shadow-lg md:shadow-none w-full md:w-auto">
              {[
                { to: "/", icon: <AiOutlineHome />, label: "Home" },
                { to: "/about", icon: <AiOutlineUser />, label: "About" },
                {
                  to: "/projects",
                  icon: <AiOutlineFundProjectionScreen />,
                  label: "Projects",
                },
              ].map(({ to, icon, label }) => (
                <li key={label} className="w-full md:w-auto text-center">
                  <Link
                    to={to}
                    onClick={() => setExpanded(false)}
                    className={`flex items-center justify-center gap-1 transition-colors duration-200 ${
                      localStorage.getItem("theme") === "dark"
                        ? "hover:text-teal-400"
                        : "hover:text-teal-700"
                    }`}
                  >
                    {icon} {label}
                  </Link>
                </li>
              ))}

              <li className="w-full md:w-auto text-center">
                <a
                  href="https://github.com/AleksandaPrpa"
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center justify-center gap-1 px-3 py-1 border rounded-full transition-colors duration-200 ${
                    localStorage.getItem("theme") === "dark"
                      ? "hover:text-teal-400"
                      : "hover:text-teal-700"
                  }`}
                >
                  <CgGitFork />
                  <AiFillStar />
                </a>
              </li>
              <ChangeThemeBtn />
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
