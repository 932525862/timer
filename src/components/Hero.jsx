import React from "react";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Tooltip } from 'antd';
import { FaUser } from "react-icons/fa";
const Hero = () => {
  return (
    <section>
      <div className="container">
        <div>
          <div className="mt-[40px]">
            <h1 className="text-[65px] font-bold max-w-[500px]">
              Unlock your potential online
            </h1>
            <p className="text-gray-500 text-[20px] max-w-[600px] mt-[15px]">
              Our online courses are designed to equip you with the skills and
              knowledge you need to succeed in today's competitive world
            </p>
            <button className="bg-[#386d63] hover:bg-[#2d5c54] text-[#fff] py-4 px-6 cursor-pointer rounded-4xl font-[600] mt-[20px]">
              <a href="#">Explore Courses</a>
            </button>
          </div>
          <div className="mt-[50px] flex gap-7">
            <div>
              <div>
                <h4 className="text-[30px] font-[600]">Testimonials</h4>
                <div className="flex text-amber-400 gap-1 text-[28px] items-center">
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                </div>
              </div>
              <p className="text-[16px] max-w-[300px] mt-[20px] text-gray-500">
                Consectetur nulla consectetur sint sint fugiat fugiat deserunt
                loborum ad non Lorem adipising offixia exercication nostrup.
                Cillum duis irure Lorem aute enim elit adipisicing
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
                    <div className=" text-gray-500">Ratings</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-[#386d63] text-[#fff] rounded-[50%] text-[27px]">
                  <FaUser />
                  </div>
                  <div>
                    <div className="font-[800] text-[20px]">1.8M</div>
                    <div className=" text-gray-500">Customers</div>
                  </div>
                </div>
              </div>
              <div className="mt-[40px]">
                <div>
                  <Avatar.Group
                    max={{
                      count: 3,
                      style: { color: "#f56a00", backgroundColor: "#fde3cf", width: "50px", height: "50px" },
                    }}
                  >
                    <Avatar style={{ backgroundColor: "#f56a00", width: "50px", height: "50px"}}>K</Avatar>
                    <Avatar style={{ backgroundColor: "#f56a00", width: "50px", height: "50px" }}>K</Avatar>
                    <Avatar style={{ backgroundColor: "#f56a00", width: "50px", height: "50px" }}>K</Avatar>
                    <Avatar style={{ backgroundColor: "#f56a00", width: "50px", height: "50px"}}>K</Avatar>
                    <Avatar style={{ backgroundColor: "#f56a00", width: "50px", height: "50px" }}>K</Avatar>
                    <Avatar style={{ backgroundColor: "#f56a00", width: "50px", height: "50px" }}>K</Avatar>
                    <Avatar style={{ backgroundColor: "#f56a00", width: "50px", height: "50px"}}>K</Avatar>
                    <Avatar style={{ backgroundColor: "#f56a00", width: "50px", height: "50px" }}>K</Avatar>
                    <Avatar style={{ backgroundColor: "#f56a00", width: "50px", height: "50px" }}>K</Avatar>
                    <Tooltip title="Ant User" placement="top">
                      <Avatar
                        style={{ backgroundColor: "#87d068", width: "50px", height: "50px" }}
                        icon={<UserOutlined />}
                      />
                    </Tooltip>
                    <Avatar
                      style={{ backgroundColor: "#1677ff", width: "50px", height: "50px" }}
                      icon={<AntDesignOutlined />}
                    />
                  </Avatar.Group>
                </div>
                <p className="text-[22px] font-[700] mt-[10px]">
                    Satisfied customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
