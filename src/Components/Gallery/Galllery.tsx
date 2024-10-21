import React from "react";
import { useNavigate } from "react-router-dom";

const Galllery = () => {
  const navigate = useNavigate();

  const handleOrderRedirect = () => {
    navigate("/order");
  };

  return (
    <div>
      <h2 className="text-center text-3xl font-semibold my-8">Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto max-w-screen-xl">
        {[
          "https://cfnielsen.com/wp-content/uploads/2024/05/DSC01195.jpg",
          "https://cfnielsen.com/wp-content/uploads/2024/05/DSC01195.jpg",
          "https://cfnielsen.com/wp-content/uploads/2024/05/DSC01195.jpg",
        ].map((src, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            onClick={handleOrderRedirect}
          >
            <img
              className="h-auto max-w-full rounded-lg"
              src={src}
              alt={`gallery-img-${index}`}
            />

            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <span className="text-white text-lg font-semibold">
                Make an order
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galllery;
