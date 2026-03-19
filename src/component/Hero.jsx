import HeroFd from "../assets/images/hero-page-icon-fd.png";
import HeroDi from "../assets/images/hero-page-icon-di.png";
import HeroPu from "../assets/images/hero-page-icon-pu.png";
import HeroPageimg from "../assets/images/hero-page-img.png";
import HeroPageimgStar from "../assets/images/hero-page-img-star.png";
import Herovect from "../assets/images/hero-vector.png";
import Herovect2 from "../assets/images/hero-vector-2.png";
import Herovect3 from "../assets/images/hero-vector-3.png";
import HeroMainBg from "../assets/images/hero-main-bg.png";
import { Link } from "react-router-dom";

const Here = () => {
  return (
    <div className="mt-5">
      <div className=" position-relative ">
        <div className="row hero-main-box mx-auto g-0 ">
          <div className="col-12 col-md-12 col-lg-5 d-flex align-items-center">
            <div>
              <p className="hero-note-1">Discover the Pure Taste of Nature</p>
              <h2 className="hero-h2">
                Organic <span className="hero-h2-span">Snacks</span> Made{" "}
                <span className="hero-h2-span">with</span> Love, Just{" "}
                <span className="hero-h2-span">for</span> You!
              </h2>

              <button className="mt-4 heroShop-btn btn btn-warning d-flex align-items-center gap-2">
                Shop Now{" "}
                <i
                  className="bxr  bx-store"
                  style={{ color: "white", fontSize: "24px" }}
                ></i>{" "}
              </button>

              <div className="d-flex mt-3 gap-1">
                <div className=" hero-dash "></div>
                <div className="hero-dash-dot"></div>
                <div className="hero-dash-dot"></div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-7 mt-4 mt-md-0">
            <div className="position-relative col-10 mx-auto">
              <img
                src={HeroPageimg}
                alt="Hero page image"
                loading="lazy"
                className="w-100"
              />

              <img
                src={HeroPageimgStar}
                alt="Hero page image"
                loading="lazy"
                className="w-100 position-absolute HeroPageimgStar "
              />
            </div>

            <div className="row hero-icon-section mt-5 mx-auto g-0 pb-5 pb-md-5">
              <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                <div className="row g-0">
                  <div className="col-4">
                    <img
                      src={HeroFd}
                      alt="fast delivery icon"
                      loading="lazy"
                      className="w-100"
                    />
                  </div>
                  <div className="col-8 align-items-center d-flex g-0 hero-icon-heading">
                    <div>
                      Fast Delivery
                      <span className="d-block hero-icon-heading-span">
                        Deliver within 30 minutes
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                <div className="row g-0">
                  <div className="col-4">
                    <img
                      src={HeroDi}
                      alt="fast delivery icon"
                      loading="lazy"
                      className="w-100"
                    />
                  </div>
                  <div className="col-8 align-items-center d-flex g-0 hero-icon-heading">
                    <div>
                      Dine in
                      <span className="d-block hero-icon-heading-span">
                        Enjoy your snacks fresh and healthy
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                <div className="row g-0">
                  <div className="col-4">
                    <img
                      src={HeroPu}
                      alt="fast delivery icon"
                      loading="lazy"
                      className="w-100"
                    />
                  </div>
                  <div className="col-8 align-items-center d-flex g-0 hero-icon-heading ">
                    <div>
                      Pick Up
                      <span className="d-block hero-icon-heading-span">
                        Delivery at your doorstep
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="position-absolute Herovect d-none d-lg-block">
          <img
            src={Herovect}
            alt="hero main bg"
            loading="lazy"
            className="w-100 h-100  "
          />
        </div>
      </div>

      <div className="hero-main-footer position-relative">
        <div className="  pt-4 pb-4 ">
          <div className="mx-auto hero-footer-inner-note pt-4 pb-4">
            <div className="row justify-content-between g-0">
              <div className="col-6 col-md-3 d-flex justify-content-center">
                <div className="hero-footer-num">
                  1975+{" "}
                  <span className="d-block hero-footer-num-span">
                    Total Products
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-3 d-flex justify-content-center">
                <div className="hero-footer-num">
                  2880+{" "}
                  <span className="d-block hero-footer-num-span">
                    Satisfied Clients
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-3 d-flex justify-content-center mt-4 mt-md-0">
                <div className="hero-footer-num">
                  3219+{" "}
                  <span className="d-block hero-footer-num-span">
                    Product Sales
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-3 mt-4 mt-md-0 d-flex justify-content-center">
                <div className="hero-footer-num ">
                  100%{" "}
                  <span className="d-block hero-footer-num-span">
                    Guarantee
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="position-absolute HeroMainBg d-none d-md-block">
          <img
            src={HeroMainBg}
            alt="hero main bg"
            loading="lazy"
            className="w-100 h-100  "
          />
        </div>
      </div>
    </div>
  );
};

export default Here;
