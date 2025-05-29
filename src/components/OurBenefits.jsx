import React from "react";
import img from "../assets/ellsa.jpg";
import { FaUser } from "react-icons/fa";

const OurBenefits = () => {
  return (
    <section id="about" className="pt-[20px] pb-[20px] sm:pb-[50px] lg:pb-0 sm:pt-[50px]">
      <div className="container">
        <div className="flex">
          <div className="w-[50%] hidden lg:block">
            <img className="w-auto h-[700px]" src={img} alt="girl photo" />
          </div>
          <div className="w-full lg:w-[50%]">
            <button className="py-[5px] px-[15px] text-[18px] font-[600] bg-[#386d63] text-[#fff] rounded-[30px] mb-[20px]">
              Our Benefits
            </button>
            <h5 className="text-[28px] sm:text-[40px] font-[700]">
              Get ahead by signing up for our courses today
            </h5>
            <p className="text-[16px] sm:text-[20px] text-gray-500">
              Tortor pretiom viverra suspendisse potenti nullam ac tortor vitae.
              Vitae congue mauris rhoncus aenean vel elit scelerisque.
            </p>
            <div className="grid grid-cols-2 gap-x-[10px] gap-y-[20px] mt-[20px]">
              <div>
                <div className="text-[#fff] bg-[#386d63] text-[20px] sm:text-[25px] w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] flex justify-center items-center rounded-[50%]">
                  <FaUser />
                </div>
                <h6 className="mt-[10px] sm:mt-[20px] text-[20px] sm:text-[25px] font-[700]">Profissional tutor</h6>
                <p className="mt-[10px] sm:mt-[20px] text-[16px] sm:text-[18px] text-gray-500">Aliqua voluptate laboris cillum pariatur nulla in veniam qui</p>
              </div>
              <div>
                <div className="text-[#fff] bg-[#386d63] text-[20px] sm:text-[25px] w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] flex justify-center items-center rounded-[50%]">
                  <FaUser />
                </div>
                <h6 className="mt-[10px] sm:mt-[20px] text-[20px] sm:text-[25px] font-[700]">Profissional tutor</h6>
                <p className="mt-[10px] sm:mt-[20px] text-[16px] sm:text-[18px] text-gray-500">Aliqua voluptate laboris cillum pariatur nulla in veniam qui</p>
              </div>
              <div>
                <div className="text-[#fff] bg-[#386d63] text-[20px] sm:text-[25px] w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] flex justify-center items-center rounded-[50%]">
                  <FaUser />
                </div>
                <h6 className="mt-[10px] sm:mt-[20px] text-[20px] sm:text-[25px] font-[700]">Profissional tutor</h6>
                <p className="mt-[10px] sm:mt-[20px] text-[16px] sm:text-[18px] text-gray-500">Aliqua voluptate laboris cillum pariatur nulla in veniam qui</p>
              </div>
              <div>
                <div className="text-[#fff] bg-[#386d63] text-[20px] sm:text-[25px] w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] flex justify-center items-center rounded-[50%]">
                  <FaUser />
                </div>
                <h6 className="mt-[10px] sm:mt-[20px] text-[20px] sm:text-[25px] font-[700]">Profissional tutor</h6>
                <p className="mt-[10px] sm:mt-[20px] text-[16px] sm:text-[18px] text-gray-500">Aliqua voluptate laboris cillum pariatur nulla in veniam qui</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBenefits;
