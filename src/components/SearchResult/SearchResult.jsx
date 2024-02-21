import { useLocation } from "react-router-dom";
import Footer from "../Footer";
import Nav from "../Header/Nav";
import { useEffect, useState } from "react";
import { getSearchResult } from "../../utils/api";
import ListingCard from "./ListingCard";

const SearchResult = ({ placeholder }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const locationName = queryParams.get("location");
  const numOfGuests = queryParams.get("numOfGuests");
  const startDate = queryParams.get("startDate");
  const endDate = queryParams.get("endDate");
  const [searchData, setSearchData] = useState([]);

  const filters = [
    "Cancelation Flexibility",
    "Type of Place",
    "Price",
    "Rooms and Beds",
    "More filters",
  ];

  useEffect(() => {
    const result = async () => {
      const data = await getSearchResult();
      setSearchData(data);
    };
    result();
  }, []);
  return (
    <>
      <Nav
        placeholder={`${locationName} | ${new Date(
          startDate
        ).getDate()} ${new Date(startDate).toLocaleString("default", {
          month: "long",
        })} ${new Date(startDate)
          .getFullYear()
          .toString()
          .slice(-2)} | ${new Date(endDate).getDate()} ${new Date(
          endDate
        ).toLocaleString("default", {
          month: "long",
        })} ${new Date(endDate).getFullYear().toString().slice(-2)} | ${
          numOfGuests === "1" ? `${numOfGuests} Guest` : `${numOfGuests} Guests`
        }`}
      />

      <section className="py-16">
        <div className="container">
          <header className="mb-6 flow-content--s">
            <h1 className="text-3xl font-bold text-zinc-800">
              Stays in {locationName}
            </h1>
            <p className="text-zinc-600">
              {`300+ Stays - ${new Date(startDate).getDate()} ${new Date(
                startDate
              ).toLocaleDateString("default", { month: "long" })} ${new Date(
                startDate
              )
                .getFullYear()
                .toString()
                .slice(-2)} 
                -
${new Date(endDate).getDate()} ${new Date(endDate).toLocaleDateString(
                "default",
                { month: "long" }
              )} ${new Date(endDate).getFullYear().toString().slice(-2)} 
              

              
              `}
            </p>
          </header>
          <div className="hidden lg:flex items-center mb-8 gap-4 text-gray-800">
            {filters.map((item, index) => (
              <button className="filter-btn" key={index}>
                {item}
              </button>
            ))}
          </div>
          <div className="wrapper space-y-8">
            <div className="cards-wrapper">
              {searchData.map((item) => (
                <ListingCard
                  key={item.title}
                  img={item.img}
                  location={item.location}
                  price={item.price}
                  star={item.star}
                  title={item.title}
                  total={item.total}
                  description={item.description}
                />
              ))}
            </div>
            <div className="map-wrapper">
              {/* <MapComp searchData={searchData} /> */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SearchResult;
