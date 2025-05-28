import React, { useEffect, useRef, useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useTranslation } from "react-i18next";
const Header = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const burgerRef = useRef(null);
  const closeBurger = () => {
    setOpen(false);
  };
  const openBurger = () => {
    setOpen(!open);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        burgerRef.current &&
        !burgerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);
  return (
    <header className="bg-gray-100 py-5 relative">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="cursor-pointer text-[35px] font-[600] nuqun text-[#386d63]">
            <a href="#home">elesson</a>
          </div>
          <nav>
            <ul className="hidden md:flex gap-7 items-center text-[22px] font-medium text-[#000]">
              <li className="hover:text-[#386d63]">
                <a href="#home">{t("navbar.home")}</a>
              </li>
              <li className="hover:text-[#386d63]">
                <a href="#about">{t("navbar.about")}</a>
              </li>
              <li className="hover:text-[#386d63]">
                <a href="#blog">{t("navbar.news")}</a>
              </li>
              <li className="hover:text-[#386d63]">
                <a href="#reception">{t("navbar.reception")}</a>
              </li>
              <li className="hover:text-[#386d63]">
                <a href="#tyutorlar">{t("navbar.tyutorlar")}</a>
              </li>
              <li className="hover:text-[#386d63]">
                <a href="#contact">{t("navbar.contact")}</a>
              </li>
            </ul>
          </nav>
          <div
            className="cursor-pointer text-[25px] block md:hidden text-[#386d63]"
            onClick={openBurger}
          >
            <RiMenuFill />
          </div>
        </div>
      </div>
      <nav ref={burgerRef} className={`md:hidden z-50 flex flex-col absolute  bg-gray-100 w-full sm:w-[400px] p-5 h-screen top-0 ${!open ? "-left-[100%]" : "left-0"}  duration-300`}>
        <div onClick={closeBurger} className="text-[25px] self-end text-[#386d63] mb-3"><RxCross2 /></div>
        <ul className="flex flex-col gap-7 items-center text-[22px] font-medium text-[#386d63]">
          <li onClick={closeBurger}>
            <a href="#home">{t("navbar.home")}</a>
          </li>
          <li onClick={closeBurger}>
            <a href="#about">{t("navbar.about")}</a>
          </li>
          <li onClick={closeBurger}>
            <a href="#blog">{t("navbar.news")}</a>
          </li>
          <li onClick={closeBurger}>
          <a href="#reception">{t("navbar.reception")}</a>
          </li>
          <li onClick={closeBurger}>
          <a href="#tyutorlar">{t("navbar.tyutorlar")}</a>
          </li>
          <li onClick={closeBurger}>
          <a href="#contact">{t("navbar.contact")}</a>
          </li>
        
        </ul>
      </nav>
    </header>
  );
};

export default Header;
