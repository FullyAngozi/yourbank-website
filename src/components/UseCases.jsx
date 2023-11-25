import icon1 from "../assets/usecaseicon1.png";
import icon2 from "../assets/usecaseicon2.png";
import icon3 from "../assets/usecaseicon3.png";
import icon4 from "../assets/usecaseicon4.png";
import icon5 from "../assets/usecaseicon5.png";
import icon6 from "../assets/usecaseicon6.png";
import icon7 from "../assets/usecaseicon7.png";
import icon8 from "../assets/usecaseicon8.png";
import abt from "../assets/abstract2.png";

const UseCases = () => {
  return (
    <div className=" mt-20 p-3">
      <div className=" text-center">
        <h1 className=" text-green1 font-bold text-3xl">Use Cases</h1>
        <p className="  text-gray-200 p-2">
          At YourBank, we cater to the diverse needs of individuals and
          businesses alike, offering a wide range of financial solutions
        </p>
      </div>
      <div className=" grid md:grid-cols-2 mt-20 relative gap-10 gap-y-20 mb-20">
        <img
          src={abt}
          alt="background design"
          className=" absolute top-0 left-[-10px] z-10"
        />
        <div className=" bg-[#1e1f1e] p-4 grid grid-cols-2 gap-2 rounded-3xl">
          <div className=" p-6 bg-black rounded-lg shadow text-center">
            <img src={icon1} alt="" className="mx-auto w-8 mb-5" />
            <p className="mb-3 font-normal text-white ">
              Managing Personal Finances
            </p>
          </div>
          <div className=" p-6 bg-black rounded-lg shadow text-center">
            <img src={icon2} alt="" className="mx-auto w-8 mb-5" />
            <p className="mb-3 font-normal text-white ">
              Saving for the Future
            </p>
          </div>
          <div className=" p-6 bg-black rounded-lg shadow text-center">
            <img src={icon3} alt="" className="mx-auto w-8 mb-5" />
            <p className="mb-3 font-normal text-white ">Homeownership</p>
          </div>
          <div className=" p-6 bg-black rounded-lg shadow text-center">
            <img src={icon4} alt="" className="mx-auto w-8 mb-5" />
            <p className="mb-3 font-normal text-white ">Education Funding</p>
          </div>
        </div>
        <div className=" text-center md:text-left">
          <div>
            <h1 className=" text-white text-2xl font-bold font-lexend mb-5">
              For Individuals
            </h1>
            <p className=" text-text-gray font-light font-lexend mb-5">
              For individuals, our mortgage services pave the way to
              homeownership, and our flexible personal loans provide vital
              support during various life milestones. We also prioritize
              retirement planning, ensuring a financially secure future for our
              customers
            </p>
          </div>
          <div className=" md:flex">
            <div className="p-5 border-b-text-gray border-b border-dashed md:border-b-0 md:border-r">
              <span className=" text-3xl font-bold text-green1">78%</span>
              <p className=" font-lexend font-light text-text-gray mt-5 mb-5">
                Secure Retirement Planning
              </p>
            </div>
            <div className="p-5 border-b-text-gray border-b border-dashed  md:border-b-0 md:border-r">
              <span className=" text-3xl font-bold text-green1">63%</span>
              <p className=" font-lexend font-light text-text-gray mt-5 mb-5">
                Manageable Debt Consolidation
              </p>
            </div>
            <div className="p-5 border-b-text-gray border-b border-dashed  md:border-b-0">
              <span className=" text-3xl font-bold text-green1">91%</span>
              <p className=" font-lexend font-light text-text-gray mt-5 mb-5">
                Reducing financial burdens
              </p>
            </div>
          </div>
          <button
            type="button"
            className="text-white mt-5 border border-text-gray focus:outline-none hover:bg-green1 hover:text-black focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 md:left"
          >
            Learn More
          </button>
        </div>
        <div className=" bg-[#1e1f1e] p-4 grid grid-cols-2 gap-2 rounded-3xl md:order-last">
          <div className=" p-6 bg-black rounded-lg shadow text-center">
            <img src={icon5} alt="" className="mx-auto w-20 mb-5" />
            <p className="mb-3 font-normal text-white ">
              Managing Personal Finances
            </p>
          </div>
          <div className=" p-6 bg-black rounded-lg shadow text-center">
            <img src={icon6} alt="" className="mx-auto w-20 mb-5" />
            <p className="mb-3 font-normal text-white ">
              Saving for the Future
            </p>
          </div>
          <div className=" p-6 bg-black rounded-lg shadow text-center">
            <img src={icon7} alt="" className="mx-auto w-20 mb-5" />
            <p className="mb-3 font-normal text-white ">Homeownership</p>
          </div>
          <div className=" p-6 bg-black rounded-lg shadow text-center">
            <img src={icon8} alt="" className="mx-auto w-20 mb-5" />
            <p className="mb-3 font-normal text-white ">Education Funding</p>
          </div>
        </div>
        <div className=" text-center md:text-left md:order-2">
          <div>
            <h1 className=" text-white text-2xl font-bold font-lexend mb-5">
            For Business
            </h1>
            <p className=" text-text-gray font-light font-lexend mb-5">
            For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them
            </p>
          </div>
          <div className=" md:flex">
            <div className="p-5 border-b-text-gray border-b border-dashed md:border-b-0 md:border-r">
              <span className=" text-3xl font-bold text-green1">65%</span>
              <p className=" font-lexend font-light text-text-gray mt-5 mb-5">
                Secure Retirement Planning
              </p>
            </div>
            <div className="p-5 border-b-text-gray border-b border-dashed  md:border-b-0 md:border-r">
              <span className=" text-3xl font-bold text-green1">70%</span>
              <p className=" font-lexend font-light text-text-gray mt-5 mb-5">
              Drive Business Expansion
              </p>
            </div>
            <div className="p-5 border-b-text-gray border-b border-dashed  md:border-b-0 ">
              <span className=" text-3xl font-bold text-green1">45%</span>
              <p className=" font-lexend font-light text-text-gray mt-5 mb-5">
              Streamline payroll processing
              </p>
            </div>
          </div>
          <button
            type="button"
            className="text-white mt-5 border border-text-gray focus:outline-none hover:bg-green1 hover:text-black focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 md:left"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseCases;
