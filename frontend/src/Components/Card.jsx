import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/show/${data.id}`, { state: { data } }); // Pass card data through state
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer bg-gray-800 text-white rounded-xl shadow-md overflow-hidden flex flex-col items-center gap-4 p-4 hover:shadow-lg transition"
    >
      <img
        src={data.imgurl}
        alt={data.title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="w-full">
        <h3 className="text-2xl font-semibold mb-2">{data.title}</h3>
        <p className="text-gray-300 text-sm">{data.description}</p>
      </div>
    </div>
  );
};

export default Card;
