import { RxAvatar } from "react-icons/rx";
import { logo } from "../../assets/index";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import SignUp from "../SignUp";
import LogIn from "../Login";
import SearchBar from "./SearchBar";
const Nav = ({ placeholder }) => {
  const [popUp, setPopUp] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [logIn, setLogIn] = useState(false);
  return (
    <nav
      role="navigation"
      className="border-b border-gray-300 px-12 py-4 relative"
    >
      <div className="flex items-center justify-between">
        <div className="img-wrapper absolute top-2">
          <img
            src={logo}
            alt="Airbnb logo"
            className="h-[100px] w-[125px] object-contain"
          />
        </div>
        <SearchBar placeholder={placeholder} />
        <div className="icons-wrapper flex items-center gap-4 rounded-full px-8 py-2 border-2 border-gray-200 absolute top-8 right-8">
          <GiHamburgerMenu
            size={30}
            onClick={() => setPopUp(!popUp)}
            className="hover:cursor-pointer"
          />
          <RxAvatar size={30} />
        </div>
      </div>
      {popUp && (
        <div className="menu min-h-[50px] w-[150px] absolute border border-zinc-300 right-[5%] top-[80%] px-8 py-4 rounded-md shadow-lg  bg-white">
          <p
            className="hover:text-cyan-500  focus:text-cyan-500  hover:cursor-pointer"
            onClick={() => {
              setSignUp(true);
              setPopUp(false);
            }}
          >
            Sign up
          </p>
          <hr className="border-b-2 border-gray-300 absolute w-full right-0 left-0 top-1/2 duration-300 text-lg" />
          <p
            className="hover:text-cyan-500 focus:text-cyan-500  mt-4 duration-300 text-lg hover:cursor-pointer"
            onClick={() => {
              setLogIn(true);
              setPopUp(false);
            }}
          >
            Log in
          </p>
        </div>
      )}
      {signUp && <SignUp setSignUp={setSignUp} />}
      {logIn && <LogIn setLogIn={setLogIn} />}
    </nav>
  );
};

export default Nav;
