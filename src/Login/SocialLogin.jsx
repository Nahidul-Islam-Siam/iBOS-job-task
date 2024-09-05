

const SocialLogin = () => {
    return (
        <div>
             <div className="flex items-center justify-center mt-6 space-x-4">
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
              </div>
        </div>
    );
};

export default SocialLogin;