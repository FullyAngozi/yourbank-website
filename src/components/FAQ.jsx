
import { FAQs } from "../Faqobject"

const FAQ = () => {

    const FaqCard = ({ card }) => {
        return (
            <div className=" border p-8 text-text-gray max-w-2xl mb-4 rounded-md border-text-gray">
                <h1 className=" border-b pb-3 mb-3 border-text-gray text-white">{card.question}</h1>
                <p>{card.answer}</p>
            </div>
        )
    }
  return (
    <div>
        <div className=" mb-10  max-w-4xl text-center md:text-left">
        <h1 className=" font-lexend font-bold text-2xl lg:text-3xl  mb-3 text-white">
        <span className=" text-green1">Frequently</span> Asked Questions 
        </h1>
        <p className=" text-text-gray font-light">
        Still you have any questions? Contact our Team via support@yourbank.com
        </p>
      </div>
        <div className=" lg:grid grid-cols-2 gap-1 p-1">
            {FAQs.map((card, index) => (
                <FaqCard key={index} card={card} />
            ))}
        </div>
    </div>
  )
}

export default FAQ