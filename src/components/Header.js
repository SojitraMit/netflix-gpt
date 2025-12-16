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
    <div className="absolute w-screen px-8 py-2 md:py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between items-center ">
      <img className="w-48 " src={LOGO} />
      {user && (
        <div className="flex pt-2 md:p-4">
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
            className="text-white border bg-purple-800  mx-8 h-8 mt-2 rounded-lg px-2 bg-whit"
            onClick={handleGptSearchClick}>
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img className="w-12  h-12 mr-2" src={USER_AVATAR} />
          <button
            onClick={handleSignOut}
            className="bg-black rounded-xl h-8 p-1 mt-2 bg-opacity-0 border text-white font-bold">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
