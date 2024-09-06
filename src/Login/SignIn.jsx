import { Link } from "react-router-dom";
import bgImg from "../assets/bgChair.png";
import SocialLogin from "./SocialLogin";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContex } from "../FirebaseProvider.jsx/FirebaseProvider";

const SignIn = () => {
  const { signInUser } = useContext(AuthContex);
  
  const { register, handleSubmit, formState: { errors } } = useForm();

  // State for toggling password visibility
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    const { email, password } = data;
    signInUser(email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <div className="w-full min-h-screen">
      <div className="flex items-center justify-center w-full">
        <div className="grid md:grid-cols-2 items-center gap-0 w-full max-w-[100%] p-4 m-0 shadow-lg rounded-md">
          
          {/* Left section: SignIn Form */}
          <div className="md:w-full w-full p-28 bg-white border rounded-md">
            <h3 className="text-gray-800 text-3xl font-extrabold">
              Welcome Back
            </h3>
            <p className="text-sm text-gray-600">
              Enter your credentials to access your account
            </p>

            <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
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
                  className={`bg-gray-50 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } text-gray-900 text-sm rounded-lg p-2.5 w-full`}
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="mt-4 relative">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className={`bg-gray-50 border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } text-gray-900 text-sm rounded-lg p-2.5 w-full`}
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password.message}
                  </p>
                )}
                {/* Button to toggle password visibility */}
                <button
                  type="button"
                  className="absolute right-2 top-10 text-sm text-gray-600"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <div className="flex items-center mt-4">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  {...register("terms", { required: true })}
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-800">
                  I agree to the <a href="#" className="text-blue-600 underline">Terms & Policy</a>
                </label>
                {errors.terms && (
                  <p className="text-red-500 text-xs ml-2">
                    You must agree to continue
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full mt-6 py-2.5 px-4 bg-blue-600 text-white text-sm font-semibold rounded-md shadow hover:bg-blue-700"
              >
                Sign In
              </button>

              <h3 className="text-center mt-1">or</h3>

              <SocialLogin />

              <p className="mt-6 text-sm text-center text-gray-600">
                Don't have an account?{" "}
                <Link to="/signUp" className="text-blue-600 font-semibold hover:underline">
                  Sign Up
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
                Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
