import React, { useState, lazy } from "react";
import { TiWeatherSunny } from "react-icons/ti";
import { HiMoon } from "react-icons/hi";

const ProfileBar = lazy(() => import("./ProfileBar"));
const Footer = lazy(() => import("./Footer"));
const Navbar = lazy(() => import("./Navbar"));

const Layout = ({ children }) => {
  const [changeView, setchangeView] = useState("");
  const changeMode = () => {
    setchangeView(!changeView);
    if (changeView) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  };
  if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <>
      <section id="container-all" className={` dark:text-white text-black container mx-auto flex   justify-center min-h-screen w-full`}>
        <div id="container-content" className=" justify-center flex w-full lg:w-[80%]">
          <div id="container-content-1" className="w-full m-5">
            <div className="w-full flex justify-end">
              <button aria-label="button view mode" onClick={changeMode}>
                {localStorage.theme === "light" ? <TiWeatherSunny className="w-8 h-8" /> : <HiMoon className="w-8 h-8" />}
              </button>
            </div>
            <ProfileBar />
            <section id="main-profile">
              <Navbar />
              <main>{children}</main>
            </section>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Layout;
