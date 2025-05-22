import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Components/Card";
import Header from "../Components/Header";

const Home = () => {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState({
    title: "",
    description: "",
    imgurl: "",
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/cards");
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const submitHandle = (e) => {
    e.preventDefault();

    const postData = async () => {
      try {
        const res = await axios.post("http://localhost:5000/api/cards", newData);
        setData((prevData) => [...prevData, res.data]);
        alert("Card created successfully!");
        setNewData({ title: "", description: "", imgurl: "" });
      } catch (err) {
        console.error("Error creating card:", err);
      }
    };

    postData();
  };

  return (
    <div
      className="min-h-screen bg-black bg-cover text-white pb-10"
      style={{
         fontFamily: "'Luckiest Guy', cursive",
        backgroundColor: "#000011",
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/stardust.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      <Header/>
      {/* Main content below header */}
      <main className="pt-24 max-w-6xl mx-auto px-4">
        {/* Form Section */}
        <div className="flex items-center justify-center p-4">
          <div className="w-full max-w-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
              Create Card
            </h2>
            <form onSubmit={submitHandle} className="space-y-4">
              <div>
                <label className="block font-medium mb-1 text-sm sm:text-base">
                  Title
                </label>
                <input
                  value={newData.title}
                  onChange={(e) => setNewData({ ...newData, title: e.target.value })}
                  type="text"
                  placeholder="Enter title"
                  className="w-full px-4 py-2 border border-gray-600 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block font-medium mb-1 text-sm sm:text-base">
                  Description
                </label>
                <textarea
                  value={newData.description}
                  onChange={(e) => setNewData({ ...newData, description: e.target.value })}
                  placeholder="Enter description"
                  className="w-full px-4 py-2 border border-gray-600 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm sm:text-base"
                  style={{ height: "120px" }}
                ></textarea>
              </div>

              <div>
                <label className="block font-medium mb-1 text-sm sm:text-base">
                  Image URL
                </label>
                <input
                  value={newData.imgurl}
                  onChange={(e) => setNewData({ ...newData, imgurl: e.target.value })}
                  type="text"
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-4 py-2 border border-gray-600 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-200 text-sm sm:text-base"
              >
                Submit
              </button>
            </form>
          </div>
          {/* Scroll to Top Button */}
<button
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="fixed bottom-5 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 w-[42px] h-[42px] rounded-full shadow-lg transition duration-300 z-50 flex items-center justify-center"
  title="Scroll to Top"
>
  ⬆
</button>

        </div>

        {/* Card List Section */}
        <div className="mt-20 mb-12">
          <h2 className="text-xl sm:text-3xl font-bold text-white mb-10 text-center uppercase tracking-wide">
            Cards
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((item, index) => (
              <Card key={index} data={item} />
            ))}
          </div>
          
        </div>
      </main>
    </div>
  );
};

export default Home;
