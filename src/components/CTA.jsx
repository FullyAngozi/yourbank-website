const CTA = () => {
  return (
    <div className="w-full font-lexend  text-center mt-10 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className=" lg:flex justify-between p-6">
          <div className=" lg:text-left  max-w-3xl">
              <h5 className="mb-2 text-3xl font-bold text-white dark:text-white">
              Start your financial journey with <span className=" text-green1">YourBank today!</span>
              </h5>
              <p className="mb-5 text-base text-text-gray sm:text-lg dark:text-gray-400">
              Whether you are saving for the future, planning for a major purchase, or seeking personalized investment strategies, our team of dedicated experts is here to provide tailored solutions to meet your individual needs.
              </p>
          </div>
          <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <a
              href="#"
              className="w-full sm:w-auto bg-green1 hover:bg-green2 focus:ring-4 focus:outline-none focus:ring-gray-300 text-black rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <div className="text-left rtl:text-right">
                <div className=" font-lexend text-sm font-semibold">
                  Open Account
                </div>
              </div>
            </a>
          </div>
      </div>
    </div>
  );
};

export default CTA;
