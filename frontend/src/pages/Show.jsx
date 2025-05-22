import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Show = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { data } = state || {};
  const { id } = useParams();

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-repeat p-6 flex flex-col items-center justify-center text-white text-center">
        <h2 className="text-xl sm:text-3xl font-bold mb-4">No Card Data Found</h2>
        <p className="mb-6 text-gray-400 text-sm sm:text-base">
          No details available for card ID: {id}
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 hover:bg-blue-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition text-sm sm:text-base"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/cards/${data._id}`);
      alert("Deleted successfully");
      navigate("/");
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  const handleUpdate = () => {
    navigate("/update", { state: { data } });
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center p-6"
      style={{
         fontFamily: "'Luckiest Guy', cursive",
        backgroundColor: "#000011",
        backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      
      <div className="max-w-md w-full bg-gray-900 bg-opacity-70 rounded-3xl shadow-xl p-6 sm:p-8 flex flex-col items-center text-white text-center">
        {/* Circular Profile Image */}
        <div className="w-24 h-24 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-blue-600 mb-6 shadow-lg">
          <img
            src={data.imgurl}
            alt={data.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl font-extrabold mb-3">{data.title}</h1>

        {/* Description */}
        <p className="text-gray-300 text-sm sm:text-lg leading-relaxed mb-8 px-2 sm:px-4">
          {data.description}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 sm:gap-4 flex-wrap justify-center">
          <button
            onClick={() => navigate(-1)}
            className="bg-blue-600 hover:bg-blue-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold shadow-md transition text-sm sm:text-base"
          >
            Back
          </button>
          <button
            onClick={handleUpdate}
            className="bg-yellow-500 hover:bg-yellow-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-gray-900 shadow-md transition text-sm sm:text-base"
          >
            Update
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold shadow-md text-white transition text-sm sm:text-base"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Show;
