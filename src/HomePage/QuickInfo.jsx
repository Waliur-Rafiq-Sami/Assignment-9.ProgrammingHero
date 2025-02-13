import { useContext } from "react";
import { RiInstagramFill, RiLoginBoxFill } from "react-icons/ri";
import { FiMail } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { TbPhoneCall } from "react-icons/tb";
import { UsePrivateContext } from "../PrivacyContext/PrivateContext";
import GoogleImg from "../assets/goole.png";
import facebookImg from "../assets/facebook.png";
import GithubImg from "../assets/github.png";
import LogoImg from "../assets/logoi.png";
import { IoLogoFacebook } from "react-icons/io";
import { FaFacebookMessenger } from "react-icons/fa";
import { PiWhatsappLogoBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { BsFillHousesFill } from "react-icons/bs";

const QuickInfo = () => {
  const {
    user,
    handleLogOut,
    loginRegistrationBtn,
    createUserWithGoogle,
    createUserWithGithub,
  } = useContext(UsePrivateContext);
  const social = (
    <div className="flex gap-1">
      <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <IoLogoFacebook className="text-blue-500 text-xl transition-transform duration-300 hover:scale-125 hover:rotate-12 hover:shadow-blue-500 hover:shadow-lg" />
      </Link>
      <Link>
        <FaFacebookMessenger className="text-[#A033FF] text-xl transition-transform duration-300 hover:scale-125 hover:rotate-12 hover:shadow-[#A033FF] hover:shadow-lg" />
      </Link>
      <Link>
        <RiInstagramFill className="text-[#e73e0b] text-xl transition-transform duration-300 hover:scale-125 hover:rotate-12 hover:shadow-[#e73e0b] hover:shadow-lg" />
      </Link>
      <Link>
        <PiWhatsappLogoBold className="text-[#72e705] text-xl transition-transform duration-300 hover:scale-125 hover:rotate-12 hover:shadow-[#72e705] hover:shadow-lg" />
      </Link>
    </div>
  );

  const facebookError = () => {
    Swal.fire({
      title: "Sorry!\nYou can't login use facebook",
      icon: "error",
      showClass: {
        popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `,
      },
      hideClass: {
        popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `,
      },
    });
  };

  return (
    <>
      <div className="py-2 px-3 flex justify-between items-center md:">
        <div className="flex">
          <div className="p-1 mr-2">
            <a href="/">
              <img className="w-25 md:w-40" src={LogoImg} />
            </a>
            <h3 className="md:hidden text-center font-dancing text-xl">
              landNest
            </h3>
          </div>
          <div className="hidden md:block">
            <div className="flex md:gap-5 gap-0 md:flex-row flex-col">
              <div>
                <a
                  href="tel:+8801819802139"
                  className="text-[#8f41cf] hover:underline flex items-center gap-1 text-lg hover:text-[#ff0000]"
                >
                  <TbPhoneCall />
                  <span className="text-md">+880 1819 802139</span>
                </a>
                <a
                  href="mailto:waliurrafiqsami@gmail.com"
                  className="text-[#8f41cf] hover:text-[#ff0000] hover:underline flex items-center gap-1 text-lg"
                >
                  <FiMail className="" />
                  <span className="text-sm md:text-lg">
                    waliurrafiqsami@gmail.com
                  </span>
                </a>
              </div>
            </div>
            <div className="text-[#8f41cf] hover:text-[#ff0000] flex items-center gap-1 text-lg">
              <span className="mr-2">{social}</span>
              <SlLocationPin />
              <span className="text-sm md:text-lg">
                Adi Tangail, Daildour Road.
              </span>
            </div>
          </div>
        </div>
        <div className="hidden md:block text-6xl font-bold font-dancing">
          <h2>Land Nest</h2>
        </div>
        {user ? (
          <>
            <div className="flex items-center gap-7">
              <div className="text-xl text-[#c9681a] bg-[#a689aa4b] p-3 rounded-full hover:scale-103 hover:cursor-pointer">
                <BsFillHousesFill />
              </div>
              <button
                onClick={handleLogOut}
                className="btn btn-outline md:btn-md btn-sm border-green-600 flex items-center px-2 py-1 text-lg hover:scale-105 transition-transform duration-300 hover:shadow-[#000] hover:bg-[#b9ff91dc]"
              >
                <RiLoginBoxFill className="text-[#981abec0] font-bold" />
                <span className="-ml-1 text-[#0741df] font-semibold">
                  Log Out
                </span>
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="px-2">
              <button
                onClick={loginRegistrationBtn}
                className="btn btn-outline md:btn-md btn-sm border-green-600 flex items-center px-2 py-1 text-lg hover:scale-105 transition-transform duration-300 hover:shadow-[#000] hover:bg-[#b9ff91dc]"
              >
                <RiLoginBoxFill className="text-[#981abec0] font-bold" />
                <span className="-ml-1 text-[#0741df] font-semibold">
                  Login/Register
                </span>
              </button>
              <div className="flex gap-3 mt-2 justify-center">
                <img
                  onClick={createUserWithGoogle}
                  className="w-6 hover:scale-113"
                  src={GoogleImg}
                  alt=""
                />
                <img
                  onClick={facebookError}
                  className="w-6 hover:scale-113"
                  src={facebookImg}
                  alt=""
                />
                <img
                  onClick={createUserWithGithub}
                  className="w-6 hover:scale-113"
                  src={GithubImg}
                  alt=""
                />
              </div>
            </div>
          </>
        )}
      </div>
      <div className="md:hidden p-2 text-md">
        <div className="flex md:gap-5 gap-0 md:flex-row flex-col">
          <div>
            <a
              href="tel:+8801819802139"
              className="text-[#8f41cf] hover:underline flex items-center gap-1 text-lg hover:text-[#ff0000]"
            >
              <TbPhoneCall />
              <span className="text-sm md:text-md">+880 1819 802139</span>
            </a>
            <a
              href="mailto:waliurrafiqsami@gmail.com"
              className="text-[#8f41cf] hover:text-[#ff0000] hover:underline flex items-center gap-1 text-lg"
            >
              <FiMail className="" />
              <span className="text-sm md:text-lg">
                waliurrafiqsami@gmail.com
              </span>
            </a>
          </div>
        </div>
        <div className="text-[#8f41cf] hover:text-[#ff0000] flex items-center gap-1 text-lg">
          <span className="mr-2">{social}</span>
          <SlLocationPin />
          <span className="text-sm md:text-lg">
            Adi Tangail, Daildour Road.
          </span>
        </div>
      </div>
    </>
  );
};

export default QuickInfo;
