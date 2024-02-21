import { useEffect, useState } from "react";
import { getLive } from "../utils/api";
import LiveCard from "./LiveCard";
const Live = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const setLive = async () => {
      const result = await getLive();
      setData(result);
    };
    setLive();
  }, []);
  return (
    <section className="py-16">
      <div className="container">
        <header className="mb-6">
          <h2 className="capitalize font-bold text-4xl mb-4">live anywhere</h2>
        </header>
        <div className="wrapper flex items-center gap-4 flex-col md:flex-row flex-wrap overflow-hidden">
          {data.map(({ img, title }, index) => (
            <LiveCard img={img} title={title} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Live;
