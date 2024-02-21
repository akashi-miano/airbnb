const SmallCard = ({ img, distance, location }) => {
  return (
    <section className="hover:bg-gray-200  duration-300 hover:cursor-pointer rounded-md hover:scale-105 focus:scale-105 focus:bg-gray-200">
      <div className="wrapper flex items-center gap-4">
        <div className="img-wrapper">
          <img
            src={img}
            alt={`An apartment in ${location}`}
            className="rounded-md w-[75px] h-[75px]"
          />
        </div>
        <div className="text-content flex flex-col">
          <span>{location}</span>
          <span className="text-gray-500">{distance}</span>
        </div>
      </div>
    </section>
  );
};

export default SmallCard;
