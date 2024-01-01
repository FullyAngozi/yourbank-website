import benefitlogo1 from "../assets/benefitlogo1.png";
import benefitlogo2 from "../assets/benefitlogo2.png";
import benefitlogo3 from "../assets/benefitlogo3.png";
import benefitlogo4 from "../assets/benefitlogo4.png";

const OurBenefits = () => {
  return (
    <section className="my-20 ">
      <div className=" font-lexend mb-10 text-center lg:text-left">
        <h2 className=" font-bold text-white text-4xl mb-5">
          Our <span className=" text-green1">Benefits</span>
        </h2>
        <p className=" lg:text-lg text-text-gray font-light  lg:max-w-[70%]">
          At YourBank, we value our employees and are dedicated to their
          well-being and success. We offer a comprehensive range of benefits
          designed to support their personal and professional growth.
        </p>
      </div>

      { /**  */}
      <div className=" lg:grid lg:grid-cols-2 gap-10 gap-y-10">
        <div className=" rounded-tl-3xl rounded-br-3xl p-10 bg-secondarygray shadow-inner shadow-green3 text-center">
          <div className=" flex items-center">
            <img src={benefitlogo1} alt="" className=" w-14 mr-10" />
            <span className=" text-white">Competitive Compensation</span>
          </div>
          <p className=" text-text-gray lg:text-xl mb-3 lg:mb-0 mt-10">
            We conduct ourselves with utmost honesty, transparency, and ethical
            behavior. We believe in doing what is right for our customers,
            colleagues, and stakeholders, even when faced with difficult
            choices.
          </p>
        </div>
        <div className=" p-10 bg-secondarygray  rounded-tr-3xl rounded-bl-3xl shadow-inner shadow-green3 ">
          <div className=" flex items-center">
            <img src={benefitlogo2} alt="" className=" w-12 mr-10" />
            <span className=" text-white">Health and Wellness</span>
          </div>
          <p className=" text-text-gray lg:text-xl mb-3 lg:mb-0 mt-10">
            We prioritize the health and well-being of our employees by
            providing comprehensive medical, dental, and vision insurance plans.
            We also offer wellness programs, gym memberships, and resources to
            support a healthy lifestyle.
          </p>
        </div>
        <div className=" p-10 bg-secondarygray  rounded-tr-3xl rounded-bl-3xl shadow-inner shadow-green3 ">
          <div className=" flex items-center">
            <img src={benefitlogo3} alt="" className=" w-14 mr-10" />
            <span className=" text-white">Retirement Planning</span>
          </div>
          <p className=" text-text-gray lg:text-xl mb-3 lg:mb-0 mt-10">
            YourBank is committed to helping employees plan for their future. We
            offer a retirement savings plan with a generous employer match to
            help them build a secure financial foundation for the long term.
          </p>
        </div>
        <div className=" p-10 bg-secondarygray  rounded-tl-3xl rounded-br-3xl shadow-inner shadow-green3 ">
          <div className=" flex items-center">
            <img src={benefitlogo4} alt="" className=" w-14 mr-10" />
            <span className=" text-white">Work-Life Balance</span>
          </div>
          <p className=" text-text-gray lg:text-xl mb-3 lg:mb-0 mt-10">
            We understand the importance of maintaining a healthy work-life
            balance. YourBank offers flexible work arrangements, paid time off,
            parental leave, and other programs that support employees in
            managing their personal and professional commitments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurBenefits;
