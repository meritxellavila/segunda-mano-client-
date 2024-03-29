
import "./App.css";
import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import Favoritos from "./pages/Favoritos";
import HomePage from "./pages/HomePage";
import ListProducts from "./pages/ListProducts";
import ProductDetall from "./pages/ProductDetall";
import EditProduct from './pages/EditProduct';
import EditReview from "./pages/EditReview";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error"

function App() {

  // const [favoritos, setFavorites] = useState([]);

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path={"/AddProduct"} element={<AddProduct />} />
        <Route path={"/favoritos"} element={<Favoritos />} />
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/ListProducts/:category"} element={<ListProducts />} />
        <Route path={"/ListProducts/:search"} element={<ListProducts />} />
        <Route path={"/ProductDetall/:productId"} element={<ProductDetall />} />
        {/* <Route
          path={"/ProductDetall/:productId"}
          element={<ProductDetall setFavorites={setFavorites} />}
        /> */}
        <Route path={"/EditProduct/:productId"} element={<EditProduct />} />
        {/* <Route path="/favoritos" element={<Favoritos favoritos={favoritos} />} /> */}
        <Route path={"/EditReview/:reviewId"} element={<EditReview />} />

        <Route path={"/error"} element={<Error />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
