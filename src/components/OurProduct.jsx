import icon from "../assets/Icon.png";
import icon2 from "../assets/Icon1.png"
import icon3 from "../assets/Icon2.png"

const OurProduct = () => {
  return (
    <div className=" mt-10">
      <h1 className=" font-bold text-4xl text-white">
        Our <span className=" text-green1">Products</span>
      </h1>
      <div className=" sm:flex justify-between items-center mb-28">
        <div className=" text-white text-center font-lexend sm:text-left sm:max-w-[600px] flex">
          <p className=" mt-5 leading-relaxed">
            Discover a range of comprehensive and customizable banking products
            at YourBank, designed to suit your unique financial needs and
            aspirations
          </p>
        </div>
        <div className=" text-center sm:flex items-center">
          <button
            type="button"
            className="text-black bg-green1 hover:bg-green2 focus:outline-none focus:ring-4 focus:bg-green2 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            For Individuals
          </button>
          <button className=" text-white">For Businesses</button>
        </div>
      </div>
      <div className=" sm:flex text-center ">
        <div className=" border-b-2 sm:border-r-2 mb-10 sm:border-b-0 border-[#1e1f1e]">
          <img src={icon} alt=""   className=" mx-auto"/>
          <h2 className=" text-white p-4">Checking Accounts</h2>
          <p className=" text-white p-5">
            Enjoy easy and convenient access to your funds with our range of
            checking account options. Benefit from features such as online and
            mobile banking, debit cards, and free ATM access.
          </p>
        </div>
        <div className=" border-b-2 sm:border-r-2 mb-10 sm:border-b-0 border-[#1e1f1e]">
          <img src={icon2} alt=""  className=" mx-auto"/>
          <h2 className=" text-white p-4">Savings Accounts</h2>
          <p className=" text-white p-5">
          Build your savings with our competitive interest rates and flexible savings account options. Whether you are saving for a specific goal or want to grow your wealth over time, we have the right account for you.
          </p>
        </div>
        <div className=" mb-10 border-gray-200">
          <img src={icon3} alt=""  className=" mx-auto"/>
          <h2 className=" text-white p-4">Loans and Mortgages</h2>
          <p className=" text-white p-5">
          Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
