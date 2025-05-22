import React from "react";
import logo from "/images/logo.svg";
import sun from "/images/icon-sun.svg";
import moon from "/images/icon-moon.svg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../store/ThemeSlice";
const Header = () => {
  const  theme  = useSelector((state) => state.theme);
  const dispatch = useDispatch()
  return (
    <header className={`${theme === "dark" ? "text-white bg-neutral-900" : "text-black bg-white"} flex flex-row items-center justify-between  rounded-lg shadow-lg p-2`}>
    <img src={logo} alt="" />
    <button className={`${theme === "dark" ? "bg-neutral-400 p-2" : "bg-neutral-400"} p-2 rounded-lg border border-red-600`}onClick={() => dispatch(toggleTheme())}>
    <img src={`${theme === "dark" ? moon : sun}`} alt="" />
    </button>
    </header>
  );
};

export default Header;
