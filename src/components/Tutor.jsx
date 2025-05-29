import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Modal from "react-modal";

const tutors = [
  {
    id: 1,
    name: "Lauren Martinez",
    subject: "Python Tutor",
    descShort: "Aliquip eismod in voluptate do quis ipsum dolor",
    desc: "Aliquip eismod in voluptate do quis ipsum dolor Aliquip eismod in voluptate do quis ipsum dolor Aliquip eismod in voluptate do quis ipsum dolor Aliquip eismod in voluptate do quis ipsum dolor Aliquip eismod in voluptate do quis ipsum dolor Aliquip eismod in voluptate do quis ipsum dolor Aliquip eismod in voluptate do quis ipsum dolor",
    image: "", // bu yerda rasm URL bo‘lishi mumkin
  },
  {
    id: 2,
    name: "David Johnson",
    subject: "JavaScript Tutor",
    descShort: "Aliquip eismod in voluptate do quis ipsum dolor",
    desc: "Aliquip eismod in voluptate do quis ipsum dolor Aliquip eismod in voluptate do quis ipsum dolor Aliquip eismod in voluptate do quis ipsum dolor Aliquip eismod in voluptate do quis ipsum dolor Aliquip eismod in voluptate do quis ipsum dolor Aliquip eismod in voluptate do quis ipsum dolor Aliquip eismod in voluptate do quis ipsum dolor",
    image: "",
  },
  {
    id: 3,
    name: "Emily Brown",
    subject: "React Tutor",
    descShort: "Aliquip eismod in voluptate do quis ipsum dolor",
    desc: "Aliquip eismod in voluptate do quis ipsum dolor Aliquip eismod in voluptate do quis ipsum dolor Aliquip eismod in voluptate do quis ipsum dolor Aliquip eismod in voluptate do quis ipsum dolor Aliquip eismod in voluptate do quis ipsum dolor Aliquip eismod in voluptate do quis ipsum dolor Aliquip eismod in voluptate do quis ipsum dolor",
    image: "",
  },
];

Modal.setAppElement("#root");

const Tutor = () => {
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (tutor) => {
    setSelectedTutor(tutor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTutor(null);
  };
  return (
    <section className="bg-gray-100 py-[30px] sm:py-[60px]">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-4 gap-[30px]">
          <div className="col-span-2 lg:col-span-1">
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
          <div className="col-span-3">
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
                450: {
                    slidesPerView: 2,
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
              {tutors.map((tutor) => (
                <SwiperSlide key={tutor.id}>
                  <div
                    className="rounded-[20px] bg-[#fff] py-[20px] sm:py-[30px] px-[10px] flex flex-col items-center cursor-pointer"
                    onClick={() => openModal(tutor)}
                  >
                    <div className="w-[120px] sm:w-[160px] h-[120px] sm:h-[160px] rounded-[50%] bg-[#386d63]"></div>
                    <h6 className="mt-[10px] sm:mt-[15px] text-[18px] sm:text-[22px] font-[600] text-center">
                      {tutor.name}
                    </h6>
                    <p className="mt-[10px] sm:mt-[15px] text-[#386d63] font-[600]">
                      {tutor.subject}
                    </p>
                    <p className="max-w-[250px] text-center text-gray-500 mt-[10px] sm:mt-[15px]">
                      {tutor.descShort}
                    </p>
                    <div className="mt-[15px]">
                      <ul className="flex gap-2 sm:gap-4 text-[20px] sm:text-[25px] text-[#386d63]">
                        <li className="hover:text-[#2d5c54]" onClick={(e) => e.stopPropagation()}>
                          <a href="#"><FaFacebook /></a>
                        </li>
                        <li className="hover:text-[#2d5c54]" onClick={(e) => e.stopPropagation()}>
                          <a href="#"><FaTwitter /></a>
                        </li>
                        <li className="hover:text-[#2d5c54]" onClick={(e) => e.stopPropagation()}>
                          <a href="#"><FaYoutube /></a>
                        </li>
                        <li className="hover:text-[#2d5c54]" onClick={(e) => e.stopPropagation()}>
                          <a href="#"><FaLinkedin /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Tutor Info"
        className="max-w-[500px] mx-auto mt-[10%] bg-white p-6 rounded-[20px] shadow-lg"
        overlayClassName="fixed z-[9999] inset-0 bg-black/40 backdrop-blur-md flex justify-center items-start"
      >
        {selectedTutor && (
          <div className="text-center">
            <div className="w-[120px] h-[120px] mx-auto rounded-full bg-[#386d63]"></div>
            <h2 className="mt-4 text-[22px] font-bold">{selectedTutor.name}</h2>
            <p className="text-[#386d63] font-semibold">{selectedTutor.subject}</p>
            <p className="text-gray-500 mt-2">{selectedTutor.desc}</p>
            <button
              onClick={closeModal}
              className="mt-6 bg-[#386d63] hover:bg-[#2d5c54] text-white py-2 px-6 rounded-[10px]"
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Tutor;
