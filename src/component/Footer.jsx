import FoodamazonLogo from "../assets/images/foodamazon-logo.png";
import FooterStar from "../assets/images/footer-star.png";
import SocialLogo from "../assets/images/social-logo.png";
import PaymentLogo from "../assets/images/payment-logo.png";
import Trustpilot from "../assets/images/trustpilot-logo.png";

const Footer = () => {
  return (
    <div id="faqs">
      <div className="footer-section-1 pt-5">
        <div className="footer-box  mx-auto pb-5">
          <div className="col-9 col-md-5 mx-auto text-center ">
            <h1 className="mt-3 footer-h1">Excellent</h1>
            <div className="row justify-content-between mx-auto">
              <div className="footerstar">
                <img
                  src={FooterStar}
                  alt="Excellent star"
                  loading="lazy"
                  className="w-100"
                />
              </div>
              <div className="footerstar">
                <img
                  src={FooterStar}
                  alt="Excellent star"
                  loading="lazy"
                  className="w-100"
                />
              </div>
              <div className="footerstar">
                <img
                  src={FooterStar}
                  alt="Excellent star"
                  loading="lazy"
                  className="w-100"
                />
              </div>
              <div className="footerstar">
                <img
                  src={FooterStar}
                  alt="Excellent star"
                  loading="lazy"
                  className="w-100"
                />
              </div>
              <div className="footerstar">
                <img
                  src={FooterStar}
                  alt="Excellent star"
                  loading="lazy"
                  className="w-100"
                />
              </div>
            </div>

            <p className=" footer-p mt-3">
              Based on{" "}
              <span className="list-unstyledrline footer-p-span ">
                13,586 reviews
              </span>
            </p>

            <div className=" col-5 mx-auto mt">
              <img
                src={Trustpilot}
                alt="Trust pilot logo"
                loading="lazy"
                className="w-100"
              />
            </div>
          </div>

          <hr className="footer-hr " />

          <div className="row justify-content-between mx-auto g-0">
            <div className="col-12 col-lg-9">
              <div className="row justify-content-between">
                <div className="col-12 col-lg-7">
                  <div className="row justify-content-between mx-auto">
                    <div className="col-6 ">
                      <h3 className="footer-h3 mt-2">Customer Service</h3>
                      <ul className="list-unstyled ">
                        <li className="footer-li mt-1">Order Lookup</li>
                        <li className="footer-li mt-1">Bulk Order</li>
                        <li className="footer-li mt-1">Shipping & Delivery</li>
                        <li className="footer-li mt-1">Discounts</li>
                      </ul>
                    </div>
                    <div className="col-6 ">
                      <h3 className="footer-h3 mt-2">About Us</h3>
                      <ul className="list-unstyled ">
                        <li className="footer-li mt-1">News & Blog</li>
                        <li className="footer-li mt-1">Suppliers</li>
                        <li className="footer-li mt-1">Terms & Conditions</li>
                        <li className="footer-li mt-1">Privacy Policy</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-5">
                  <div className="row justify-content-between">
                    <div className="col-6 ">
                      <h3 className="footer-h3 mt-2">Need Help?</h3>
                      <ul className="list-unstyled ">
                        <li className="footer-li mt-1">Contact Us</li>
                        <li className="footer-li mt-1">FAQs</li>
                      </ul>
                    </div>
                    <div className="col-6 ">
                      <h3 className="footer-h3 mt-2">Privacy</h3>
                      <ul className="list-unstyled ">
                        <li className="footer-li mt-1">Terms & Conditions</li>
                        <li className="footer-li mt-1">Privacy Policy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-2 mx-auto">
              <h3 className="footer-h3 mt-2 text-center text-lg-start">
                Follow Us
              </h3>
              <div className="mt-4 mt-lg-0 d-flex justify-content-center">
                <div className="col-4 col-lg-12">
                  <img
                    src={SocialLogo}
                    alt="social logo"
                    loading="lazy"
                    className="w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-section-2">
        <div className="footer-main-section-2 mx-auto pt-3 pb-3">
          <div className="row justify-content-between">
            <div className="col-12 mx-auto col-lg-2 d-flex justify-content-center">
              <div className="footer-FoodamazonLogo  ">
                <img
                  src={FoodamazonLogo}
                  alt="Food amazon logo "
                  loading="lazy"
                  className="w-100"
                />
              </div>
            </div>
            <div className="col-12 mx-auto col-lg-4 d-flex align-items-center mt-3 mt-lg-0 ">
              <div className=" mx-auto footer-PaymentLogo ">
                <img
                  src={PaymentLogo}
                  alt="Payment logo "
                  loading="lazy"
                  className="w-100"
                />
              </div>
            </div>
            <div className="col-12 mx-auto col-lg-5 d-flex align-items-center  mt-3 mt-lg-0 justify-content-center ">
              <div className=" mt-2 mt-lg-0 footer-copyright">
                Copyright &copy; 2024 FoodieAmazon. All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
