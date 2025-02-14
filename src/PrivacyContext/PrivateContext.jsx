import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "./firebase.config";
import { GithubAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";

export const UsePrivateContext = createContext();
const PrivateContext = ({ children }) => {
  const [closeEye, setCloseEye] = useState(true);
  const [isRegistration, setIsRegistration] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // providers
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // create user with Google
  const createUserWithGoogle = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((user) => {
        // console.log(user.user);
        setUser(user.user);
        Swal.fire({
          title: "successfully\n Sign in With Google.",
          icon: "success",
          draggable: true,
        });
      })
      .catch((e) => {
        Swal.fire({
          title: `${e.message}`,
          icon: "error",
          draggable: true,
        });
        console.error(e.message);
      });
  };

  // create user with Github
  const createUserWithGithub = () => {
    setLoading(true);
    signInWithPopup(auth, githubProvider)
      .then((user) => {
        Swal.fire({
          title: "successfully\n Sign in with Github",
          icon: "success",
          draggable: true,
        });
        // console.log(user.user);
        setUser(user.user);
      })
      .catch((e) => {
        Swal.fire({
          title: `${e.message}`,
          icon: "error",
          draggable: true,
        });
        console.error(e.message);
      });
  };

  // Login Registration Button
  const loginRegistrationBtn = () => {
    const modal = document.getElementById("my_modal_5");
    if (modal) {
      modal.showModal();
    }
  };

  // handle Registration from
  const HandleRegistrationFrom = (e) => {
    setLoading(true);

    e.preventDefault();
    const form = e.target;
    const first_name = form.first_name.value;
    const last_name = form.first_name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const allValue = { first_name, last_name, photo, email, password };
    console.log(allValue);
    // create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user.user);
        document.getElementById("my_modal_5").close();
        e.target.reset();
        Swal.fire({
          title: "User Created successfully",
          icon: "success",
          draggable: true,
        });
      })
      .catch((e) => {
        document.getElementById("my_modal_5").close();
        console.error(e.message);
        Swal.fire({
          title: `${e.message}`,
          icon: "error",
          draggable: true,
        });
      });
  };

  // handle Login from
  const handleLoginFrom = (e) => {
    setLoading(true);

    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // create user with email and password
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        // console.log(user.user);
        document.getElementById("my_modal_5").close();
        e.target.reset();
        Swal.fire({
          title: "Sign In Successfully",
          icon: "success",
          draggable: true,
        });
      })
      .catch((e) => {
        document.getElementById("my_modal_5").close();
        console.error(e.message);
        Swal.fire({
          title: "Sorry!\nInvalid user name or password",
          icon: "error",
          draggable: true,
        });
      });
  };

  // handle Logout
  const handleLogOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        Swal.fire({
          title: "you are successfully Log out",
          icon: "warning",
          draggable: true,
        });
      })
      .catch((e) => {
        Swal.fire({
          title: `${e.message}`,
          icon: "error",
          draggable: true,
        });
        console.error(e.message);
      });
  };

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
              <form onSubmit={HandleRegistrationFrom} className="bg-white">
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
                      name="first_name"
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
                      name="last_name"
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
                    name="photo"
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
                    name="email"
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
                    name="password"
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
              <form onSubmit={handleLoginFrom} className="bg-white">
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
                    name="email"
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
                    name="password"
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

  //on auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //pass value of use context
  const value = {
    loginRegistrationBtn,
    createUserWithGoogle,
    createUserWithGithub,
    handleLogOut,
    loading,
    user,
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
