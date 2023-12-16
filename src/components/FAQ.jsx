import { FAQs } from "../Faqobject";
import { useState } from "react";

const FAQ = () => {
  const [isExpanded, setIsexpanded] = useState(false);
  const [isFaded, setIsFaded] = useState(true);


  const handleExpand = () => {
    setIsexpanded(!isExpanded);
    setIsFaded(!isFaded)
  };

  const FaqCard = ({ card }) => {
    return (
      <div className=" border p-8 text-text-gray max-w-full mb-4 rounded-md border-text-gray">
        <h1 className=" border-b pb-3 mb-3 border-text-gray text-white">
          {card.question}
        </h1>
        <p>{card.answer}</p>
      </div>
    );
  };
  return (
    <div className=" relative">
      <div className=" mb-10  max-w-4xl text-center md:text-left">
        <h1 className=" font-lexend font-bold text-2xl lg:text-3xl  mb-3 text-white">
          <span className=" text-green1">Frequently</span> Asked Questions
        </h1>
        <p className=" text-text-gray font-light">
          Still you have any questions? Contact our Team via{" "}
          <span className=" text-green2 font-semibold">
            support@yourbank.com
          </span>
        </p>
      </div>
      <div className=" lg:grid grid-cols-2 gap-10 p-1">
        {FAQs.slice(0, isExpanded ? FAQs.length : 4).map((card, index) => (
          <FaqCard key={index} card={card} />
        ))}
      </div>
      <div className=" text-center ">
          <button className=" text-white border p-2 " onClick={handleExpand}>
            {!isExpanded ? "show more" : "show less"}
          </button>
      </div>
    </div>
  );
};

export default FAQ;
