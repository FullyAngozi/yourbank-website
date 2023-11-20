import contain from "../assets/Container(1).png";
import heroimage from "../assets/heroImage.png"
import abt from "../assets/abstract.png"

const Hero = () => {
  return (
    <div className=" mt-14">
      <div className=" md:flex gap-5">
        <div className=" text-center md:text-left">
          <img src={contain} alt=""  className=" max-w-[200px] mx-auto md:mx-0"/>
          <h1 className=" text-white font-lexend font-bold text-4xl mt-5 leading-normal">Welcome to YourBank Empowering Your <span className=" text-green1">Financial Journey</span></h1>
          <p className=" text-white font-light font-lexend text-sm leading-normal">
            At YourBank, our mission is to provide comprehensive banking
            solutions that empower individuals and businesses to achieve their
            financial goals. We are committed to delivering personalized and
            innovative services that prioritize our customers needs.
          </p>
          <button className=" bg-green1 mt-3 py-4 px-6 rounded-full">Open Account</button>
        </div>
        <div className=" relative max-h-[70%] ">
          <img src={abt} alt="Abstract background image" className="absolute top-0 right-[-20px] -z-[10px]" />
          <img src={heroimage} alt="Hero image" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
