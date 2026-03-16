import NewsLetterBg from "../assets/images/newsletter-bg.png";
import NewsLetterBgShapes from "../assets/images/newletter-bg-shapes.png";
import Swal from "sweetalert2";
import { useState } from "react";

const SubscribeNewletter = () => {
  const [email, setemail] = useState("");

  const receiveMail = (def) => {
    def.preventDefault();

    if (email) {
      Swal.fire({
        title: "Success!",
        text: "You have successfully Subscribed to our Newletter",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => setemail(""));
    }
  };

  return (
    <div className=" mt-5 newsletterMainBox " id="newsletter">
      <div className="newsletter-box mx-auto rounded-4 position-relative  text-center ">
        <div className="newletter-inbox">
          <h1 className="newsletter-h1 mx-auto">Subscribe Our Newsletter</h1>
          <p className="newsletter-p mx-auto">
            Receive latest updates on our products and many other things every
            week.
          </p>

          <form action="" method="get">
            <div className="newsletter-input-btn mx-auto d-flex justify-content-between rounded-3">
              <div className="col-9">
                <input
                  type="email"
                  for="email"
                  id="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  placeholder="Enter your Email Address"
                  autoComplete="on"
                  className="newsletter-input rounded-4 w-100"
                />
              </div>
              <div className="col-2 d-flex align-items-center">
                <button
                  type="submit"
                  className="rounded-4 newsletter-btn w-100"
                  onClick={receiveMail}
                >
                  <i className="bxr  bxs-paper-plane newletter-icon "></i>
                </button>
              </div>
            </div>
          </form>
        </div>

        <div>
          <img
            src={NewsLetterBgShapes}
            alt="newsletter bg shape"
            loading="lazy"
            className="w-100 position-absolute newsletterBgShape"
          />
        </div>
      </div>
    </div>
  );
};

export default SubscribeNewletter;
