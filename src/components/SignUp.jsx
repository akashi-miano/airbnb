import { FaRegEnvelope } from "react-icons/fa6";
import { MdOutlineSmartphone } from "react-icons/md";
import { facebookIcon } from "../assets";
import { googleIcon } from "../assets";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleAuthProvider } from "../firebase/firebase";
const SignUp = ({ setSignUp }) => {
  const [email, setEmail] = useState(true);
  const [phone, setPhone] = useState(false);
  const [phoneVal, setPhoneVal] = useState("");
  const [user, setUser] = useState(null);
  const [otp, setOtp] = useState("");

  const googleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } catch (error) {
      console.log(error);
    }
  };

  const sendOTP = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = signInWithPhoneNumber(auth, phone, recaptcha);
      setUser(confirmation);
    } catch (error) {
      console.log(error);
    }
  };

  const verifyOtp = async () => {
    try {
      await user.confirm(otp);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="min-h-screen flex items-center justify-center z-[999] absolute inset-0">
      <div
        className="overlay bg-gray-600 absolute inset-0 z-[-1] opacity-70"
        onClick={() => setSignUp(false)}
      ></div>
      <div className="card bg-white min-h-[350px] min-w-[250px] px-8 py-2 rounded-md shadow-md flow-content--m">
        <header className="mt-6 mb-8">
          <h1 className="text-3xl font-bold flex items-center justify-between">
            Welcome to Airbnb
            <IoMdClose
              size={30}
              className="hover:cursor-pointer"
              onClick={() => setSignUp(false)}
            />
          </h1>
        </header>
        <form className="flow-content--m" onSubmit={(e) => e.preventDefault()}>
          <div className="input-wrapper flow-content--md flow-content--m">
            {email ? (
              <>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border-2"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 border-2"
                />
              </>
            ) : (
              <>
                {
                  <>
                    <input
                      type="text"
                      placeholder="Phone Number"
                      onChange={() => setPhoneVal("+" + phoneVal)}
                      className="w-full p-2 border-2"
                    />
                    <div id="recaptcha"></div>
                    <input
                      type="text"
                      placeholder="OTP"
                      className="w-full p-2 border-2"
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </>
                }
                {phoneVal && (
                  <>
                    <button
                      type="submit"
                      className="w-full text-center bg-pink-600 hover:bg-pink-700 focus:bg-pink-700 duration-300 text-white rounded-md px-8 py-[.7rem] text-lg tracking-wider font-bold"
                      onClick={sendOTP}
                    >
                      Send OTP
                    </button>
                    {otp && (
                      <button
                        type="submit"
                        className="w-full text-center bg-pink-600 hover:bg-pink-700 focus:bg-pink-700 duration-300 text-white rounded-md px-8 py-[.7rem] text-lg tracking-wider font-bold"
                        onClick={verifyOtp}
                      >
                        Verify OTP
                      </button>
                    )}
                  </>
                )}
              </>
            )}
          </div>
          <p>
            We 'll call you to confirm your number. Standard message and data
            rates <br />
            <a className="text-zinc-800 underline capitalize hover:text-black duration-300 focus:text-black">
              Privacy Policy
            </a>
          </p>
          <button
            type="submit"
            className="w-full text-center bg-pink-600 hover:bg-pink-700 focus:bg-pink-700 duration-300 text-white rounded-md px-8 py-[.7rem] text-lg tracking-wider font-bold"
          >
            Continue
          </button>
          <span className="text-md text-center text-xl w-full inline-block">
            or
          </span>
          <br />
          <button className="w-full text-center bg-white hover:bg-cyan-500 focus:bg-cyan-500 duration-300  hover:text-white rounded-md px-8 py-[.7rem]  tracking-wider font-bold border-2 border-zinc-800 flex items-center gap-6 justify-center text-xl text-zinc-600 focus:text-white">
            <img
              src={facebookIcon}
              alt="Facebook logo"
              className="w-[40px] h-[40px]"
            />
            Continue with Facebook
          </button>
          <button
            className="w-full text-center bg-white hover:bg-cyan-500 focus:bg-cyan-500 duration-300  hover:text-white rounded-md px-8 py-[.7rem]  tracking-wider font-bold border-2 border-zinc-800 flex items-center gap-6 justify-center text-xl text-zinc-600 focus:text-white"
            onClick={googleSignIn}
          >
            <img
              src={googleIcon}
              alt="Facebook logo"
              className="w-[40px] h-[40px]"
            />
            Continue with Google
          </button>
          {!email ? (
            <button
              className="w-full text-center bg-white hover:bg-cyan-500 focus:bg-cyan-500 duration-300  hover:text-white rounded-md px-8 py-[.7rem]  tracking-wider font-bold border-2 border-zinc-800 flex items-center gap-6 justify-center text-xl text-zinc-600 mb-6 focus:text-white"
              onClick={(e) => {
                e.preventDefault();
                setEmail(true);
                setPhone(false);
              }}
            >
              <FaRegEnvelope size={30} />
              Continue with Email
            </button>
          ) : (
            <button
              className="w-full text-center bg-white hover:bg-cyan-500 focus:bg-cyan-500 duration-300  hover:text-white rounded-md px-8 py-[.7rem]  tracking-wider font-bold border-2 border-zinc-800 flex items-center gap-6 justify-center text-xl text-zinc-600 mb-6 focus:text-white"
              onClick={(e) => {
                e.preventDefault();
                setPhone(true);
                setEmail(false);
              }}
            >
              <MdOutlineSmartphone size={30} />
              Continue with Phone
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default SignUp;
