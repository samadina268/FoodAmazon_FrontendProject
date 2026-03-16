import Header from "./Header";
import { useContext, useState } from "react";
import AllProductContext from "../Allproductcontext/AllProductContext";
import { useNavigate } from "react-router-dom";
import PeopleAlsoBuy from "./PeopleAlsoBuy";
import Footer from "./Footer";
import Swal from "sweetalert2";


const Cart = () => {
  const { cartProduct, setcartProduct } = useContext(AllProductContext);
  

  const navigate = useNavigate()
  const deleteAddToCartProduct = (cartId) => {
    setcartProduct((prev) => prev.filter((p) => p.cartId !== cartId));
  };

  const [add, setadd] = useState(0);

  let originalPrice = cartProduct.reduce((sum, item) => sum + (item.newPrice || 0), 0)

  let saving = originalPrice > 0 ? 23 : 0
  let tax =  originalPrice > 0 ? 3.5 : 0
  

  let total = originalPrice - saving + tax 

  const checkOut = () =>{
    if (originalPrice > 0){
      navigate("/Checkout")
    }else{
       Swal.fire({
      icon: "info",
      title: "No items to checkout",
      text: "Your cart is empty",
      confirmButtonText: "OK"
    });
    }
  }

  return (
    <div>
      <Header/>
      <div className="cart-mainbox mx-auto">
        <div className="row justify-content-between ">
          <div className="col-12 col-lg-6">
             <h2 className="checkOut-h2 mt-5 mt-md-0">Shopping Cart</h2>

              {cartProduct.length === 0 && (
    <div className="text-center mt-4">
       <h2 className="checkOut-h2">Your cart is empty</h2>
            <p>Add items to continue shopping</p>
    </div>
  )}


            {cartProduct.map((product) => (
              <div
                className="mt-3 row  justify-content-between mx-auto"
                key={product.cartId}
              >
                <div className="row g-0 justify-content-between mt-3">
                  <div className="col-12 col-lg-1 cart-PopUp-item">Items</div>

                  <div className="col-12 col-sm-7 col-lg-5 mt-3 mt-sm-0">
                    <div className="d-flex justify-content-between ">
                      <button className="cartPopUp-remove-edit-btn justify-content-start">
                        Save for Later
                      </button>
                      <button
                        className="cartPopUp-remove-edit-btn"
                        onClick={() => deleteAddToCartProduct(product.cartId)}
                      >
                        <div className="d-flex justify-content-end">Remove</div>{" "}
                      </button>
                    </div>
                  </div>

                  <div className="col-12 col-sm-5 col-lg-5 justify-content-sm-end d-flex mt-3 mt-sm-0">

                    <div className="d-flex">
                      <div className="product-quantity">Qty:</div>
                      <div>
                        <button
                          className="ms-3 product-quantity-btn  "
                          onClick={() =>
                            setadd((prev) => (prev > 0 ? prev - 1 : 0))
                          }
                        >
                          -
                        </button>

                        <button className="ms-3 product-quantity-btn-display">
                          <div className="d-flex align-items-center justify-content-center">
                            {add}
                          </div>
                        </button>

                        <button
                          className="ms-3 product-quantity-btn  "
                          onClick={() => setadd((prev) => prev + 1)}
                        >
                          <div className="d-flex align-items-center justify-content-center">
                            +
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row g-0 justify-content-between mx-auto">
                  <hr className="mt-3 mb-3 cart-PopUp-hr" />

                  <div className="row g-0 gap-4">
                    <div className="col-2 ">
                      <div>
                        <img
                          src={product.image}
                          alt="product image 1"
                          loading="lazy"
                          className="w-100"
                        />
                      </div>
                    </div>

                    <div className="col-8">
                      <div>
                        <div className=" cartPopUP-productname">
                          {product.productName}
                        </div>

                        <div className="mt-1 cartPopUP-cartId">
                          cart ID: {product.cartId}
                        </div>

                        <div className="mt-1 cartPopUP-price">
                          ${product.newPrice}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-12 col-lg-6 mt-5 mt-lg-0">
            <div>

              <div>

                <h2 className="checkOut-h2 mt-5 mt-md-0">Order Summary</h2>

                <hr className="checkOut-hr" />

                <div className="row justify-content-between checkOut-Order-price">
                  <div className="col-5">Original Price</div>
                  <div className="col-2 justify-content-end d-flex">
                   ${originalPrice.toFixed(2)}
                  </div>
                </div>

                <div className="row justify-content-between checkOut-Order-saving mt-2">
                  <div className="col-5">Savings</div>
                  <div className="col-2  justify-content-end d-flex">
                    ${saving.toFixed(2)}
                  </div>
                </div>

                <div className="row justify-content-between checkOut-Order-shipping mt-2">
                  <div className="col-5">Shipping</div>
                  <div className="col-2  justify-content-end d-flex">Free</div>
                </div>

                <div className="row justify-content-between checkOut-Order-est mt-2">
                  <div className="col-5">Estimated Sales Tax</div>
                  <div className="col-2 justify-content-end d-flex">${tax.toFixed(2)}</div>
                </div>

                <hr className="checkOut-hr" />

                <div className="row justify-content-between checkOut-order-total">
                  <div className="col-5">Total</div>
                  <div className="col-2 d-flex justify-content-end">
                   ${total.toFixed(2)}
                  </div>
                </div>

                <div className="mt-4 mb-5">
                  <button type="submit" className="w-100 checkOut-btn btn btn-success" onClick={checkOut}>
                   Proceed to Check Out
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <PeopleAlsoBuy/>
      <Footer/>
    </div>
  );
};

export default Cart;

