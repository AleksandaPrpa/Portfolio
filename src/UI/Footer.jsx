import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { theme } from "./ChangeThemeBtn";

function Footer() {
  return (
    <footer className={`${theme.bg} ${theme.text} py-6`}>
      <div className=" mx-auto px-4 flex flex-col md:flex-row justify-center gap-5 items-center text-md">
        <p>
          &copy; {new Date().getFullYear()} Aleksandar Prpa. All rights
          reserved.
        </p>
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
    </footer>
  );
}

export default Footer;
