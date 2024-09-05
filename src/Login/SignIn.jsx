import { Link } from "react-router-dom";
import bgImg from "../assets/bgChair.png";
import SocialLogin from "./SocialLogin";


const SignUp = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="flex items-center justify-center w-full">
        <div className="grid md:grid-cols-2 items-center gap-0 w-full max-w-[100%] p-4 m-0 shadow-lg rounded-md">

          {/* Left section: Signup Form */}
          <div className="md:w-full w-full p-28 bg-white border rounded-md">
            <h3 className="text-gray-800 text-3xl font-extrabold ">
            <span> Welcome To</span>
            </h3>
            <p className="text-sm  text-gray-600">
            Enter your Credentials to access your account
            </p>

            <form className="mt-2">
              <div className="grid grid-cols-2 gap-4">
                {/* <div>
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 w-full"
                    placeholder="First Name"
                    required
                  />
                </div> */}
                {/* <div>
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 w-full"
                    placeholder="Last Name"
                    required
                  />
                </div> */}
              </div>

              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 w-full"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 w-full"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="flex items-center mt-4">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-800">
                  I agree to the <a href="#" className="text-blue-600 underline">Terms & Policy</a>
                </label>
              </div>

              <button
                type="button"
                className="w-full mt-6 py-2.5 px-4 bg-blue-600 text-white text-sm font-semibold rounded-md shadow hover:bg-blue-700"
              >
                Sign Up
              </button>
<h3 className="text-center mt-1">or</h3>
              {/* <div className="flex items-center justify-center mt-6 space-x-4">
                <button className="flex items-center justify-center border px-4 py-2 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    fill="#DB4437"
                    viewBox="0 0 48 48"
                  >
                    <path d="M24 9.5c3.1 0 5.8 1.2 7.7 3.1l5.7-5.7C33.7 3.4 29.1 1.5 24 1.5c-7 0-13 4.5-15.2 10.8l6.8 5.4C16.9 13 20.2 9.5 24 9.5z" />
                  </svg>
                  Sign Up with Google
                </button>
                <button className="flex items-center justify-center border px-4 py-2 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    fill="#000000"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 2v3H8V2H5v3H3.5A1.5 1.5 0 002 6.5v11A1.5 1.5 0 003.5 19H5v3h3v-3h8v3h3v-3h1.5A1.5 1.5 0 0022 17.5v-11A1.5 1.5 0 0020.5 5H19V2h-3zM16 14h-2v2h-4v-2H8v-4h2V8h4v2h2v4z" />
                  </svg>
                  Sign Up with Apple
                </button>
              </div> */}
              <SocialLogin/>

              <p className="mt-6 text-sm text-center text-gray-600">
                Already have an account? <Link to="/signUp" className="text-blue-600 font-semibold hover:underline">Sign In</Link>
              </p>
            </form>
          </div>

          {/* Right section: Product Image */}
          <div
            className="md:w-full w-full md:h-full bg-cover relative rounded-xl lg:p-12 p-8 text-white flex flex-col justify-center"
            style={{ backgroundImage: `url(${bgImg})` }}
          >
            {/* Overlay for better contrast */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold">
                Furni<span className="text-blue-500">Flex</span>
              </h3>
              <p className="mt-4 text-lg">
                Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
