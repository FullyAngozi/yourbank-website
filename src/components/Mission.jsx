import aboutpageimage1 from "../assets/aboutpageimage1.png";
import aboutpageimage2 from "../assets/aboutpageimage2.png";
const Mission = () => {
  return (
    <section className="mt-10 text-white">
      <div className=" font-lexend mb-10">
        <h2 className=" text-green1">Mission & Vision</h2>
        <p>
          Our mission is to provide a safe, supportive, and fun environment for
          kids to learn and grow.
        </p>
      </div>
      <div className=" lg:flex items-center justify-around">
        <div className=" max-w-sm">
          <img src={aboutpageimage1} alt="" />
        </div>
        <div className=" max-w-lg">
          <span>Mission</span>
          <p>
            At YourBank, our mission is to empower our customers to achieve
            financial success. We are dedicated to delivering innovative banking
            solutions that cater to their unique needs. Through personalized
            services, expert guidance, and cutting-edge technology, we aim to
            build strong, lasting relationships with our customers. Our mission
            is to be their trusted partner, helping them navigate their
            financial journey and realize their dreams.
          </p>
        </div>
      </div>
      <div className=" lg:flex items-center justify-around">
          <div className=" max-w-sm lg:order-1">
            <img src={aboutpageimage2} alt="" />
          </div>
          <div className=" max-w-lg">
              <span>Vision</span>
              <p>
                Our vision at YourBank is to redefine banking by creating a seamless
                and personalized experience for our customers. We envision a future
                where banking is accessible, transparent, and tailored to individual
                preferences. Through continuous innovation and collaboration, we
                strive to be at the forefront of the industry, setting new standards
                for customer-centric banking. Our vision is to be the preferred
                financial institution, known for our unwavering commitment to
                excellence, trust, and customer satisfaction.
              </p>
          </div>
      </div>
    </section>
  );
};

export default Mission;
