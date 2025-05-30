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
  const { t } = useTranslation();
  return (
    <section id="tariff" className="bg-[#000000de] pt-[30px] sm:pt-[50px] h-[400px] sm:h-[500px] rounded-t-[40px]  sm:rounded-t-[50px] mb-[400px] sm:mb-[450px]">
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
            className="mySwiper"
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
            <SwiperSlide>
              <div className="group border border-gray-300 rounded-[30px] sm:rounded-[40px] transition-all duration-300">
                <div className="bg-gray-100 group-hover:bg-black group-hover:text-[#fff] rounded-t-[30px] sm:rounded-t-[40px] p-[30px] sm:p-[40px] transition-all duration-300">
                  <div className="font-[600]">{t("tarif.bosh")}</div>
                  <div className="font-[700] text-[30px] mt-[15px]">{t("tarif.tarif1")}</div>
                  <div className="mt-[15px] text-gray-500 group-hover:text-[#fff] transition-all duration-300">
                  {t("tarif.um")}
                  </div>
                </div>
                <div className="p-[30px] sm:p-[40px] flex flex-col gap-[20px]">
                  <ul className="flex flex-col gap-[10px]">
                    
                  </ul>
                  <a href="https://elesson.exode.biz" className="bg-[#386d63] group-hover:bg-black cursor-pointer w-full text-center text-[#fff] text-[20px] font-[600] rounded-[30px] py-[13px] transition-all duration-300">
                  {t("tarif.sotib")}
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="group border border-gray-300 rounded-[30px] sm:rounded-[40px] transition-all duration-300">
                <div className="bg-gray-100 group-hover:bg-black group-hover:text-[#fff] rounded-t-[30px] sm:rounded-t-[40px] p-[30px] sm:p-[40px] transition-all duration-300">
                  <div className="font-[600]">{t("tarif.bosh")}</div>
                  <div className="font-[700] text-[30px] mt-[15px]">{t("tarif.tarif2")}</div>
                  <div className="mt-[15px] text-gray-500 group-hover:text-[#fff] transition-all duration-300">
                  {t("tarif.um")}
                  </div>
                </div>
                <div className="p-[30px] sm:p-[40px] flex flex-col gap-[20px]">
                  <ul className="flex flex-col gap-[10px]">
                    
                    
                   
                  </ul>
                  <a href="https://elesson.exode.biz" className="bg-[#386d63] group-hover:bg-black cursor-pointer w-full text-center text-[#fff] text-[20px] font-[600] rounded-[30px] py-[13px] transition-all duration-300">
                  {t("tarif.sotib")}
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="group border border-gray-300 rounded-[30px] sm:rounded-[40px] transition-all duration-300">
                <div className="bg-gray-100 group-hover:bg-black group-hover:text-[#fff] rounded-t-[30px] sm:rounded-t-[40px] p-[30px] sm:p-[40px] transition-all duration-300">
                  <div className="font-[600]">{t("tarif.bosh")}</div>
                  <div className="font-[700] text-[30px] mt-[15px]">{t("tarif.tarif3")}</div>
                  <div className="mt-[15px] text-gray-500 group-hover:text-[#fff] transition-all duration-300">
                  {t("tarif.um")}
                  </div>
                </div>
                <div className="p-[30px] sm:p-[40px] flex flex-col gap-[20px]">
                  <ul className="flex flex-col gap-[10px]">
                   
                    
                    
                  </ul>
                  <a href="https://elesson.exode.biz" className="bg-[#386d63] group-hover:bg-black cursor-pointer w-full text-center text-[#fff] text-[20px] font-[600] rounded-[30px] py-[13px] transition-all duration-300">
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

