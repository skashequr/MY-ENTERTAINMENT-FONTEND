import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

function LoginForm() {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const notify = () => toast('Successfully Google login done!');
  const notify2 = () => toast('Successfully Password login done!');
  const location = useLocation();
  const { loginWithEmailPass, googleLogin } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    loginWithEmailPass(email, password)
      .then((result) => {
        const user = result.user;
        notify2();
        setError('');
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        notify();
        setError('');
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 2000);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div className="flex items-center justify-center mt-16 w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
      <div className="hidden bg-cover lg:block lg:w-1/2" style={{ backgroundImage: "url('https://i.ibb.co/2yCN1sB/banner-image-41-4-01-1000x491.png')" }}></div>

      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <div className="flex justify-center mx-auto">
          <img className="w-auto h-7 sm:h-8" src="logo.svg" alt="" />
        </div>

        <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
          Welcome back!
        </p>

        <button onClick={handleGoogleLogin} className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover-bg-gray-600">
          <div className="px-4 py-2">
            <svg className="w-6 h-6" viewBox="0 0 40 40">
              {/* Google login icon */}
            </svg>
          </div>
          <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
        </button>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
          <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">or login with email</a>
          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="LoggingEmailAddress">Email Address</label>
            <input name="email" id="LoggingEmailAddress" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" />
          </div>

          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="loggingPassword">Password</label>
              <Link className="text-xs text-gray-500 dark:text-gray-300 hover:underline">Forget Password?</Link>
            </div>
            <input name="password" id="loggingPassword" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" />
          </div>

          <div className="mt-6">
            <button type="submit" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Sign In
            </button>
          </div>
        </form>
        <p className="text-red-700">{error}</p>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          <a href="#" className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or sign up</a>
          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
