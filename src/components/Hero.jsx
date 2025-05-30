import React from "react";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Tooltip } from "antd";
import { FaUser } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import heroImg from "../assets/heroof1.png";
const Hero = () => {
    const { t } = useTranslation();
  return (
    <section className="">
      <div className="container relative">
        <div className="mb-[50px]">
          <div>
            <div className="mt-[20px] sm:mt-[40px]">
              <h1 className="text-[90px] sm:text-[120px] nuqun text-[#386d63]  max-w-[400px] sm:max-w-[500px]">
                elesson
              </h1>
              <p className="text-[#386d63] font-[600] lg:text-gray-500 text-[16px] sm:text-[20px] max-w-[600px] mt-[15px]">
              {t("about.description")}
              </p>
              <button className="bg-[#386d63] hover:bg-[#2d5c54] text-[#fff] py-4 px-6 cursor-pointer rounded-4xl font-[600] mt-[20px]">
                <a href="https://elesson.exode.biz"> {t("about.viewOrders")}</a>
              </button>
            </div>
            <div className="mt-[50px] flex gap-7">
              <div className="hidden sm:block">
                <div >
                  <h4 className="text-[30px] font-[600]">{t("about.mijoz")}</h4>
                  <div className="flex text-amber-400 gap-1 text-[28px] items-center">
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                  </div>
                </div>
                <p className="text-[16px] max-w-[300px] mt-[20px] text-[#386d63] font-[500] lg:text-gray-500">
                {t("about.mijozDescription")}
                </p>
              </div>
              <div>
                <div className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-[#386d63] text-[#fff] rounded-[50%] text-[27px]">
                      <RiStarSLine />
                    </div>
                    <div>
                      <div className="font-[800] text-[20px]">4.8</div>
                      <div className="text-[#386d63] font-[600] lg:text-gray-500">{t("about.rating")}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-[#386d63] text-[#fff] rounded-[50%] text-[27px]">
                      <FaUser />
                    </div>
                    <div>
                      <div className="font-[800] text-[20px]">1.8K</div>
                      <div className=" text-[#386d63] font-[600] lg:text-gray-500">{t("about.mijozlar")}</div>
                    </div>
                  </div>
                </div>
                <div className="mt-[40px]">
                  <div>
                    <Avatar.Group
                      max={{
                        count: 3,
                        style: {
                          color: "#f56a00",
                          backgroundColor: "#fde3cf",
                          width: "50px",
                          height: "50px",
                        },
                      }}
                    >
                      <Avatar
                        style={{
                          backgroundColor: "#f56a00",
                          width: "50px",
                          height: "50px",
                        }}
                      >
                        B
                      </Avatar>
                      <Avatar
                        style={{
                          backgroundColor: "#386d63",
                          width: "50px",
                          height: "50px",
                        }}
                      >
                        K
                      </Avatar>
                      <Avatar
                        style={{
                          backgroundColor: "#f56a50",
                          width: "50px",
                          height: "50px",
                        }}
                      >
                        N
                      </Avatar>
                      <Avatar
                        style={{
                          backgroundColor: "#f56a00",
                          width: "50px",
                          height: "50px",
                        }}
                      >
                        D
                      </Avatar>
                      <Avatar
                        style={{
                          backgroundColor: "#f56a00",
                          width: "50px",
                          height: "50px",
                        }}
                      >
                        K
                      </Avatar>
                      <Avatar
                        style={{
                          backgroundColor: "#f56a00",
                          width: "50px",
                          height: "50px",
                        }}
                      >
                        B
                      </Avatar>
                      <Avatar
                        style={{
                          backgroundColor: "#f56a00",
                          width: "50px",
                          height: "50px",
                        }}
                      >
                        S
                      </Avatar>
                      <Avatar
                        style={{
                          backgroundColor: "#f56a00",
                          width: "50px",
                          height: "50px",
                        }}
                      >
                        K
                      </Avatar>
                      <Avatar
                        style={{
                          backgroundColor: "#f56a00",
                          width: "50px",
                          height: "50px",
                        }}
                      >
                        M
                      </Avatar>
                      <Tooltip title="Ant User" placement="top">
                        <Avatar
                          style={{
                            backgroundColor: "#87d068",
                            width: "50px",
                            height: "50px",
                          }}
                          icon={<UserOutlined />}
                        />
                      </Tooltip>
                      <Avatar
                        style={{
                          backgroundColor: "#1677ff",
                          width: "50px",
                          height: "50px",
                        }}
                        icon={<AntDesignOutlined />}
                      />
                    </Avatar.Group>
                  </div>
                  <p className="text-[22px] font-[700] mt-[10px]">
                  {t("about.manun")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-[50px] right-0 -z-10 ">
          <img
             className="opacity-55 lg:opacity-100 w-[450px] sm:w-[550px] lg:w-[720px]"
             src={heroImg}
              alt="girl photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
