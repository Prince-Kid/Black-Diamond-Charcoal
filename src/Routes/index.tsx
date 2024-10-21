import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../Components/Home/Homepage";
import Order from "../Components/Order/Order";
const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Homepage />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
