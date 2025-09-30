/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex  justify-between">
      <img
        className="w-48 "
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      {user && (
        <div className="flex p-4">
          <img
            className="w-12  h-12 mr-2"
            src="https://tse3.mm.bing.net/th/id/OIP.kYYbdJhBIh1SEi8MKTPYpgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
          />
          <button
            onClick={handleSignOut}
            className="bg-white rounded-xl h-8 p-1 mt-2">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
