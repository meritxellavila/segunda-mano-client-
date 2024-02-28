
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import Favoritos from "./pages/Favoritos";
import HomePage from "./pages/HomePage";
import ListProducts from "./pages/ListProducts";
import ProductDetall from "./pages/ProductDetall";
import EditProduct from './pages/EditProduct';
import EditReview from "./pages/EditReview";

function App() {
  return (
    <Routes>
      <Route path={"/AddProduct"} element={<AddProduct />} />
      <Route path={"/Favoritos"} element={<Favoritos />} />
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/ListProducts/:category"} element={<ListProducts />} />
      <Route path={"/ProductDetall/:productId"} element={<ProductDetall />} />
      <Route path={"/EditProduct/:productId"} element={<EditProduct />} />
      <Route path={"/EditReview/:reviewId"} element={<EditReview />} />
    </Routes>
  );
}

export default App;
