import { useEffect, useState } from "react";
import SmallCard from "./SmallCard";
import { getExplore } from "../utils/api";
const Explore = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const setExplore = async () => {
      const result = await getExplore();
      setData(result);
    };
    setExplore();
  }, []);
  return (
    <section className="py-8">
      <div className="container">
        <header className="mb-8">
          <h2 className="capitalize text-3xl font-bold">explore nearby</h2>
          <div className="wrapper"></div>
        </header>
        <div className="wrapper grid md:grid-cols-4 gap-6">
          {data.map(({ location, distance, img }, index) => (
            <SmallCard
              location={location}
              distance={distance}
              img={img}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
