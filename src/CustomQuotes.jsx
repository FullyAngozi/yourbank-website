export const CustomQuotes = [
    {
      "quote": "Our commitment is to provide you with top-notch banking services that cater to your unique needs.",
      "author": "Banking Excellence"
    },
    {
      "quote": "Experience the ease of managing your finances with our user-friendly online banking platform.",
      "author": "Digital Banking Team"
    },
    {
      "quote": "Secure your future with our trusted investment solutions designed to help you achieve your financial goals.",
      "author": "Investment Advisors"
    },
    {
      "quote": "We value your trust and work tirelessly to ensure the security and confidentiality of your financial information.",
      "author": "Security Team"
    },
    {
      "quote": "Empowering businesses with financial solutions that drive growth and success.",
      "author": "Business Banking Experts"
    },
    {
      "quote": "Customer satisfaction is our priority. Your feedback fuels our continuous improvement.",
      "author": "Customer Support Team"
    },
    {
      "quote": "Innovation is at the heart of our banking services, bringing you cutting-edge solutions for a seamless banking experience.",
      "author": "Innovation Team"
    },
    {
      "quote": "Join us on the journey to financial prosperity. YourBank is here to support you every step of the way.",
      "author": "YourBank Team"
    }
  ]


export const CustomCard = ({ Card }) => {
    return (
        <div className="">
             <figure className="max-w-screen-md mx-auto text-center p-6 shadow-2xl">
                <svg
                  className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 14"
                >
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <blockquote>
                  <p className=" text-base lg:text-2xl italic font-medium text-white dark:text-white">
                    {Card.quote}
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                  <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                    <cite className="pe-3 font-medium text-green1 dark:text-white">
                      {Card.author}
                    </cite>
                  </div>
                </figcaption>
              </figure>
        </div>
    )
}
