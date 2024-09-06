import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useAuth();
  const navigate = useNavigate(); // Import useNavigate for redirection
const location=useLocation()
const from = location?.state || "/"
  // const handleGoogleLogin = () => {
  //   googleLogin()
  //     .then(result => {
  //       console.log(result.user);
  //       // Redirect to home after successful login
  //       navigate("/");
  //     })
  //     .catch(error => {
  //       console.log(error.message);
  //     });
  // };


const handleSocialLogin =(socialProvider)=>{
  socialProvider()
  .then(result=>{
  if(result.user){
    navigate(from)
  }

  })
  .catch(error=>{
console.log(error.message);

  })
}

  // const handleGithubLogin = () => {
  //   githubLogin()
  //     .then(result => {
  //       console.log(result.user);
  //       // Redirect to home after successful login
  //       navigate("/");
  //     })
  //     .catch(error => {
  //       console.log(error.message);
  //     });
  // };

  return (
    <div>
      <div className="flex items-center justify-center mt-6 space-x-4">
        <button onClick={()=>handleSocialLogin(googleLogin)} className="flex items-center justify-center border px-4 py-2 rounded-md gap-2">
          <FcGoogle />
          Sign In with Google
        </button>
        <button onClick={()=>handleSocialLogin(githubLogin)} className="flex items-center justify-center border px-4 py-2 gap-2 rounded-md">
          <FaGithub />
          Sign In with GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
