import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Tutor = () => {
  return (
    <section className="bg-gray-100 py-[60px]">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[30px]">
          <div>
            <h5 className="text-[28px] sm:text-[40px] font-[700]">
              Out tutors
            </h5>
            <p className="text-[16px] sm:text-[20px] text-gray-500">
              Aliqua ipsum tempor aliqua eiusmod lorem ad labore culpa aliquip
            </p>
            <button className="bg-[#386d63] hover:bg-[#2d5c54] text-[#fff] py-4 px-6 cursor-pointer rounded-4xl font-[600] mt-[20px]">
              <a href="#">Become A Tutor</a>
            </button>
          </div>
         
          <div className="rounded-[20px] bg-[#fff] py-[20px] sm:py-[30px] px-[10px] flex flex-col items-center">
            <div className="w-[120px] sm:w-[160px] h-[120px] sm:h-[160px] rounded-[50%] bg-[#386d63]"></div>
            <h6 className="mt-[10px] sm:mt-[15px] text-[18px] sm:text-[22px] font-[600] text-center">Lauren Martinez</h6>
            <p className="mt-[10px] sm:mt-[15px] text-[#386d63] font-[600]">Python Tutor</p>
            <p className="max-w-[250px] text-center text-gray-500 mt-[10px] sm:mt-[15px]">Aliquip eismod in voluptate do quis ipsum dolor</p>
            <div className="mt-[15px]">
              <ul className="flex gap-2 sm:gap-4 text-[20px] sm:text-[25px] text-[#386d63]">
                <li className="hover:text-[#2d5c54]">
                  <a href="#">
                    <FaFacebook />
                  </a>
                </li>
                <li className="hover:text-[#2d5c54]">
                  <a href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li className="hover:text-[#2d5c54]">
                  <a href="#">
                    <FaYoutube />
                  </a>
                </li>
                <li className="hover:text-[#2d5c54]">
                  <a href="#">
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="rounded-[20px] bg-[#fff] py-[20px] sm:py-[30px] px-[10px] flex flex-col items-center">
            <div className="w-[120px] sm:w-[160px] h-[120px] sm:h-[160px] rounded-[50%] bg-[#386d63]"></div>
            <h6 className="mt-[10px] sm:mt-[15px] text-[18px] sm:text-[22px] font-[600] text-center">Lauren Martinez</h6>
            <p className="mt-[10px] sm:mt-[15px] text-[#386d63] font-[600]">Python Tutor</p>
            <p className="max-w-[250px] text-center text-gray-500 mt-[10px] sm:mt-[15px]">Aliquip eismod in voluptate do quis ipsum dolor</p>
            <div className="mt-[15px]">
              <ul className="flex gap-2 sm:gap-4 text-[20px] sm:text-[25px] text-[#386d63]">
                <li className="hover:text-[#2d5c54]">
                  <a href="#">
                    <FaFacebook />
                  </a>
                </li>
                <li className="hover:text-[#2d5c54]">
                  <a href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li className="hover:text-[#2d5c54]">
                  <a href="#">
                    <FaYoutube />
                  </a>
                </li>
                <li className="hover:text-[#2d5c54]">
                  <a href="#">
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="rounded-[20px] bg-[#fff] py-[20px] sm:py-[30px] px-[10px] flex flex-col items-center">
            <div className="w-[120px] sm:w-[160px] h-[120px] sm:h-[160px] rounded-[50%] bg-[#386d63]"></div>
            <h6 className="mt-[10px] sm:mt-[15px] text-[18px] sm:text-[22px] font-[600] text-center">Lauren Martinez</h6>
            <p className="mt-[10px] sm:mt-[15px] text-[#386d63] font-[600]">Python Tutor</p>
            <p className="max-w-[250px] text-center text-gray-500 mt-[10px] sm:mt-[15px]">Aliquip eismod in voluptate do quis ipsum dolor</p>
            <div className="mt-[15px]">
              <ul className="flex gap-2 sm:gap-4 text-[20px] sm:text-[25px] text-[#386d63]">
                <li className="hover:text-[#2d5c54]">
                  <a href="#">
                    <FaFacebook />
                  </a>
                </li>
                <li className="hover:text-[#2d5c54]">
                  <a href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li className="hover:text-[#2d5c54]">
                  <a href="#">
                    <FaYoutube />
                  </a>
                </li>
                <li className="hover:text-[#2d5c54]">
                  <a href="#">
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Tutor;
