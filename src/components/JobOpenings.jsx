import logo from "../assets/briefcase.fill.png";
import { jobPostingcard } from "../heroContent";

const JobOpenings = () => {
  return (
    <section className="font-lexend text-white">
      <div className=" font-lexend mb-10 text-center lg:text-left">
        <h2 className=" font-bold text-green1 text-4xl mb-5">Job Openings</h2>
        <p className=" lg:text-lg text-text-gray font-light  lg:max-w-[70%]">
          Explore exciting job openings at YourBank, where we value talent,
          innovation, and a passion for customer service. Join our team and be
          part of shaping a brighter future in the banking industry
        </p>
      </div>
      {/* Job Opening Card */}
      <div className="lg:grid grid-cols-2">
        {jobPostingcard.map((job, index) => (
          <div key={index} className=" max-w-2xl bg-secondarygray p-10 mb-10 rounded-2xl shadow-xl">
            <div className="mb-10">
              <h3 className=" text-white text-3xl">{job.title}</h3>
              <span className=" text-text-gray">Location: {job.location}</span>
              <span className=" text-text-gray">
                {" "}
                Department: {job.department}
              </span>
            </div>
            <div className=" mb-10">
              <h3 className=" text-3xl ">About This Job</h3>
              <p className=" text-text-gray">{job.description}</p>
            </div>
            <div>
              <h3 className=" text-3xl mb-3">Requirements & Qualifications</h3>
              {job.requirements.map((requirement, index) => (
                <div key={index} className="flex items-center mb-3 ">
                  <img src={logo} alt="" className="mr-5" />
                  <p className="text-text-gray">{requirement}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobOpenings;
