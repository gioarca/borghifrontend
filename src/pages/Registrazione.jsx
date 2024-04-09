import React, { useRef, useState, useEffect } from "react";

// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const REGISTER_URL = "/register";

function Registrazione() {
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  //   const [errMsg, setErrMsg] = useState("");
  //   const [success, setSuccess] = useState(false);

  //   useEffect(() => {
  //     userRef.current.focus();
  //   }, []);

  //   useEffect(() => {
  //     setValidName(USER_REGEX.test(user));
  //   }, [user]);

  //   useEffect(() => {
  //     setValidPwd(PWD_REGEX.test(pwd));
  //     setValidMatch(pwd === matchPwd);
  //   }, [pwd, matchPwd]);

  //   useEffect(() => {
  //     setErrMsg("");
  //   }, [user, pwd, matchPwd]);

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     // if button enabled with JS hack
  //     const v1 = USER_REGEX.test(user);
  //     const v2 = PWD_REGEX.test(pwd);
  //     if (!v1 || !v2) {
  //       setErrMsg("Invalid Entry");
  //       return;
  //     }
  //     try {
  //       const response = await axios.post(
  //         REGISTER_URL,
  //         JSON.stringify({ user, pwd }),
  //         {
  //           headers: { "Content-Type": "application/json" },
  //           withCredentials: true,
  //         }
  //       );
  //       console.log(response?.data);
  //       console.log(response?.accessToken);
  //       console.log(JSON.stringify(response));
  //       setSuccess(true);
  //       //clear state and controlled inputs
  //       //need value attrib on inputs for this
  //       setUser("");
  //       setPwd("");
  //       setMatchPwd("");
  //     } catch (err) {
  //       if (!err?.response) {
  //         setErrMsg("No Server Response");
  //       } else if (err.response?.status === 409) {
  //         setErrMsg("Username Taken");
  //       } else {
  //         setErrMsg("Registration Failed");
  //       }
  //       errRef.current.focus();
  //     }
  //   };

  const handleSignUp = () => {
    // Simulated registration logic
    console.log("Email:", email);
    console.log("Password:", password);
    // Add your actual registration logic here
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Sign up</h1>
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:bg-white hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline mt-5">
                  <div className="bg-white p-2 rounded-full">
                    <svg className="w-4" viewBox="0 0 533.5 544.3">
                      <path
                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                        fill="#4285f4"
                      />
                      <path
                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                        fill="#34a853"
                      />
                      <path
                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                        fill="#fbbc04"
                      />
                      <path
                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                        fill="#ea4335"
                      />
                    </svg>
                  </div>
                  <span className="ml-4">Continua con Google</span>
                </button>

                <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:bg-white hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline mt-5">
                  <div className="bg-white p-1 rounded-full">
                    <svg className="w-6" viewBox="0 0 32 32">
                      <path
                        fillRule="evenodd"
                        d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"
                      />
                    </svg>
                  </div>
                  <span className="ml-4">Continua con GitHub</span>
                </button>
              </div>

              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  <p>Oppure continua con Email</p>
                </div>
              </div>

              <div className="lg:max-w-l flex flex-col items-center">
                {/* Input fields for email and password */}
                <input
                  className="w-full max-w-xs px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <input
                  className="w-full max-w-xs px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                {/* Sign up button */}
                <button
                  className="w-full max-w-xs font-bold shadow-sm py-3 flex items-center justify-center bg-red-800 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline mt-5"
                  onClick={handleSignUp}
                >
                  <span>Iscriviti</span>
                </button>
                {/* Agreement text */}
                <p className="m-5 text-xs text-gray-600 text-center">
                  Continuando accetti i &nbsp;
                  <a href="" className="border-b border-gray-500 border-dotted">
                    termini del servizio
                  </a>
                  &nbsp; e la &nbsp;
                  <a href="" className="border-b border-gray-500 border-dotted">
                    privacy policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registrazione;
