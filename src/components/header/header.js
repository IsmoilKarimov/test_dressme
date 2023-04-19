import React, { useEffect, useState } from "react";
import TopHeader from "./top";
import MediumHeader from "./medium";
import BottomHeader from "./bottom";
import NavMenu from "./nav-menu";
import "./header.css";
import { Outlet } from "react-router-dom";
const Header = () => {
  // ----------------NavBar----------------
  const [show, setShow] = useState(true);
  const [scrollPost, setscrollPost] = useState(0);

  // ----------------NavMenu----------------
  const [ShowNavMenu, setShowNavMenu] = useState(true);
  const [ScrollPostNavMenu, setScrollPostNavMenu] = useState(0);

  // ----------------NavBar----------------
  const handleScroll = () => {
    setscrollPost(document.body.getBoundingClientRect().top);
    if (parseInt(Math.abs(scrollPost)) > 300) {
      setShow(document.body.getBoundingClientRect().top > scrollPost);
    }
  };

  // ----------------NavMenu----------------
  const handleScrollNavMenu = () => {
    setScrollPostNavMenu(document.body.getBoundingClientRect().top);
    setShowNavMenu(
      document.body.getBoundingClientRect().top < ScrollPostNavMenu
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollNavMenu);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollNavMenu);
    };
  }, [show, scrollPost, ShowNavMenu, ScrollPostNavMenu]);

  return (
    <div>
      <header className="border border-searchBgColor">
        <div className={`ss:block md:hidden `}>
          <TopHeader />
          <MediumHeader />
        </div>
        <div
          className={`fixed top-0 w-full bg-white  ${
            show
              ? "visible duration-500 z-50"
              : "visible duration-500 z-50 translate-y-[-100%]"
          } hidden md:block`}
        >
          <TopHeader />
          <MediumHeader />
        </div>
        <div className="md:mt-[99px] ss:mt-0">
          <BottomHeader />
          <div
            className={`fixed bottom-0 w-full bg-white  ${
              show
                ? "visible duration-500 z-50"
                : "visible duration-500 z-50 translate-y-[100%]"
            } block md:hidden`}
          >
            <NavMenu />
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
};
export default Header;
