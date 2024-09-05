import SocialLogin from "./SocialLogin";
import bgImg from "../assets/bgChair.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContex } from "../FirebaseProvider.jsx/FirebaseProvider";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { createUser } = useContext(AuthContex);

  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = (data) => {
   const {email,password} = data
   createUser(email,password)
   .then(result=>{
    console.log(result);
    
   })
  };

  return (
    <div className="font-[sans-serif] w-full min-h-screen">
      <div className="flex items-center justify-center w-full">
        <div className="grid md:grid-cols-2 items-center gap-0 w-full max-w-[100%] p-4 m-0 shadow-lg rounded-md">
          {/* Left section: Signup Form */}
          <div className="md:w-full w-full p-24 bg-white border rounded-md">
            <div className="text-center">
              <h3 className="text-gray-700 text-xl font-extrabold">
                Welcome To <br />
                <span className="text-4xl text-gray-800">
                  Furni<span className="text-blue-600">Flex</span>
                </span>
              </h3>
              <p className="text-sm mt-4 text-gray-600">
                Signup for purchase your desired products
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    First name (optional)
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 w-full"
                    placeholder="First Name"
                    {...register("firstName")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Last name (optional)
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 w-full"
                    placeholder="Last Name"
                    {...register("lastName")}
                  />
                </div>
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
                  placeholder="name@company.com"
                  {...register("email", { required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                   })}
                />
                {errors.email && (
                  <p className="text-red-600 text-sm">Email is required</p>
                )}
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
                  placeholder="••••••••"
                  {...register("password", 
                    
                    { required: true ,
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                />
                {errors.password && (
                  <p className="text-red-600 text-sm">Password is required</p>
                )}
              </div>

              <div className="flex items-center mt-4">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  {...register("terms", { required: true })}
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-800">
                  I agree to the{" "}
                  <a href="#" className="text-blue-600 underline">
                    Terms & Policy
                  </a>
                </label>
                {errors.terms && (
                  <p className="text-red-600 text-sm">You must agree to the terms</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full mt-6 py-2.5 px-4 bg-blue-600 text-white text-sm font-semibold rounded-md shadow hover:bg-blue-700"
              >
                Sign Up
              </button>

              <h3 className="text-center mt-1">or</h3>

              <SocialLogin />

              <p className="mt-6 text-sm text-center text-gray-600">
                Have an account?{" "}
                <Link
                  to={"/signIn"}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>

          {/* Right section: Product Image */}
          <div
            className="md:w-full w-full md:h-full bg-cover relative rounded-xl lg:p-12 p-8 text-white flex flex-col justify-center"
            style={{ backgroundImage: `url(${bgImg})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold">
                Furni<span className="text-blue-500">Flex</span>
              </h3>
              <p className="mt-4 text-lg">
                Discover a seamless shopping experience with our curated collection
                of products. From fashion to electronics, we bring quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
