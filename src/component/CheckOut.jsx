import Header from "./Header";
import Swal from "sweetalert2";
import VisacardLogo from "../assets/images/visa-payment-logo.png";
import PaypalcardLogo from "../assets/images/paypal-payment-logo.png";
import Footer from "./Footer";
import AllProductContext from "../Allproductcontext/AllProductContext";

const CheckOut = () => {
  const submitCard = () => {
    const cardNumber = document.getElementById("card-number").value;
    const expDate = document.getElementById("exp-date").value;
    const secCode = document.getElementById("card-code").value;
    const cardFirstName = document.getElementById("card_name").value;
    const cardSecName = document.getElementById("card-last-name").value;

    

    if (!cardNumber || !expDate || !secCode || !cardFirstName || !cardSecName) {
      Swal.fire({
        icon: "error",
        title: "Missing info",
        text: "Please fill all card fields before continuing",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Card info done",
      text: "Card section completed successfully",
    });
  };

  const cancelCard = () => {
    document.getElementById("card-number").value = "";
    document.getElementById("exp-date").value = "";
    document.getElementById("card-code").value = "";
    document.getElementById("card_name").value = "";
    document.getElementById("card-last-name").value = "";
  };

  const placeOrder = (e) => {
    e.preventDefault();

    const form = e.target;

    if (!form.checkValidity()) {
      form.reportValidity();
    } else {
      Swal.fire({
        icon: "success",
        title: "Order placed",
        text: "Your checkout was successful",
      }).then(() => form.reset());
    }
  };

  return (
    <div>
      <Header />

      <div className="checkOut-mainbox mx-auto mb-5">
        <form onSubmit={placeOrder}>
          <div className="row">
            <div className="col-12 col-md-6">
              <h2 className="checkOut-h2">Billing Details</h2>
              <div>
                <div>
                  <input
                    className="mt-3 w-100 checkout-input rounded-2"
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="on"
                    placeholder="Your email addrress"
                  />

                  <label
                    htmlFor="residence"
                    className="checkout-label d-block mt-3"
                  >
                    Deliver to
                  </label>
                  <select
                    id="residence"
                    className="w-100 d-block checkout-selectOpt mt-2 rounded-2 "
                  >
                    <option>Residence</option>
                    <option>Owned</option>
                    <option>Rented</option>
                    <option>Family House</option>
                    <option>Company Apartment</option>
                    <option>Caretaker / free</option>
                    <option>Others</option>
                  </select>

                  <label
                    className="checkout-label d-block mt-3"
                    htmlFor="country"
                  >
                    Country
                  </label>
                  <select
                    id="country"
                    className="w-100 d-block checkout-selectOpt mt-2 rounded-2 "
                  >
                    <option>Nigeria</option>
                    <option>Ghana</option>
                    <option>Kenya</option>
                    <option>Egypt</option>
                    <option>Libya</option>
                    <option>South African</option>
                    <option>Others</option>
                  </select>

                  <div className="row mt-3">
                    <div className="col-6">
                      <input
                        className="w-100 checkout-input rounded-2"
                        type="text"
                        id="name"
                        name="name"
                        required
                        autoComplete="on"
                        placeholder="Your first name"
                      />
                    </div>
                    <div className="col-6">
                      <input
                        className="w-100 checkout-input rounded-2"
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        autoComplete="on"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <input
                    className="w-100 mt-3 checkout-input rounded-2"
                    type="text"
                    id="address"
                    name="address"
                    required
                    autoComplete="on"
                    placeholder="Your address"
                  />

                  <div className="row mt-3">
                    <div className="col-4 ">
                      <input
                        className="w-100 checkout-input rounded-2"
                        type="text"
                        id="city"
                        name="city"
                        required
                        autoComplete="on"
                        placeholder="city"
                      />
                    </div>

                    <div className="col-4">
                      <select
                        id="country"
                        className="w-100  d-block checkout-selectOpt rounded-2 h-100"
                      >
                        <option>Ikeja</option>
                        <option>Ojudu</option>
                        <option>Ogba</option>
                        <option>Oshodi</option>
                        <option>Ketu</option>
                        <option>Yaba</option>
                        <option>Others</option>
                      </select>
                    </div>

                    <div className="col-4">
                      <input
                        className="w-100  checkout-input rounded-2"
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        required
                        autoComplete="on"
                        placeholder="Zip code"
                      />
                    </div>
                  </div>

                  <input
                    className="w-100 mt-3  checkout-input rounded-2"
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    autoComplete="on"
                    placeholder="Phone Number"
                  />

                  <div>
                    <label
                      htmlFor="text"
                      className="d-block checkbox-label-note mt-3"
                    >
                      Order Note <span>(optional)</span>
                    </label>
                    <textarea
                      className="w-100 checkOut-textarea mt-2 "
                      name="order"
                      id="order"
                      placeholder="Tell us what do you think"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 mt-3 mt-md-0">
              <div>
                <h2 className="checkOut-h2 mt-5 mt-md-0">Your Order</h2>

                <hr className="checkOut-hr" />

                <div className="row justify-content-between checkOut-Order-price">
                  <div className="col-5">Original Price</div>
                  <div className="col-2 justify-content-end d-flex">
                    $582.00
                  </div>
                </div>

                <div className="row justify-content-between checkOut-Order-saving mt-2">
                  <div className="col-5">Savings</div>
                  <div className="col-2  justify-content-end d-flex">
                    $82.00
                  </div>
                </div>

                <div className="row justify-content-between checkOut-Order-shipping mt-2">
                  <div className="col-5">Shipping</div>
                  <div className="col-2  justify-content-end d-flex">Free</div>
                </div>

                <div className="row justify-content-between checkOut-Order-est mt-2">
                  <div className="col-5">Estimated Sales Tax</div>
                  <div className="col-2 justify-content-end d-flex">$3.50</div>
                </div>

                <hr className="checkOut-hr" />

                <div className="row justify-content-between checkOut-order-total">
                  <div className="col-5">Total</div>
                  <div className="col-2 d-flex justify-content-end">
                    $496.50
                  </div>
                </div>
              </div>

              <div>
                <h2 className="checkOut-h2 mt-5">Pay With</h2>

                <div className="w-100">
                  <label
                    htmlFor="card-radio"
                    className=" justify-content-between w-100"
                  >
                    <div>
                      <input
                        type="radio"
                        name="payment"
                        id="card-radio"
                        required
                      />

                      <div className="row justify-content-between ms-3  ">
                        <div className="col-3 visacardLogo-card">card</div>
                        <div className="col-4 d-flex justify-content-end h-100  ">
                          <img
                            src={VisacardLogo}
                            alt="visa card logo"
                            loading="lazy"
                            className="w-100"
                          />
                        </div>
                      </div>

                      <div className="col-6 mt-3">
                        <input
                          className="w-100   checkout-input rounded-2"
                          type="number"
                          id="card-number"
                          name="card-number"
                          required
                          autoComplete="on"
                          placeholder="Card number"
                        />
                      </div>

                      <div className="row mt-3">
                        <div className="col-6">
                          <input
                            className="w-100 checkout-input rounded-2"
                            type="date"
                            id="exp-date"
                            name="exp-date"
                            required
                            autoComplete="on"
                            placeholder="Expiration date"
                          />
                        </div>
                        <div className="col-6">
                          <input
                            className="w-100   checkout-input rounded-2"
                            type="number"
                            id="card-code"
                            name="card-code"
                            required
                            autoComplete="on"
                            placeholder="Security code"
                          />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-6">
                          <input
                            className="w-100 checkout-input rounded-2"
                            type="text"
                            id="card_name"
                            name="card_name"
                            required
                            autoComplete="on"
                            placeholder="First Name"
                          />
                        </div>
                        <div className="col-6">
                          <input
                            className="w-100 checkout-input rounded-2"
                            type="text"
                            id="card-last-name"
                            name="card-last-name"
                            required
                            autoComplete="on"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>

                      <div className="mt-3 ">
                        <label htmlFor="card" className="">
                          <input
                            type="checkbox"
                            name="card"
                            id="card"
                            className="checkOut-card-remCard"
                          />
                          <span className="ms-2">
                            Remember this card for future order
                          </span>
                        </label>
                      </div>

                      <div className="row mt-3">
                        <div className="col-6">
                          <button
                            type="button"
                            className="btn btn-success w-100"
                            onClick={submitCard}
                          >
                            Done
                          </button>
                        </div>
                        <div className="col-6">
                          <button
                            type="reset"
                            onClick={cancelCard}
                            className="btn btn-outline-success w-100"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>

                <hr className="checkOut-hr mt-4 " />

                <div className="row justify-content-between mt-3">
                  <div className="col-3">
                    <label
                      htmlFor="paypal-radio"
                      className="d-flex align-items-center"
                    >
                      <input type="radio" name="payment" id="paypal-radio" />
                      <span className="ms-2">Paypal</span>
                    </label>
                  </div>
                  <div className="col-3">
                    <div className="">
                      <img
                        src={PaypalcardLogo}
                        alt="paypal card logo"
                        loading="lazy"
                        className="w-100"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4 mb-5">
                  <button
                    type="submit"
                    className="w-100 checkOut-btn btn btn-success"
                  >
                    place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default CheckOut;
