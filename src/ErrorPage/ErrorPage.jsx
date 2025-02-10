import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 animate-pulse">
        404
      </h1>

      <p className="text-2xl mt-4 text-gray-300 animate-fadeIn">
        Oops! Page Not Found
      </p>

      <div className="mt-6 relative">
        <Link
          to="/"
          className="relative px-6 py-3 font-semibold text-lg text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
        >
          Go Home
          <span className="absolute inset-0 bg-blue-400 rounded-lg blur-lg opacity-50 animate-ping"></span>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
