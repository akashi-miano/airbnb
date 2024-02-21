import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { DateRange, DateRangePicker } from "react-date-range";
import { RiContactsFill } from "react-icons/ri";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const SearchBar = ({ placeholder }) => {
  const [input, setInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numOfGuests, setNumOfGuests] = useState(1);
  const navigate = useNavigate();

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
    color: "#f66783",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  return (
    <form className="w-full mt-4" onSubmit={handleSubmit}>
      <div className="input-wrapper shadow-md rounded-full w-full flex items-center  border-2 border-gray-200 overflow-hidden  relative max-w-[600px] mx-auto">
        <input
          type="text"
          placeholder={placeholder || "Start your search"}
          value={input}
          className="px-8 py-[12px] w-full"
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="icon-wrapper bg-pink-700 text-white  rounded-full flex items-center justify-center p-[10px] my-2 hover:bg-pink-800 focus:bg-pink-800 duration-300 hover:cursor-pointer absolute right-2">
          <FiSearch className="text-2xl " />
        </div>
      </div>
      {input && (
        <div className="pt-4 w-full  max-w-[550px] mx-auto flex items-center flex-col">
          <DateRange
            ranges={[selectionRange]}
            onChange={handleSelect}
            minDate={new Date()}
          />
          <div className="guests flex justify-between items-center bg-white rounded-md w-full gap-12 relative">
            <div className="wrapper">
              <span className="font-bold text-2xl">Number of Guests</span>
            </div>
            <div className="icon-wrapper flex items-center gap-2">
              <RiContactsFill size={25} />
              <input
                className="#f66783 text-lg text-[#f66783] max-w-[50px]"
                min={1}
                type="number"
                value={numOfGuests}
                onChange={(e) => setNumOfGuests(e.target.value)}
              />
            </div>
          </div>
          <hr className="border-b w-full my-4" />
          <div className="wrapper flex items-center justify-center gap-12 w-full">
            <button
              className="text-lg text-[#f66783]"
              onClick={() => setInput("")}
            >
              Cancel
            </button>
            <Link
              to={{
                pathname: "/search",
                search: `?location=${input}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&numOfGuests=${numOfGuests}`,
              }}
              className="text-lg text-[#f66783]"
              onClick={() => setInput("")}
            >
              Search
            </Link>
          </div>
        </div>
      )}
    </form>
  );
};

export default SearchBar;
