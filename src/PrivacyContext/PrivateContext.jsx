import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
export const UsePrivateContext = createContext();
import { GoogleAuthProvider } from "firebase/auth";
import auth from "./firebase.config";
import { GithubAuthProvider } from "firebase/auth";

const PrivateContext = ({ children }) => {
  const [closeEye, setCloseEye] = useState(true);
  const [isRegistration, setIsRegistration] = useState(false);
  // const [user, setUser] = useState([]);

  // providers
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // create user with email and password
  // const createUserWithEmailAndPass = () => {
  //   return createUserWithEmailAndPassword()
  //     .then((user) => user.user)
  //     .catch((e) => console.error(e));
  // };

  // create user with Google
  const createUserWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((user) => user.user)
      .catch((e) => console.error(e));
  };

  // create user with Github
  const createUserWithGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((user) => user.user)
      .catch((e) => console.error(e));
  };

  // Login Registration Button
  const loginRegistrationBtn = () => {
    const modal = document.getElementById("my_modal_5");
    if (modal) {
      modal.showModal();
    }
  };
  // From data handle
  const getValueOfFrom = () => {};

  // useEffect(() => {
  //   const modal = document.getElementById("my_modal_5");
  //   if (modal) {
  //     modal.showModal();
  //   }
  // }, []);

  //PopUp windrow
  const loginOrRegistrationPopUp = (
    <>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-red-500 bg-red-100 hover:bg-red-200 border-0 hover:scale-105 transition-transform">
              ✕
            </button>
          </form>

          {isRegistration ? (
            // Registration section
            <>
              {/* //from Body for Registration*/}
              <form onSubmit={getValueOfFrom} className="bg-white">
                <h2 className="underline md:text-3xl text-xl font-semibold text-center text-gray-700 mb-4">
                  Please Register
                </h2>
                {/* Name Field */}
                <div className="md:mb-4 mb-4 flex flex-col md:flex-row gap-0 md:gap-4">
                  <div className="md:mb-0 mb-4">
                    <label className="block text-gray-600 font-medium mb-1">
                      First name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter First name"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 font-medium mb-1">
                      Last name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Last name"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                </div>

                {/* Photo URL */}
                <div className="mb-4">
                  <label className="block text-gray-600 font-medium mb-1">
                    Photo URL
                  </label>
                  <input
                    type="url"
                    placeholder="Enter Photo URL"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="mb-4">
                  <label className="block text-gray-600 font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                {/* Password Field */}
                <div className="mb-4 relative">
                  <label className="block text-gray-600 font-medium mb-1">
                    Password
                  </label>
                  <input
                    type={closeEye ? "password" : "text"}
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                  <div className="absolute right-2 top-9 p-1 text-lg hover:cursor-pointer ">
                    {closeEye ? (
                      <div
                        onClick={() => setCloseEye(false)}
                        className="duration-1"
                      >
                        <IoIosEye />
                      </div>
                    ) : (
                      <div onClick={() => setCloseEye(true)} className="">
                        <IoIosEyeOff />
                      </div>
                    )}
                  </div>

                  {/* Register Link */}
                  <p className="text-center text-gray-600 mt-4">
                    Already have an account, Please{" "}
                    <span
                      onClick={() => setIsRegistration(false)}
                      className="text-[#0c40a0] font-bold hover:underline hover:cursor-pointer"
                    >
                      Login
                    </span>
                  </p>
                </div>
                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-2 rounded-lg font-medium hover:bg-green-600 transition"
                >
                  Register
                </button>
              </form>
            </>
          ) : (
            // LoginSection
            <>
              {/* //from Body for Registration*/}
              <form onSubmit={getValueOfFrom} className="bg-white">
                <h2 className="underline md:text-3xl text-xl font-semibold text-center text-gray-700 mb-4">
                  Please Login
                </h2>
                {/* Email Field */}
                <div className="mb-4">
                  <label className="block text-gray-600 font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Password Field */}
                <div className="mb-4 relative">
                  <label className="block text-gray-600 font-medium mb-1">
                    Password
                  </label>
                  <input
                    type={closeEye ? "password" : "text"}
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <div className="absolute right-2 top-9 p-1 text-lg hover:cursor-pointer ">
                    {closeEye ? (
                      <div
                        onClick={() => setCloseEye(false)}
                        className="duration-1"
                      >
                        <IoIosEye />
                      </div>
                    ) : (
                      <div onClick={() => setCloseEye(true)} className="">
                        <IoIosEyeOff />
                      </div>
                    )}
                  </div>
                  <div className="text-right mt-2">
                    <a
                      href="#"
                      className="text-sm text-blue-500 hover:underline"
                    >
                      <span>Forgot password?</span>
                    </a>
                  </div>
                  {/* Register Link */}
                  <p className="text-center text-gray-600 mt-4">
                    New to this website?{" "}
                    <span
                      onClick={() => setIsRegistration(true)}
                      className="text-[#1eb81e] font-medium hover:underline hover:cursor-pointer"
                    >
                      Register
                    </span>
                  </p>
                </div>
                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition"
                >
                  Login
                </button>
              </form>
            </>
          )}
        </div>
      </dialog>
    </>
  );

  const value = {
    loginRegistrationBtn,
    createUserWithGoogle,
    createUserWithGithub,
  };
  return (
    <UsePrivateContext.Provider value={value}>
      {children}
      {/* The modal must be inside the return so it renders */}
      {loginOrRegistrationPopUp}
    </UsePrivateContext.Provider>
  );
};

export default PrivateContext;
