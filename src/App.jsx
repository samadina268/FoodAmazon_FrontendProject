import SignIn from "./component/SignIn";
import Sign from "./component/Sign"
import Home from "./Home";
import Landing from "./component/Landing";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./component/ProductDetails";
import AllProductContext from "./Allproductcontext/AllProductContext";
import product1 from "../src/assets/images/ourproduct-1.png";
import product2 from "../src/assets/images/ourproduct-2.png";
import product3 from "../src/assets/images/ourproduct-3.png";
import BulkOrder1 from "../src/assets/images/bulkorder-1.png";
import BulkOrder2 from "../src/assets/images/bulkorder-2.png";
import BulkOrder3 from "../src/assets/images/bulkorder-3.png";
import Cart from "./component/Cart";
import CheckOut from "./component/CheckOut";
import { useState } from "react";

const ourProducts = [
  {
    id: 1,
    image: product1,
    productName: "Organic Almond Delight",
    secondName: "Coconut Flakes",
    rating: "5.0",
    review: 18,
    price: 110,
    btn: "Add to Cart",
    newPrice: 60,
    cartId: 12345678910,
    btn1: "Edit",
    btn2: "Remove",
  },
  {
    id: 2,
    image: product2,
    productName: "Berry Bliss Bites",
    secondName: "Coconut Flakes",
    rating: "5.0",
    review: 28,
    price: 139,
    btn: "Add to Cart",
    newPrice: 80,
    cartId: 12345678911,
    btn1: "Edit",
    btn2: "Remove",
  },
  {
    id: 3,
    image: product3,
    productName: "Coconut Crunchies",
    secondName: "Coconut Flakes",
    rating: "5.0",
    review: 102,
    price: 399,
    btn: "Add to Cart",
    newPrice: 290,
    cartId: 12345678912,
    btn1: "Edit",
    btn2: "Remove",
  },
];

const bulk = [
  {
    id: 1,
    image: BulkOrder1,
    productName: "Organic Almond Delight",
    aboutProduct:
      "Crunchy almonds coated with a touch of organic honey, perfect for a healthy snack.",
    btn: "Order Now",
  },
  {
    id: 2,
    image: BulkOrder2,
    productName: "Berry Bliss Bites",
    aboutProduct:
      "A delightful mix of organic berries and nuts, offering a burst of flavor in every bite.",
    btn: "Order Now",
  },
  {
    id: 3,
    image: BulkOrder3,
    productName: "Coconut Crunchies",
    aboutProduct:
      "Light and crispy coconut flakes, naturally sweet and utterly delicious taste.",
    btn: "Order Now",
  },
];

function App() {
  const [cartProduct, setcartProduct] = useState([]);

  return (
    <div>
      <AllProductContext.Provider
        value={{ ourProducts, bulk, cartProduct, setcartProduct }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Sign" element={<Sign />} />
          <Route path="/Landing" element={<Landing />} />
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
