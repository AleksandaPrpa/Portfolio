import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] overflow-x-hidden">
      {isLoading && <Loader />}

      <Header />

      <div className="md:overflow-y-scroll md:overflow-hidden w-screen bg-slate-900">
        <main className="w-full">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default AppLayout;
