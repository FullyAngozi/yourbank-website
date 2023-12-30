import aboutpageheroimage from "../assets/aboutpageheroimage.png";

const ReusableHero = ({ content }) => {
  return (
    <section className="mt-10 font-lexend">
      <div className="grid md:grid-cols-2  md:gap-10 mx-auto bg-secondarygray relative justify-between items-center">
        <div className="max-w-xl lg:order-1">
          <img src={aboutpageheroimage} alt="" className="w-full" />
        </div>
        <div>
          <div className="block max-w-3xl p-6 bg-primarygray rounded-lg shadow text-center lg:text-left dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <span className="text-sm text-white dark:text-gray-400">
              {content.subtitle}
            </span>
            <h1 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
              {content.title}
            </h1>
            <p className="font-normal text-text-gray dark:text-gray-400">
              {content.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};



export default ReusableHero;
