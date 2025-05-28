import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <header className="bg-[#fff] py-5 relative">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="cursor-pointer text-[35px] font-[600] nuqun text-[#386d63]">
            <a href="#home">elesson</a>
          </div>
          <nav>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 md:grid-cols-5 text-[18px]  sm:text-[22px] font-medium text-[#000]">
              <li className="hover:text-[#386d63]">
                <a href="#home">Home</a>
              </li>
              <li className="hover:text-[#386d63]">
                <a href="#about">About Us</a>
              </li>
              <li className="hover:text-[#386d63]">
                <a href="#blog">Blog</a>
              </li>
              <li className="hover:text-[#386d63]">
                <a href="#courses">Courses</a>
              </li>
              <li className="hover:text-[#386d63]">
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-4">
        <div className="container">
          <div className="py-[30px] flex justify-between flex-wrap gap-4">
            <div className="text-[20px] text-gray-500 font-[500]">2025 Eduqe Template kit by TemplateUp</div>
            <div>
              <ul className="flex gap-4 text-[25px] text-[#386d63]">
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
    </header>
  );
};

export default Footer;
