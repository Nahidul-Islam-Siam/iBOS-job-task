
import { FcGoogle, } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div>
             <div className="flex items-center justify-center mt-6 space-x-4">
                <button className="flex items-center justify-center border px-4 py-2 rounded-md gap-2">
                <FcGoogle/>
                  Sign Up with Google
                </button>
                <button className="flex items-center justify-center border px-4 py-2 gap-2 rounded-md">
                 <FaGithub/>
                  Sign Up with Github
                </button>
              </div>
        </div>
    );
};

export default SocialLogin;