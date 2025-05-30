import React from "react";
import img from "../assets/heroof2.png";
import { FaUser, FaUserFriends } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { TbStack3Filled } from "react-icons/tb";
import { HiRocketLaunch } from "react-icons/hi2";
const OurBenefits = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="pt-[20px] pb-[20px] sm:pb-[50px] lg:pb-0 sm:pt-[50px]">
      <div className="container">
        <div className="flex">
          <div className="w-[50%] hidden lg:flex items-end">
            <img className="w-auto h-[700px]" src={img} alt="girl photo" />
          </div>
          <div className="w-full lg:w-[50%]">
            <button className="py-[5px] px-[15px] text-[18px] font-[600] bg-[#386d63] text-[#fff] rounded-[30px] mb-[20px]">
            {t("kurs.button")}
            </button>
            <h5 className="text-[28px] sm:text-[40px] font-[700]">
              <span className="text-[#386d63]">Elesson</span>  {t("kurs.title")}
            </h5>
            <p className="text-[16px] sm:text-[20px] text-gray-500">
            {t("kurs.title2")}
            </p>
            <div className="grid grid-cols-2 gap-x-[10px] gap-y-[20px] mt-[20px] mb-[20px] sm:mb-[50px]">
              <div>
                <div className="text-[#fff] bg-[#386d63] text-[20px] sm:text-[25px] w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] flex justify-center items-center rounded-[50%]">
                  <FaUser />
                </div>
                <h6 className="mt-[10px] sm:mt-[20px] text-[20px] sm:text-[25px] font-[700]"> {t("kurs.comfo1")}</h6>
                <p className="mt-[10px] sm:mt-[20px] text-[16px] sm:text-[18px] text-gray-500"> {t("kurs.comfo11")}</p>
              </div>
              <div>
                <div className="text-[#fff] bg-[#386d63] text-[20px] sm:text-[25px] w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] flex justify-center items-center rounded-[50%]">
                <FaUserFriends />

                </div>
                <h6 className="mt-[10px] sm:mt-[20px] text-[20px] sm:text-[25px] font-[700]"> {t("kurs.comfo2")}</h6>
                <p className="mt-[10px] sm:mt-[20px] text-[16px] sm:text-[18px] text-gray-500"> {t("kurs.comfo22")}</p>
              </div>
              <div>
                <div className="text-[#fff] bg-[#386d63] text-[20px] sm:text-[25px] w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] flex justify-center items-center rounded-[50%]">
                <TbStack3Filled />
                </div>
                <h6 className="mt-[10px] sm:mt-[20px] text-[20px] sm:text-[25px] font-[700]"> {t("kurs.comfo3")}</h6>
                <p className="mt-[10px] sm:mt-[20px] text-[16px] sm:text-[18px] text-gray-500"> {t("kurs.comfo33")}</p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBenefits;
