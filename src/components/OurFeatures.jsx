import { onlineBankingCards, financialToolsCards, customerSupportCards } from "../Card";
const OurFeatures = () => {
  const CardComponent = ({ card }) => {
    return (
      <div className="max-w-full p-8  border border-gray-500 bg-secondarygray rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5">
        <a href="#">
          <h5 className="mb-2 text-2xl text-white font-lexendfont-bold tracking-tight dark:text-white">
            {card.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-text-gray dark:text-gray-400">
          {card.description}
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-green1 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    );
  };

  const cardData = [
    {
      title: "24/7 Account Access",
      description:
        "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.",
      link: "#",
    },
    {
      title: "Mobile Banking App",
      description:
        "Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.",
      link: "#",
    },
    {
      title: "Secure Transactions",
      description:
        "Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.",
      link: "#",
    },
    {
      title: "Bill Pay and Transfers",
      description:
        "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.",
      link: "#",
    },
  ];

  return (
    <>
      <div className=" mb-10  max-w-4xl text-center md:text-left">
        <h1 className=" font-lexend font-bold text-3xl mb-3 text-white">
          Our <span className=" text-green1">Features</span>{" "}
        </h1>
        <p className=" text-text-gray font-light">
          Experience a host of powerful features at YourBank, including seamless
          online banking, secure transactions, and personalized financial
          insights, all designed to enhance your banking experience
        </p>
      </div>
      <div className="mb-4  border-gray-200 dark:border-gray-700">
        <div className=" md:flex gap-16 ">
          <ul
            className="flex   text-sm p-4 mb-8 font-medium text-center md:flex-col"
            id="default-tab"
            data-tabs-toggle="#default-tab-content"
            role="tablist"
          >
            <li className="me-2" role="presentation">
              <button
                className="inline-block p-4 border-b-2 rounded-t-lg focus:text-green1 focus:border-green1"
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Online Banking
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className="inline-block p-4 border-b-2 rounded-t-lg focus:text-green1 focus:border-green1"
                id="dashboard-tab"
                data-tabs-target="#dashboard"
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected="false"
              >
                Financial Tools
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className="inline-block p-4 border-b-2 rounded-t-lg focus:text-green1 focus:border-green1"
                id="settings-tab"
                data-tabs-target="#settings"
                type="button"
                role="tab"
                aria-controls="settings"
                aria-selected="false"
              >
                Customer Support
              </button>
            </li>
          </ul>
          {/* interactive tabs content */}
          <div id="default-tab-content">
            <div
              className="hidden rounded-lg "
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="  md:grid md:grid-cols-2 md:gap-10">
                {onlineBankingCards.map((card, index) => (
                  <CardComponent key={index} card={card} />
                ))}
              </div>
            </div>
            {/* financial tabs */}
            <div
              className="hidden rounded-lg"
              id="dashboard"
              role="tabpanel"
              aria-labelledby="financial-tab"
            >
              <div className=" md:grid md:grid-cols-2 md:gap-10">
                {financialToolsCards.map((card, index) => (
                  <CardComponent key={index} card={card} />
                ))}
              </div>
            </div>
            {/* customer tabs */}
            <div
              className="hidden rounded-lg"
              id="settings"
              role="tabpanel"
              aria-labelledby="settings-tab"
            >
              <div className="  md:grid md:grid-cols-2 md:gap-10">
                {customerSupportCards.map((card, index) => (
                  <CardComponent key={index} card={card} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurFeatures;
