import React from "react";
import { RiMenuFill } from "react-icons/ri";

const Header = () => {
  return (
    <header className="bg-gray-100 py-5">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="cursor-pointer text-[30px] font-semibold"><a href="#home">Logo</a></div>
            <nav>
              <ul className="flex gap-7 items-center text-[22px] font-medium">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
                <li>
                  <a href="#courses">Courses</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
              </ul>
            </nav>
            <div className="cursor-pointer text-[25px] hidden">
              <RiMenuFill />
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
