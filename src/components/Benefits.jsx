import React from "react";
import { useTranslation } from "react-i18next";
import afza1 from "../assets/gif/elss1.gif";
import afza2 from "../assets/gif/elss2.gif";
import afza3 from "../assets/gif/elss3.gif";
import afza4 from "../assets/gif/elss4.gif";

const Benefits = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-gray-100 py-[30px] sm:py-[50px]" id="benefits">
      <div className="container">
        <div className="w-full text-center ">
          <h4 className="text-[28px] sm:text-[35px] font-[700]">{t("afza.title")}</h4>
          <p className="text-gray-500 max-w-[500px] mx-auto text-[14px] sm:text-[16px]">
            {t("afza.description")}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-[30px] sm:mt-[50px]">
          <div className="grid grid-cols-2 items-center bg-[#fff] rounded-[15px]">
            <div className="h-[200px] sm:h-[300px] bg-gray-800 rounded-l-[15px] flex justify-center items-center text-[#fff]">
              <img
                src={afza1}
                alt="afza gif"
                className="w-full h-full object-cover rounded-l-[15px]"
              />
            </div>
            <div className="items-center p-[10px] sm:p-[20px] h-full flex flex-col justify-center">
              <h5 className="text-[18px] sm:text-[25px] font-[700] text-left w-full">
                {t("afza.afza1")}
              </h5>
              <p className="text-gray-500 text-[13px] sm:text-[16px]">{t("afza.afza11")}</p>
            </div>
          </div>

          {/* Boshqa 3 ta kartalar hali "rasm" yozuvi bilan qolgan */}
          <div className="grid grid-cols-2 items-center bg-[#fff] rounded-[15px]">
            <div className="h-[200px] sm:h-[300px] bg-gray-800 rounded-l-[15px] flex justify-center items-center text-[#fff]">
              <img
                src={afza2}
                alt="afza gif"
                className="w-full h-full object-cover rounded-l-[15px]"
              />
            </div>
            <div className="items-center p-[10px] sm:p-[20px] h-full flex flex-col justify-center">
              <h5 className="text-[18px] sm:text-[25px] font-[700] text-left w-full">
                {t("afza.afza2")}
              </h5>
              <p className="text-gray-500 text-[13px] sm:text-[16px]">{t("afza.afza22")}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center bg-[#fff] rounded-[15px]">
            <div className="h-[200px] sm:h-[300px] bg-gray-800 rounded-l-[15px] flex justify-center items-center text-[#fff]">
              <img
                src={afza3}
                alt="afza gif"
                className="w-full h-full object-cover rounded-l-[15px]"
              />
            </div>
            <div className="items-center p-[10px] sm:p-[20px] h-full flex flex-col justify-center">
              <h5 className="text-[18px] sm:text-[25px] font-[700] text-left w-full">
                {t("afza.afza3")}
              </h5>
              <p className="text-gray-500 text-[13px] sm:text-[16px]">{t("afza.afza33")}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center bg-[#fff] rounded-[15px]">
            <div className="h-[200px] sm:h-[300px] bg-gray-800 rounded-l-[15px] flex justify-center items-center text-[#fff]">
              <img
                src={afza4}
                alt="afza gif"
                className="w-full h-full object-cover rounded-l-[15px]"
              />
            </div>
            <div className="items-center p-[10px] sm:p-[20px] h-full flex flex-col justify-center">
              <h5 className="text-[18px] sm:text-[25px] font-[700] text-left w-full">
                {t("afza.afza4")}
              </h5>
              <p className="text-gray-500 text-[13px] sm:text-[16px]">{t("afza.afza44")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

