import React from "react";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Price = () => {
  const { t, i18n } = useTranslation();

  return (
    <section
      id="tariff"
      className={`bg-[#000000de] pt-[30px] sm:pt-[50px] h-[400px] sm:h-[500px] rounded-t-[40px]  sm:rounded-t-[50px] ${i18n.language == 'uz' ? "mb-[360px] sm:mb-[420px]" : "mb-[440px] sm:mb-[450px]"}`}
    >
      <div className="container">
        <div>
          <div className="w-full text-center ">
            <h4 className="text-[28px] sm:text-[40px] font-[700] text-[#fff]">
              {t("tarif.titele")}
            </h4>
            <p className="text-[#fff] max-w-[400px] sm:max-w-[550px] mx-auto text-[16px] sm:text-[20px] mt-[15px]">
              {t("tarif.title2")}
            </p>
          </div>
        </div>
        <div className="bg-[#fff] rounded-t-[35px] sm:rounded-t-[45px] p-[30px] lg:p-[50px] mt-[30px] sm:mt-[50px]">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            navigation={true}
            pagination={true}
            modules={[Navigation, Pagination]}
            className="mySwiper h-full"
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide className="h-auto">
              <div className={`group border border-gray-300 rounded-[30px] ${i18n.language == 'uz' ? "h-[520px] sm:h-[580px]" : "h-[580px] sm:h-[630px]"} flex flex-col sm:rounded-[40px] transition-all duration-300`}>
                <div className="bg-gray-100 group-hover:bg-black group-hover:text-[#fff] rounded-t-[30px] sm:rounded-t-[40px] p-[30px] sm:p-[40px] transition-all duration-300">
                  <div className="font-[600]">{t("tarif.bosh")}</div>
                  <div className="font-[700] text-[20px] sm:text-[30px] mt-[15px]">
                    {t("tarif.tarif1")}
                  </div>
                  <div className="mt-[10px] sm:mt-[15px] text-gray-500 text-[14px] sm:text-[16px] group-hover:text-[#fff] transition-all duration-300">
                    {t("tarif.um")}
                  </div>
                </div>
                <div className="p-[30px] sm:p-[40px] flex flex-col justify-between h-full flex-grow gap-[20px]">
                  <ul className="flex flex-col flex-grow gap-[10px]">
                    <li className="flex items-center gap-[10px] text-[13px] sm:text-[14px] lg:text-[16px] font-[500]">
                      <MdDone className="text-[#386d63]" />{" "}
                      <span>{t("tarif.och")}</span>
                    </li>
                  </ul>
                  <a
                    href="#contact"
                    className="bg-[#386d63] group-hover:bg-black cursor-pointer w-full text-center text-[#fff] text-[20px] font-[600] rounded-[30px] py-[13px] transition-all duration-300"
                  >
                    {t("tarif.sotib")}
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-auto">
              <div className={`group border border-gray-300 rounded-[30px] ${i18n.language == 'uz' ? "h-[520px] sm:h-[580px]" : "h-[580px] sm:h-[630px]"} flex flex-col sm:rounded-[40px] transition-all duration-300`}>
                <div className="bg-gray-100 group-hover:bg-black group-hover:text-[#fff] rounded-t-[30px] sm:rounded-t-[40px] p-[30px] sm:p-[40px] transition-all duration-300">
                  <div className="font-[600]">{t("tarif.bosh")}</div>
                  <div className="font-[700] text-[20px] sm:text-[30px] mt-[10px] sm:mt-[15px]">
                    {t("tarif.tarif2")}
                  </div>
                  <div className="mt-[10px] sm:mt-[15px] text-gray-500 text-[14px] sm:text-[16px] group-hover:text-[#fff] transition-all duration-300">
                    {t("tarif.um")}
                  </div>
                </div>
                <div className="p-[30px] sm:p-[40px] flex flex-col gap-[20px] justify-between h-full flex-grow">
                  <ul className="flex flex-col gap-[10px]">
                    <li className="flex items-center gap-[10px] text-[13px] sm:text-[14px] lg:text-[16px] font-[500]">
                      <MdDone className="text-[#386d63]" />{" "}
                      <span>{t("tarif.tarif12")}</span>
                    </li>
                    <li className="flex items-center gap-[10px] text-[13px] sm:text-[14px] lg:text-[16px] font-[500]">
                      <MdDone className="text-[#386d63]" />{" "}
                      <span>{t("tarif.tarif13")}</span>
                    </li>
                    <li className="flex items-center gap-[10px] text-[13px] sm:text-[14px] lg:text-[16px] font-[500]">
                      <MdDone className="text-[#386d63]" />{" "}
                      <span>{t("tarif.tarif14")}</span>
                    </li>
                    <li className="flex items-center gap-[10px] text-[13px] sm:text-[14px] lg:text-[16px] font-[500]">
                      <MdDone className="text-[#386d63]" />{" "}
                      <span>{t("tarif.tarif15")}</span>
                    </li>
                  </ul>
                  <a
                    href="#contact"
                    className="bg-[#386d63] group-hover:bg-black cursor-pointer w-full text-center text-[#fff] text-[20px] font-[600] rounded-[30px] py-[13px] transition-all duration-300"
                  >
                    {t("tarif.sotib")}
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-auto">
              <div className={`group border border-gray-300 rounded-[30px] ${i18n.language == 'uz' ? "h-[520px] sm:h-[580px]" : "h-[580px] sm:h-[630px]"} flex flex-col sm:rounded-[40px] transition-all duration-300`}>
                <div className="bg-gray-100 group-hover:bg-black group-hover:text-[#fff] rounded-t-[30px] sm:rounded-t-[40px] p-[30px] sm:p-[40px] transition-all duration-300">
                  <div className="font-[600]">{t("tarif.bosh")}</div>
                  <div className="font-[700] text-[20px] sm:text-[30px] mt-[10px] sm:mt-[15px]">
                    {t("tarif.tarif3")}
                  </div>
                  <div className="mt-[10px] sm:mt-[15px] text-gray-500 text-[14px] sm:text-[16px] group-hover:text-[#fff] transition-all duration-300">
                    {t("tarif.um")}
                  </div>
                </div>
                <div className="p-[30px] sm:p-[40px] flex flex-col gap-[15px] justify-between h-full">
                  <ul className="flex flex-col gap-[5px]">
                    <li className="flex items-center gap-[10px] text-[13px] sm:text-[14px] lg:text-[16px] font-[500]">
                      <MdDone className="text-[#386d63]" />{" "}
                      <span>{t("tarif.tarif22")}</span>
                    </li>
                    <li className="flex items-center gap-[10px]  text-[13px] sm:text-[14px] lg:text-[16px] font-[500]">
                      <MdDone className="text-[#386d63]" />{" "}
                      <span>{t("tarif.tarif21")}</span>
                    </li>
                    <li className="flex items-center gap-[10px]  text-[13px] sm:text-[14px] lg:text-[16px] font-[500]">
                      <MdDone className="text-[#386d63] text-[35px]" />{" "}
                      <span>{t("tarif.tarif23")}</span>
                    </li>
                    <li className="flex items-center gap-[10px] text-[13px] sm:text-[14px] lg:text-[16px] font-[500]">
                      <MdDone className="text-[#386d63]" />{" "}
                      <span>{t("tarif.tarif24")}</span>
                    </li>
                  </ul>
                  <a
                    href="#contact"
                    className="bg-[#386d63] group-hover:bg-black cursor-pointer w-full text-center text-[#fff] text-[20px] font-[600] rounded-[30px] py-[13px] transition-all duration-300"
                  >
                    {t("tarif.sotib")}
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Price;
