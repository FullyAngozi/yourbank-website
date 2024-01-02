import contain from "../assets/Container(1).png";
import heroimage from "../assets/heroImage.png"
import abt from "../assets/abstract.png"

const Hero = () => {
  return (
    <div className=" mt-14 overflow-clip">
      <div className=" md:flex gap-10">
        <div className=" text-center md:text-left  max-w-4xl">
          <div className="">
            <img src={contain} alt=""  className=" max-w-[200px] mx-auto md:mx-0"/>
            <h1 className=" text-white font-lexend font-bold text-4xl my-5">Welcome to YourBank Empowering Your <span className=" text-green1">Financial Journey</span></h1>
            <p className=" text-white font-light font-lexend text-sm leading-normal ">
              At YourBank, our mission is to provide comprehensive banking
              solutions that empower individuals and businesses to achieve their
              financial goals. We are committed to delivering personalized and
              innovative services that prioritize our customers needs.
            </p>
            <button className=" bg-green1 mt-10 py-4 px-6 rounded-full">Open Account</button>
          </div>
        </div>
        <div className=" relative max-w-xl">
          <img src={abt} alt="Abstract background image" className="absolute top-0 right-[-20px] -z-[10px]" />
          <img src={heroimage} alt="Hero image" className="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
