import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { theme } from "../UI/ChangeThemeBtn";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  if (!theme) localStorage.setItem("theme", "dark");

  return (
    <div
      className={`${theme.bg} ${theme.text} grid h-screen grid-rows-[auto_1fr_auto] overflow-x-hidden`}
    >
      {isLoading && <Loader />}

      <NavBar />

      <main className="w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
