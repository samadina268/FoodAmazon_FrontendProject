import { useNavigate } from "react-router-dom";
import FoodamazonLogo from "../assets/images/foodamazon-logo.png";

const Header = () => {
  const navigate = useNavigate();

  const handlenavlist = () => {
    navigate("/landing");
  };

  return (
    <div className="position-fixed fixed-top headerbox">
      <nav className="navbar navbar-expand-lg">
        <div className="container mb-2">
          <a className="navbar-brand foodamazonLogo" href="#">
            <img
              src={FoodamazonLogo}
              alt="Food amazon logo "
              loading="lazy"
              className="w-100"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse ms-4" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ "--bs-scroll-height": "100px" }}
            >
              <li className="nav-item">
                <a
                  className="nav-link active header-navlink"
                  aria-current="page"
                  href="#"
                  onClick={handlenavlist}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active header-navlink"
                  aria-current="page"
                  href="#OurProduct"
                  onClick={handlenavlist}
                >
                  Our Products
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active header-navlink"
                  aria-current="page"
                  href="#healthBenefits"
                  onClick={handlenavlist}
                >
                  Health Benefits
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active header-navlink"
                  aria-current="page"
                  href="#newsletter"
                   onClick={handlenavlist}
                >
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active header-navlink" href="#faqs"  onClick={handlenavlist}
                >
                  FAQs
                </a>
              </li>
            </ul>

            <div className="d-flex align-items-center mt-4 mb-4 mb-lg-0 mt-lg-0">
              <i
                className="bx bx-search search-icon me-4 m"
                style={{ color: "#0F0B0B", fontSize: "30px" }}
              ></i>
              <i
                className="bx bx-heart love-icon ms-4"
                style={{ color: "#0F0B0B", fontSize: "30px" }}
              ></i>
              <i
                className="bx bx-groceries shopping-icon me-4 " onClick={() => navigate("/Cart")}
                style={{ color: "#0F0B0B", fontSize: "30px", cursor: "pointer", }}
              ></i>
            </div>

            <button className="btn btn-success" type="submit">
              Contact Us
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
