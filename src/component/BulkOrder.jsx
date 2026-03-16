import BulkOrderbg from "../assets/images/bulkordercard-bg.png";
import { useContext } from "react";
import AllProductContext from "../Allproductcontext/AllProductContext";
import { useNavigate } from "react-router-dom";


const BulkOrder = () => {
  const { bulk } = useContext(AllProductContext);

  const navigate = useNavigate();

  return (
    <div className="bulkorder-main">
      <div className="mt-5 bulkOrder-mainBox mx-auto pt-5 pb-5">
        <div className=" text-center ">
          <h1 className="bulkOrder-h1">BULK ORDER</h1>
          <p className="bulkOrder-h1-note mx-auto mt-4">
            Our snacks are free from artificial additives, providing a pure and
            wholesome snacking experience. Discover our range of delightful
            organic treats designed to satisfy your cravings while supporting a
            healthy lifestyle.
          </p>
        </div>

        <div className="row g-0 mt-lg-5 pt-lg-5 justify-content-between mb-4">
          {bulk.map((order) => (
            <div className="col-12 col-lg-3 bulkOderCard rounded-3" key={order.id}>
              <div>
                <img
                  src={order.image}
                  alt="Bulk order 1"
                  loading="lazy"
                  className="w-100"
                />
              </div>
              <div className="mx-auto text-center bulkOrder-card-name-product mt-4 ">
                <div className="card-name">{order.productName}</div>
                <div className="card-product mt-2">{order.aboutProduct}</div>

                <button
                  className="w-100 mt-5 btn btn-outline-success card-btn d-flex align-items-center justify-content-center "
                  onClick={() => navigate(`/ProductDetails/${order.id}`)}
                >
                  {order.btn}
                  <i
                    className="ms-2 bxr  bx-arrow-right"
                    style={{ color: "#00A859", fontSize: "24px" }}
                  ></i>{" "}
                </button>
               
              </div>
            </div>
          ))}

          <div className="col-12 col-lg-3 bulkOderCard bulkOderCard-other rounded-3 d-flex align-items-center position-relative">
            <div className="mx-auto text-center bulkOrder-card-name-product mt-4 ">
              <h4>Others</h4>
              <p>Milk, Tools, Spice, etc.</p>
              <button className="w-100 mt-5 btn btn-outline-light d-flex align-items-center justify-content-center">
                see others{" "}
                <i
                  class="ms-2 bxr  bx-arrow-right"
                  style={{ color: "white", fontSize: "24px" }}
                ></i>{" "}
              </button>

              <div>
                <img
                  src={BulkOrderbg}
                  alt="bulk order card bg"
                  loading="lazy"
                  className="bulkorder-cardbg h-100 position-absolute"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulkOrder;
