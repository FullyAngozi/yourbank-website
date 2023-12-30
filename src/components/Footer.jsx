import logo from "../assets/logoDesktop.png";
import footermail from "../assets/footermail.png";
import footerphone from "../assets/footerphone.png";
import footerlocation from "../assets/footerlocation.png";
import facebookicon from "../assets/facebookicon.png";
import twittericon from "../assets/twittericon.png";
import linkedinicon from "../assets/linkedinicon.png";

const Footer = () => {
  return (
    <footer className=" text-white mt-10 bg-secondarygray font-lexend">
      <div className="container mx-auto py-8 px-4">
        <div className="flex  flex-col items-center justify-between">
          <img src={logo} alt="Logo" className="h-8 mb-5" />
          <nav className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Careers
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              About
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Security
            </a>
          </nav>
        </div>
        <div className=" flex flex-wrap gap-3 mt-10 items-center max-w-xl mx-auto p-4 py-10 border-t border-b border-text-gray">
          <div className=" flex items-center gap-3 mr-10 ">
            <img src={footermail} alt="" />
            <span className=" ">hello@skillbirdge.com</span>
          </div>
          <div className=" flex items-center gap-3">
            <img src={footerphone} alt="" />
            <span>+91 9876543210</span>
          </div>
          <div className=" flex items-center gap-3">
            <img src={footerlocation} alt="" />
            <span>Somewhere in the World</span>
          </div>
        </div>
        <div className=" hidden  lg:block mt-5 rounded-full border-text-gray bg-primarygray p-4">
            <div className=" flex justify-between items-center">
                <div className=" flex items-center">
                    <a href="" className=" bg-green1 p-2 rounded-full mr-3">
                        <img src={facebookicon} alt="" />
                    </a>
                    <a href="" className=" bg-green1 p-2 rounded-full mr-3">
                        <img src={twittericon} alt="" />
                    </a>
                    <a href="" className=" bg-green1 p-2 rounded-full mr-3">
                        <img src={linkedinicon} alt="" />
                    </a>
                </div>
                <span>YourBank All Rights Reserved</span>
                <div className="">
                    <span className=" border-r p-2">Privacy Policy</span>
                    <span className=" ml-2">Terms of Service</span>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
