import { FaStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
const ListingCard = ({
  price,
  title,
  img,
  star,
  total,
  description,
  location,
}) => {
  return (
    <div className="card grid--1x2 hover:shadow-lg hover:scale-105 hover:rotate-2 duration-300 p-8 rounded-md max-h-[350px]">
      <div className="img-wrapper">
        <img
          src={img}
          alt={`${title}'s image`}
          className="rounded-xl object-cove h-[300px] w-[300px]"
        />
      </div>
      <div className="content relative px-4">
        <header className="flow-content--m">
          <span className="text-lg">{location}</span>
          <h2 className="text-2xl font-bold text-zinc-700">{title}</h2>
          <p className="text-gray-500 text-md">{description}</p>
        </header>
        <div className="icon-wrapper absolute top-1 right-6 hover:cursor-pointer">
          <FaRegHeart size={26} />
        </div>
        <div className="wrapper flex justify-between items-center w-full mt-8">
          <div className="rating flex items-center gap-4">
            <FaStar size={25} className="text-yellow-500" />
            <span className="text-xl">{star}</span>
          </div>
          <div className="price flex flex-col gap-4">
            <span className="font-bold text-zinc-900 text-3xl ">{price}</span>
            <span className="text-zinc-400 text-xl ">{total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
