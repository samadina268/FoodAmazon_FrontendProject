import SignIn from "./component/SignIn";
import Sign from "./component/Sign";
import Home from "./Home";
import Landing from "./component/Landing";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./component/ProductDetails";
import AllProductContext from "./Allproductcontext/AllProductContext";
import ProtectedRoute from "./component/ProtectedRoute";
import Cart from "./component/Cart";
import CheckOut from "./component/CheckOut";
import { useEffect, useState } from "react";

function App() {
  const [cartProduct, setcartProduct] = useState([]);
  const [ourProducts, setourProducts] = useState([]);
  const [bulk, setbulk] = useState([]);

  // fetch ourproduct api from backend
  useEffect(() => {
    fetch("https://food-amazon-backend-project.vercel.app/home/product")
      .then((res) => res.json())
      .then((data) => setourProducts(data));
  }, []);

  // fetch bulkproduct api from backend
  useEffect(() => {
    fetch("https://food-amazon-backend-project.vercel.app/home/bulkproduct")
      .then((res) => res.json())
      .then((data) => setbulk(data));
  }, []);

  return (
    <div>
      <AllProductContext.Provider
        value={{ ourProducts, bulk, cartProduct, setcartProduct }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Sign" element={<Sign />} />
          <Route
            path="/Landing"
            element={
              <ProtectedRoute>
                <Landing />
              </ProtectedRoute>
            }
          />
          <Route path="/ProductDetails/:id" element={<ProductDetails />} />
          <Route path="/Cart/:id" element={<Cart />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/CheckOut" element={<CheckOut />} />

          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
      </AllProductContext.Provider>
    </div>
  );
}

export default App;
