import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { theme } from "./ChangeThemeBtn";

function Error() {
  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${theme.bg_transition} ${theme.text} px-4`}
    >
      <motion.h1
        className={`text-[10rem] font-extrabold leading-none ${theme.accent}`}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        404
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl text-center max-w-md mt-4"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Oops! The page you're looking for doesn't exist or is lost in space and
        time.
      </motion.p>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <Link
          to="/"
          className={`inline-block ${theme.button} font-semibold py-3 px-6 rounded-xl shadow-lg transition hover:scale-110 duration-300`}
        >
          Return to Home
        </Link>
      </motion.div>
    </div>
  );
}

export default Error;
