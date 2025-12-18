/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    //toggle
    dispatch(toggleGptSearchView());
  };

  const handlChangeLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-4 md:px-8 py-2 md:py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between  ">
      <img className="w-44 h-16 md:h-auto m-auto md:m-0" src={LOGO} />
      {user && (
        <div className="flex justify-between  pt-2 md:p-4">
          {showGptSearch && (
            <select
              className="h-8 mt-2 bg-black text-white"
              onChange={handlChangeLanguage}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="text-white border bg-purple-800  md:mx-8 mr-4 h-8 mt-2 rounded-lg px-2 bg-whit"
            onClick={handleGptSearchClick}>
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <div className="flex">
            <img
              className=" md:w-12  md:ml-0  md:h-12 w-10 h-10 mt-1 md:mt-0 mr-2"
              src={USER_AVATAR}
            />
            <button
              onClick={handleSignOut}
              className="bg-black rounded-xl h-8 p-1  mt-2 bg-opacity-0 border text-white font-bold">
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
