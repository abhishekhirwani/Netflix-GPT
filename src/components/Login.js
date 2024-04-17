import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignUp = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="bg-logo"
        />
      </div>
      <form className="absolute my-36 mx-auto right-0 left-0 bg-black bg-opacity-80 w-3/12 p-12 text-white rounded-lg ">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            className="my-4 p-4 w-full bg-gray-700"
            placeholder="Full Name"
          />
        )}
        <input
          type="text"
          className="my-4 p-4 w-full bg-gray-700"
          placeholder="Email or phone number"
        />
        <input
          type="password"
          className="my-4 p-4 w-full bg-gray-700"
          placeholder="Password"
        />
        <button className="bg-red-700 my-6 p-4 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignUp}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
