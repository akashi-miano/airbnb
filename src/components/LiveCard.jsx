const LiveCard = ({ title, img }) => {
  return (
    <div className="card hover:scale-105 hover:rotate-3 rounded-md duration-300 focus:scale-105 focus:rotate-3 hover:cursor-pointer p-4">
      <div className="img-wrapper flow-content--s">
        <img
          src={img}
          alt={`${title}'s image`}
          className="max-w-[250px] rounded-md object-contain"
        />
        <span className="text-2xl block">{title}</span>
      </div>
    </div>
  );
};

export default LiveCard;
