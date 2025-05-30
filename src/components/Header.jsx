import React, { useEffect, useRef, useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useTranslation } from "react-i18next";
import { Select } from "antd";

const { Option } = Select;

const Header = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const burgerRef = useRef(null);
  const closeBurger = () => {
    setOpen(false);
  };
  const { i18n } = useTranslation();

  const changeLanguage = (value) => {
    i18n.changeLanguage(value);
  };
  const openBurger = () => {
    setOpen(!open);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (burgerRef.current && !burgerRef.current.contains(event.target)) {
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
    <header className="bg-gray-100 py-5 relative " id="home">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="">
            <a className="bg-[#386d63] block lg:hidden hover:bg-[#2d5c54] text-[#fff] py-[10px] px-6 cursor-pointer rounded-4xl font-[600]" href="tel:+998785550109">78-555-01-09</a>
          </div>
          <div className="flex items-center gap-4">
          <nav>
            <ul className="hidden lg:flex gap-7 items-center text-[22px] font-medium text-[#000]">
              <li className="hover:text-[#386d63]">
                <a href="#home">{t("navbar.home")}</a>
              </li>
              <li className="hover:text-[#386d63]">
                <a href="#about">{t("navbar.about")}</a>
              </li>
              <li className="hover:text-[#386d63] hidden xl:block">
                <a href="#benefits">{t("navbar.news")}</a>
              </li>
              <li className="hover:text-[#386d63]">
                <a href="#tariff">{t("navbar.reception")}</a>
              </li>
              <li className="hover:text-[#386d63]">
                <a href="#tutor">{t("navbar.tyutorlar")}</a>
              </li>
              <li className="hover:text-[#386d63]">
                <a href="#contact">{t("navbar.contact")}</a>
              </li>
              <li>
              <a className="bg-[#386d63] hover:bg-[#2d5c54] text-[18px] text-[#fff] py-[10px] px-6 cursor-pointer rounded-4xl font-[600]" href="tel:+998785550109">78-555-01-09</a>
              </li>
              <li>
              <Select
              defaultValue={i18n.language}
              style={{ width: 120 }}
              onChange={changeLanguage}
            >
              <Option value="uz">🇺🇿 Uzbek</Option>
              <Option value="ru">🇷🇺 Russian</Option>
            </Select>
              </li>
            </ul>
          </nav>
          </div>
          <div className="flex lg:hidden items-center gap-4">
          <Select
              defaultValue={i18n.language}
              style={{ width: 120 }}
              onChange={changeLanguage}
            >
              <Option value="uz">🇺🇿 Uzbek</Option>
              <Option value="ru">🇷🇺 Russian</Option>
            </Select>
            <div
            className="cursor-pointer text-[25px]  text-[#386d63]"
            onClick={openBurger}
          >
            <RiMenuFill />
          </div>
          </div>
          
        </div>
      </div>
      <nav
        ref={burgerRef}
        className={`md:hidden z-50 flex flex-col absolute  bg-gray-100 w-full sm:w-[400px] p-5 h-screen top-0 ${
          !open ? "-left-[100%]" : "left-0"
        }  duration-300`}
      >
        <div
          onClick={closeBurger}
          className="text-[25px] self-end text-[#386d63] mb-3"
        >
          <RxCross2 />
        </div>
        <ul className="flex flex-col gap-7 items-center text-[22px] font-medium text-[#386d63]">
          <li onClick={closeBurger}>
            <a href="#home">{t("navbar.home")}</a>
          </li>
          <li onClick={closeBurger}>
            <a href="#about">{t("navbar.about")}</a>
          </li>
          <li onClick={closeBurger}>
            <a href="#benefits">{t("navbar.news")}</a>
          </li>
          <li onClick={closeBurger}>
          <a href="#tariff">{t("navbar.reception")}</a>
          </li>
          <li onClick={closeBurger}>
          <a href="#tutor">{t("navbar.tyutorlar")}</a>
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
