import { FaFacebookMessenger } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IoLogoFacebook } from "react-icons/io";
import { PiWhatsappLogoBold } from "react-icons/pi";
import { RiInstagramFill, RiLoginBoxFill } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import { TbPhoneCall } from "react-icons/tb";
import { Link } from "react-router-dom";

const QuickInfo = () => {
  return (
    <div className="py-2 px-3 flex justify-between items-end md:">
      <div className="">
        <div className="flex md:gap-5 gap-0 md:flex-row flex-col">
          <a
            href="tel:+8801819802139"
            className="text-[#919c2f] hover:underline flex items-center gap-1 text-lg hover:text-[#65d439]"
          >
            <TbPhoneCall />
            <span className="text-md">+880 1819 802139</span>
          </a>
          <a
            href="mailto:waliurrafiqsami@gmail.com"
            className="text-[#919c2f] hover:text-[#65d439] hover:underline flex items-center gap-1 text-lg"
          >
            <FiMail className="" />
            <span className="text-sm md:text-lg">
              waliurrafiqsami@gmail.com
            </span>
          </a>
        </div>
        <div className="text-[#919c2f] hover:text-[#65d439] flex items-center gap-1 text-lg">
          <SlLocationPin />
          <span className="text-sm md:text-lg">
            Adi Tangail, Daildour Road,{" "}
          </span>
        </div>
      </div>
      <div>
        <div className="">
          <div className="text-xl flex gap-2 p-1">
            <Link>
              <IoLogoFacebook className="text-blue-500" />
            </Link>
            <Link>
              <FaFacebookMessenger className="text-[#A033FF]" />
            </Link>
            <Link>
              <RiInstagramFill className="text-[#e73e0b]" />
            </Link>
            <Link>
              <PiWhatsappLogoBold className="text-[#72e705]" />
            </Link>
          </div>
          <div className="flex items-center gap-1 p-1 text-lg">
            <RiLoginBoxFill className="text-[#d316c3] font-bold" />
            <span className="text-[#22ad1e] font-semibold">Login/Register</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickInfo;
