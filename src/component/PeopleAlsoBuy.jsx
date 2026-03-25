import AllProductContext from "../Allproductcontext/AllProductContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const PeopleAlsoBuy = () => {
  const { ourProducts, cartProduct, setcartProduct } =
    useContext(AllProductContext);

  const navigate = useNavigate();

  const [isOpen, setisOpen] = useState(false);

  const handleAddToCart = (product) => {
    setcartProduct((prev) => {
      if (prev.find((p) => p.cartId === product.cartId)) return prev;
      return [...prev, product];
    });

    setisOpen(true);
  };

  const deleteAddToCartProduct = (cardId) => {
    const updatedCart = cartProduct.filter((p) => p.cardId !== cardId);
    setcartProduct(updatedCart);
    if (updatedCart.length === 0) setisOpen(false);
  };

  return (
    <div className="position-relative">
      <div className="ourProduct-mainbox mx-auto mt-5">
        <div className="">
          <h1 className="ourProd-h1">People Also Buy</h1>

          <div className="row justify-content-between">
            <div className="col-12 col-sm-5">
              <p className="ourProd-h1-p pb-0 mt-3">
                Browse our most popular snacks and make your day more beautiful
                and glorious.
              </p>
            </div>
            <div className="col-12 col-sm-4 align-items-center d-flex justify-content-start  justify-content-sm-end">
              <div className="">
                <button className="btn btn-outline-success">Browse All</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-0 mt-0 mt-md-5 ourprod-main-box justify-content-between">
          {ourProducts.map((product) => (
            <div className="col-12 col-lg-4 ourprod-card-box" key={product.id}>
              <div>
                <img
                  src={product.image}
                  alt="product image 1"
                  loading="lazy"
                  className="w-100"
                />
              </div>

              <div className="row justify-content-between mt-4">
                <div className="col-5 ourprod-secondname">
                  {product.secondName}
                </div>
                <div className="col-2">
                  <i
                    className="ourproduct-card-love-emoji d-flex justify-content-end bxr  bx-heart"
                    style={{ color: "#0F0B0B" }}
                  ></i>
                </div>
              </div>
              <div className="mt-2 ourprod-productname">
                {product.productName}
              </div>

              <div className="row justify-content-between mt-3">
                <div className="col-8 d-flex align-items-center ">
                  <i
                    className="bxr  bxs-star ourproduct-card-star-emoji"
                    style={{ color: "#F58634" }}
                  ></i>{" "}
                  <div className="ms-2 ourprod-rating-review">
                    {product.rating} ({product.review})
                  </div>
                </div>
                <div className="col-3 d-flex justify-content-end ourprod-price">
                  ${product.price}
                </div>
              </div>

              <button
                className="w-100 mt-4 btn btn-outline-success"
                onClick={() => handleAddToCart(product)}
              >
                {product.btn}
              </button>
            </div>
          ))}
        </div>

        <hr className="mt-5 ourprod-hr" />
      </div>

      {/* cart pop up */}

      {isOpen && cartProduct.length > 0 && (
        <div className="cartPoPuP-main-box position-fixed">
          <div className=" pt-5 pb-5">
            <div className=" cartPopup-innerbox mx-auto bg-white ">
              <button
                onClick={() => setisOpen(false)}
                className="cartPopUpCancel-btn position-absolute"
              >
                x
              </button>
              <div className="row pt-5 ">
                <div className="col-12 col-md-6">
                  {cartProduct.map((product) => (
                    <div
                      className="mt-3 row justify-content-between mx-auto mb-3"
                      key={product.cartId}
                    >
                      <div className="row justify-content-between mx-auto">
                        <div className="col-3 cart-PopUp-item">Items</div>

                        <div className="col-5 d-flex justify-content-between">
                          <button className="cartPopUp-remove-edit-btn">
                            Edit
                          </button>
                          <button
                            className="cartPopUp-remove-edit-btn justify-content-end d-flex"
                            onClick={() =>
                              deleteAddToCartProduct(product.cartId)
                            }
                          >
                            Remove
                          </button>
                        </div>
                        <hr className="mt-3 mb-3 cart-PopUp-hr" />
                      </div>

                      <div className="col-4">
                        <div>
                          <img
                            src={product.image}
                            alt="product image 1"
                            loading="lazy"
                            className="w-100"
                          />
                        </div>
                      </div>

                      <div className="col-8 mb-2">
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
                  ))}
                </div>

                <div className="col-12 col-md-6 mt-4 mt-md-0 mx-auto">
                  <div className="row justify-content-between mx-auto">
                    <div className="col-8 ">
                      <h4>Cart Order Total </h4>
                    </div>
                    <div className="col-2 d-flex align-items-center mx-auto">
                      $
                      {cartProduct.reduce(
                        (sum, item) => sum + (item.newPrice || 0),
                        0,
                      )}
                    </div>
                  </div>

                  <div className="mx-auto ps-2 pe-2 mt-2 cartPoPUp-note">
                    <hr className="mt-3 mb-3 cart-PopUp-hr" />
                    Congrats! You get Free Shipping.
                    <span className="cartPoPUp-note-span d-block">
                      Being your first purchase.
                    </span>
                  </div>

                  <div className="pe-2 ps-2 mb-5">
                    <button
                      className="mt-3 w-100 addToCart-btn btn btn-success"
                      onClick={() => {navigate("/Cart"), window.scrollTo(0, 0)}}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="w-100 mt-2 checkOut-btn btn btn-success "
                      onClick={() => {navigate("/Checkout"), window.scrollTo(0, 0)}}
                    >
                      Check Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PeopleAlsoBuy;
