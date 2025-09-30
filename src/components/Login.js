/* eslint-disable jsx-a11y/alt-text */
import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMassage, setErrorMassage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggel = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    const massage = checkValidData(email.current.value, password.current.value);
    setErrorMassage(massage);

    if (massage) return;

    // Sign in and sign up logic

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMassage(error.massage);
            });

          navigate("/browes");
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMassage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
          navigate("/browes");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMassage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/bebd95d0-65f9-41a9-9d12-4794db63653e/web/IN-en-20250922-TRIFECTA-perspective_5e75cfb4-3797-4f17-866b-181ff91a51dd_large.jpg" />
      </div>
      <div className="flex    justify-center text-white ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute mt-32  bg-black bg-opacity-80  p-12 w-[430px] text-white rounded-lg">
          <h1 className="font-bold text-3xl mb-10">
            {isSignIn ? "Sign in" : "Sign up"}
          </h1>

          {!isSignIn && (
            <input
              ref={name}
              className="p-4  my-4 w-full bg-gray-700 rounded-lg"
              type="text"
              placeholder="Full name"
            />
          )}
          <input
            ref={email}
            className="p-4  my-4 w-full bg-gray-700 rounded-lg"
            type="text"
            placeholder=" Email address"
          />
          <input
            ref={password}
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
            type="password"
            placeholder=" Password"
          />
          <p className="text-red-600">{errorMassage}</p>
          <button
            className="mr- py-2 my-5 w-full bg-red-700 rounded-lg"
            onClick={handleButtonClick}>
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
