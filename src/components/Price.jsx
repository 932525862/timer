import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import geografia from "../assets/Orta Osiyo.pdf";
import iqsdo from "../assets/iqsdo.pdf";
import pedagokka from "../assets/Iqtisodiy demografik .pdf";
import jahon from "../assets/jahon.pdf";

const Price = () => {
  const { t } = useTranslation();

  const tarifData = [
    {
      title: "Iqtisodiy demografik ",
      file: iqsdo,
    },
    {
      title: "Iqtisodiy demografik 2",
      file: pedagokka,
    },
    {
      title: "Jahon geografiyasi ",
      file: jahon,
    },
    {
      title:"Oʻrta Osiyo",
      file: geografia,
    },
  ];

  return (
    <section
      id="tariff"
      className="bg-[#000000de] pt-[30px] sm:pt-[50px] h-[400px] sm:h-[500px] rounded-t-[40px] sm:rounded-t-[50px] mb-[400px] sm:mb-[450px]"
    >
      <div className="container">
        {/* Sarlavha */}
        <div className="text-center">
          <h4 className="text-[28px] sm:text-[40px] font-[700] text-white">
            {t("tarif.titele")}
          </h4>
        </div>

        {/* Tariff Cards */}
        <div className="bg-white rounded-t-[35px] sm:rounded-t-[45px] p-[30px] lg:p-[50px] mt-[30px] sm:mt-[50px]">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            navigation
            pagination
            modules={[Navigation, Pagination]}
            className="mySwiper"
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
          >
            {tarifData.map((tarif, index) => (
              <SwiperSlide key={index}>
                <div className="group border border-gray-300 rounded-[30px] sm:rounded-[40px] transition-all duration-300">
                  {/* Card Header */}
                  <div className="bg-gray-100 group-hover:bg-black group-hover:text-white rounded-t-[30px] sm:rounded-t-[40px] p-[30px] sm:p-[40px] transition-all duration-300">
                    <div className="font-[600]">{t("tarif.bosh")}</div>
                    <div className="font-[700] text-[30px] mt-[15px]">
                      {tarif.title}
                    </div>
                    <div className="mt-[15px] text-gray-500 group-hover:text-white transition-all duration-300">
                      {t("tarif.um")}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-[30px] sm:p-[40px] flex flex-col gap-[20px]">
                    <a
                      href={tarif.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#386d63] group-hover:bg-black cursor-pointer w-full text-center text-white text-[20px] font-[600] rounded-[30px] py-[13px] transition-all duration-300"
                    >
                      {t("tarif.sotib")}
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Price;
