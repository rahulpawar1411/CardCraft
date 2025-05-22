import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const { state } = useLocation(); // data passed from previous page
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imgurl: "",
  });

  useEffect(() => {
    if (state && state.data) {
      setFormData(state.data);
    }
  }, [state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/cards/${formData._id}`, formData);
      alert("Card updated successfully!");
      navigate("/");
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 text-white"
      style={{
         fontFamily: "'Luckiest Guy', cursive",
        backgroundColor: "#000011",
        backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      <div className="w-full max-w-xl bg-gray-900/90 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Update Card</h2>
        <form className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-600 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-600 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              style={{ height: "120px" }}
            ></textarea>
          </div>

          <div>
            <label className="block font-medium mb-1">Image URL</label>
            <input
              type="text"
              name="imgurl"
              value={formData.imgurl}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-600 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="button"
            onClick={handleUpdate}
            className="w-full bg-yellow-500 text-gray-900 py-2 rounded-xl font-semibold hover:bg-yellow-600 transition"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
