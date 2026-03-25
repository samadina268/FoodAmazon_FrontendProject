import ProductDetailsSmallProduct from "../assets/images/smallproduct-img.png";
import RatingGoldStar from "../assets/images/rating-goldstar.png";
import RatingBlackStar from "../assets/images/rating-blackstar.png";
import { useContext, useState } from "react";
import AllProductContext from "../Allproductcontext/AllProductContext";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Review from "./Review";
import SimilarProduct from "./SimilarProduct";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [add, setadd] = useState(0);

  const { bulk, ourProducts } = useContext(AllProductContext);

  const bulkProduct = bulk.find((pac) => Number(pac.id) === Number(id));

  const products = ourProducts.find((pac) => Number(pac.id) === Number(id));

  if (!bulkProduct || !products) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <Header />

      <div className="productdetails-mainbox mx-auto">
        <div className="row ">
          <div className="col-12 col-md-6">
            <div key={bulkProduct.id}>
              <img
                src={bulkProduct.image}
                alt="Bulk order 1"
                loading="lazy"
                className="w-100"
              />
            </div>
            <div className="col-8 mx-auto mt-4">
              <img
                src={ProductDetailsSmallProduct}
                alt="Bulk order figcapture"
                loading="lazy"
                className="w-100"
              />
            </div>
          </div>
          <div className="col-12 col-md-6 mt-5 mt-md-0 ps-lg-5 ">
            <div>
              <div>
                <div className=" ourprod-secondname" key={products.id}>
                  {products.secondName}
                </div>
                <div className="mt-2 ourprod-productname" key={bulkProduct.id}>
                  {bulkProduct.productName}
                </div>

                <div className="col-3 d-flex mt-2">
                  <div className="text-decoration-line-through product-price d-flex align-items-center ">
                    ${products.price}
                  </div>
                  <div className="text-decoration-none ms-2 product-newprice ">
                    ${products.newPrice}
                  </div>
                </div>

                <div className="d-flex mt-4">
                  <div className="product-variety">Variety:</div>
                  <div>
                    <ul className="product-varienty-ul">
                      <li className="product-varienty-li ">Classic Nut Mix</li>
                      <li className="product-varienty-li ">Spicy Nut Mix</li>
                      <li className="product-varienty-li ">
                        Sweet & Salty Nut Mix
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="d-flex mt-2">
                  <div className="product-quantity">Quantity:</div>
                  <div className="">
                    <button
                      className="ms-3 product-quantity-btn  "
                      onClick={() =>
                        setadd((prev) => (prev > 0 ? prev - 1 : 0))
                      }
                    >
                      <div className="d-flex align-items-center justify-content-center">
                        -
                      </div>
                    </button>

                    <button className="ms-3 product-quantity-btn-display  ">
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

                <div className="mt-5 product-quantity-note">
                  Our Date-Coconut Delight combines the rich sweetness of
                  organic date syrup with the tropical flavor of coconut flakes,
                  creating a snack that’s both indulgent and healthy.
                </div>

                <div>
                  <button
                    className="mt-3 w-100 addToCart-btn btn btn-success"
                    onClick={() => {navigate(`/Cart/${products.id}`), window.scrollTo(0, 0)}}
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => {navigate("/Checkout"), window.scrollTo(0, 0)}}
                    className="w-100 mt-2 checkOut-btn btn btn-success"
                  >
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-8 col-lg-6 mt-5 pt-4">
          <h3 className="product-about">About This Product</h3>

          <div className="product-about-note mt-3">
            Indulge in the natural crunch and flavor of our Crunchy Nut Mix, a
            blend of premium nuts roasted to perfection. This mix includes
            almonds, cashews, and walnuts, providing a delicious and nutritious
            snack that is rich in protein and healthy fats.
          </div>

          <div className="mt-4">
            <ul className="product-about-ul">
              <li className="product-about-li">
                Blend of organic almonds, cashews, and walnuts
              </li>
              <li className="product-about-li">
                Lightly roasted to enhance natural flavors
              </li>
              <li className="product-about-li">
                No added oils or preservatives
              </li>
            </ul>
          </div>

          <div className="mt-3 product-about-benefits ">
            <span className="product-about-benefits-span ">Benefits</span>{" "}
            Excellent source of protein and healthy fats. Supports heart health
            and brain function. Satisfies hunger and boosts energy.
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12 col-md-6">
            <h4 className="product-customer-h4">Customer Reviews</h4>
            <div>
              <span className="product-customer-h4-span mt-4 d-block">
                77 Reviews
              </span>

              <div className="col-4 mt-3">
                <img
                  src={RatingGoldStar}
                  alt="Rating black star img "
                  loading="lazy"
                  className="w-100"
                />
              </div>

              <div className="mt-5">
                <div className="d-flex justify-content-between align-items-center ">
                  <div className="col-2 product-customer-star ">5 Stars</div>

                  <div
                    className="col-9 "
                    style={{ height: "4px", backgroundColor: "#C4D1D0" }}
                  >
                    <div
                      className=""
                      style={{
                        width: "75%",
                        height: "100%",
                        backgroundColor: "#404B4B",
                      }}
                    ></div>
                  </div>

                  <div className="col-1 d-flex justify-content-end product-customer-star-num">
                    37
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="col-2 product-customer-star">4 Stars</div>

                  <div
                    className="col-9"
                    style={{ height: "4px", backgroundColor: "#C4D1D0" }}
                  >
                    <div
                      className=""
                      style={{
                        width: "55%",
                        height: "100%",
                        backgroundColor: "#404B4B",
                      }}
                    ></div>
                  </div>

                  <div className="col-1 d-flex justify-content-end product-customer-star-num">
                    20
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="col-2 product-customer-star">3 Stars</div>

                  <div
                    className="col-9"
                    style={{ height: "4px", backgroundColor: "#C4D1D0" }}
                  >
                    <div
                      className=""
                      style={{
                        width: "45%",
                        height: "100%",
                        backgroundColor: "#404B4B",
                      }}
                    ></div>
                  </div>

                  <div className="col-1 d-flex justify-content-end product-customer-star-num">
                    12
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="col-2 product-customer-star">2 Stars</div>

                  <div
                    className="col-9"
                    style={{ height: "4px", backgroundColor: "#C4D1D0" }}
                  >
                    <div
                      className=""
                      style={{
                        width: "25%",
                        height: "100%",
                        backgroundColor: "#404B4B",
                      }}
                    ></div>
                  </div>

                  <div className="col-1 d-flex justify-content-end product-customer-star-num">
                    8
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="col-2 product-customer-star">1 Star</div>

                  <div
                    className="col-9"
                    style={{ height: "4px", backgroundColor: "#C4D1D0" }}
                  >
                    <div
                      className=""
                      style={{
                        width: "0%",
                        height: "100%",
                        backgroundColor: "#404B4B",
                      }}
                    ></div>
                  </div>

                  <div className="col-1 d-flex justify-content-end product-customer-star-num">
                    0
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 ps-lg-5  ">
            <div>
              <h4 className="product-rate-h4 mt-5 mt-md-0 pt-4 pt-md-0">
                How would you rate this?
              </h4>
              <div className="col-4 mt-3">
                <img
                  src={RatingBlackStar}
                  alt="Rating black star img "
                  loading="lazy"
                  className="w-100"
                />
              </div>
            </div>

            <div>
              <form action="#" method="get">
                <label
                  className="d-block product-rate-label mt-3"
                  htmlFor="text"
                >
                  Add a headline
                </label>
                <textarea
                  type="text"
                  name="text"
                  id="text"
                  placeholder="Write a summary of your review"
                  required
                  className="w-100 mt-2 pb-2 ps-3 pe-3 pt-2 product-rate-textarea"
                ></textarea>

                <label
                  className="d-block  product-rate-label mt-3"
                  htmlFor="textArea"
                >
                  Write a review
                </label>
                <textarea
                  type="textarea"
                  name="textArea"
                  id="textArea"
                  placeholder="Tell us what do you think"
                  required
                  className="w-100 mt-2 ps-3 pe-3 pt-2 product-rate-textarea-2"
                ></textarea>

                <button type="submit" className="btn btn-success d-block mt-4">
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Review />
      <SimilarProduct />
      <Footer />
    </div>
  );
};

export default ProductDetails;
