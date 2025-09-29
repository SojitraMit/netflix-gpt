/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggel = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/bebd95d0-65f9-41a9-9d12-4794db63653e/web/IN-en-20250922-TRIFECTA-perspective_5e75cfb4-3797-4f17-866b-181ff91a51dd_large.jpg" />
      </div>
      <div className="flex    justify-center text-white ">
        <form className="absolute mt-32  bg-black bg-opacity-80  p-12 w-[450px] text-white rounded-lg">
          <h1 className="font-bold text-3xl mb-10">
            {isSignIn ? "Sign in" : "Sign up"}
          </h1>

          {!isSignIn && (
            <input
              className="p-4  my-4 w-full bg-gray-700 rounded-lg"
              type="text"
              placeholder="Full name"
            />
          )}
          <input
            className="p-4  my-4 w-full bg-gray-700 rounded-lg"
            type="email"
            placeholder=" Email address or Mobile number"
          />
          <input
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
            type="password"
            placeholder=" Password"
          />
          <button className="mr- py-2 my-5 w-full bg-red-700 rounded-lg">
            {isSignIn ? "Sign in" : "Sign up"}
          </button>
          <label className="font-extralight">
            {!isSignIn ? "Already registered ?" : "New to Netflix ?"}
          </label>
          <label className="font-bold cursor-pointer" onClick={toggel}>
            {!isSignIn ? " Sign in" : " Sign up"} now.
          </label>
        </form>
      </div>
    </div>
  );
};

export default Login;
