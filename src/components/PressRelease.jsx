
import PropTypes from "prop-types";
import { aboutpagecards } from "../heroContent";

const PressRelease = () => {
    const ArticleCard = ({ card }) => {
        return (
            <div className="max-w-xl text-white  p-4 mb-5  bg-secondarygray rounded-3xl shadow-xl">
                <div href="#">
                    <img
                        className="rounded-t-lg"
                        src={card.image}
                        alt=""
                    />
                </div>
                <div className="p-5">
                    <div >
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                            {card.title}
                        </h5>
                    </div>
                    <span className=" p-4 bg-black rounded-full inline-block my-5 mx-0 mr-10">{card.location}</span>
                    <span className=" p-4 bg-black rounded-full inline-block ">{card.date}</span>
                    <p className="mb-3 font-normal text-text-gray dark:text-gray-400">
                        {card.description}
                    </p>
                    
                </div>
            </div>
        );
    };

    ArticleCard.propTypes = {
        card: PropTypes.shape({
            location: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        }).isRequired,
    };

    return (
        <section className=" mt-10">
            <div className=" ">
                <div className=" mb-20 text-center lg:text-left">
                    <h2 className=" font-bold text-3xl text-green1 mb-3">Press Releases</h2>
                    <p className=" text-text-gray text-xl font-light">
                        Stay updated with the latest happenings and exciting developments at
                        YourBank through our press releases.
                    </p>
                </div>
                <div className=" lg:grid lg:grid-cols-2 lg:place-items-center mb-20">
                    {aboutpagecards.map((card, index) => (
                        <ArticleCard key={index} card={card} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PressRelease;
