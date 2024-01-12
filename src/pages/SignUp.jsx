// Purpose: Sign Up page for the website
import { Link, redirect, useNavigate } from "react-router-dom";
import socialicon1 from "../assets/socialicon1.svg";
import socialicon2 from "../assets/socialicon2.svg";
import socialicon3 from "../assets/socialicon3.svg";
import Testimonail from "../components/Testimonail";
import { useFormik } from "formik";
import * as Yup from "yup";
const SignUp = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      console.log(values);
      navigate("/login");
      
    },
  });

  return (
    <section className=" font-lexend mt-20">
      <div className=" text-center p-10 max-w-6xl mx-auto bg-secondarygray rounded-xl ring ring-lightergray shadow-lightergray">
        <div className=" mb-20">
          <h1 className=" text-green1 text-5xl font-bold my-10">Sign Up</h1>
          <p className=" text-text-gray">
            Join our community today! Create an account to unlock exclusive
            features and personalized experiences.
          </p>
        </div>
        <form onSubmit={formik.handleSubmit} className=" text-white">
          <div>
            <div className="  text-center mb-10  flex flex-wrap justify-center gap-7 lg:grid lg:grid-cols-2 lg:max-w-3xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter First Name"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  className="rounded-full bg-primarygray text-text-gray  w-full"
                />
                {formik.errors.firstName && formik.touched.firstName ? (
                  <div className=" absolute left-0 mt-1 text-red-500 text-xs">
                    {formik.errors.firstName}
                  </div>
                ) : null}
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter Last Name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  className="rounded-full bg-primarygray text-text-gray block w-full"
                />
                {formik.errors.lastName && formik.touched.lastName ? (
                  <div className="absolute top-[-1] left-0 my-1 text-red-500 text-xs">
                    {formik.errors.lastName}
                  </div>
                ) : null}
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className="rounded-full bg-primarygray text-text-gray block w-full"
                />
                {formik.errors.email && formik.touched.email ? (
                  <div className="absolute top-[-1] left-1 mt-1 text-red-500 text-xs">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>

              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  className="rounded-full bg-primarygray text-text-gray block w-full"
                />
                {formik.errors.password && formik.touched.password ? (
                  <div className="absolute top-[-1] left-0 mt-1 text-red-500 text-xs">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
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
  );
};

export default SignUp;
