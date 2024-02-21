import { FaHome } from "react-icons/fa";
import { GiCampingTent, GiCarabiner } from "react-icons/gi";
import { FaFlag } from "react-icons/fa";
import { CiViewTable } from "react-icons/ci";
import { FaUniversity } from "react-icons/fa";
import { GiWoodCabin } from "react-icons/gi";
import { MdMeetingRoom } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="py-16 hero bg-center bg-no-repeat bg-cover min-h-[75vh] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1562832135-14a35d25edef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1245&q=80')",
      }}
    >
      <header className="flow-content--m text-center">
        <h1 className="text-4xl font-bold text-black">
          Not sure where to go? perfect.
        </h1>
        <a
          href=""
          className="bg-white text-purple-600 rounded-full px-8 py-2 hover:bg-cyan-500  focus:bg-cyan-500 duration-300 text-lg font-semibold hover:text-white focus:text-white"
        >
          I'm flexible
        </a>
      </header>
    </section>
  );
};

export default Hero;
