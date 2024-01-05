import { Link } from "react-router-dom"
import socialicon1 from "../assets/socialicon1.svg"
import socialicon2 from "../assets/socialicon2.svg" 
import socialicon3 from "../assets/socialicon3.svg"
import Testimonail from "../components/Testimonail"
const SignUp = () => {
  return (
    <section className=" font-lexend mt-20">
    <div className=" text-center p-10 max-w-6xl mx-auto bg-secondarygray rounded-xl ring ring-lightergray shadow-lightergray">
      <div className=" mb-20">
        <h1 className=" text-green1 text-5xl font-bold my-10">Sign Up</h1>
        <p className=" text-text-gray">
        Join our community today! Create an account to unlock exclusive features and personalized experiences.
        </p>
      </div>
      <form action=" " className=" text-white">
        <div>
          <div className="  text-center mb-10  flex flex-wrap justify-center gap-3 lg:grid lg:grid-cols-2 lg:max-w-3xl mx-auto">
            <input
              type="text"
              id="name"
              placeholder="Enter First Name"
              className=" rounded-full bg-primarygray text-text-gray"
            />
            <input
              type="text"
              id="name"
              placeholder="Enter Last Name"
              className="rounded-full bg-primarygray text-text-gray"
            />
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className=" rounded-full bg-primarygray text-text-gray"
            />
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="rounded-full bg-primarygray text-text-gray"
            />
          </div>
          <Link>
            <span className=" underline">Forget password?</span>
          </Link>

          <button
            type="submit"
            className=" bg-green1 hover:bg-green3 text-black lg:p-3 rounded-xl p-1 w-1/2 block mx-auto my-5"
          >
            Login
          </button>

          <button
            type="submit"
            className="lg:p-3 rounded-xl p-1 w-1/2 block mx-auto my-5 bg-lightergray hover:bg-[#454545]"
          >
            Sign Up
          </button>
          <div className="flex items-center lg:w-1/2 w-[70%] mx-auto">
            <div className="flex-1 border-t border-white w-1/3"></div>
            <span className="px-3 text-text-gray">Or Continue with</span>
            <div className="flex-1 border-t border-white"></div>
          </div>
          <div className=" flex max-w-sm mx-auto justify-evenly my-5 items-center">
            <img src={socialicon1} alt="" />
            <img src={socialicon2} alt="" />
            <img src={socialicon3} alt="" />
          </div>
        </div>
      </form>
    </div>
    <Testimonail />
  </section>
  )
}

export default SignUp