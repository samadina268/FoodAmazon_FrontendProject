import Signimage2 from "../assets/images/sign-image-2.png";
import SignImg from "../assets/images/sign-img.png";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Joi from "joi";

const Sign = () => {
  const [showPassword, setshowPassword] = useState(false);

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");
  const [errors, seterrors] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const schema = Joi.object({
    name: Joi.string().min(4).max(30).required(),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    phone: Joi.string()
      .pattern(/^\+?[0-9]{10,15}$/)
      .required()
      .messages({
        "string.empty": "Enter your phone number",
        "string.pattern.base": "Use a valid phone number with 10 to 15 digits",
      }),

    password: Joi.string()
      .min(8)
      .pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/)
      .required()
      .messages({
        "string.empty": "Enter your password",
        "string.min": "Password must be at least 8 characters",
        "string.pattern.base":
          "Password must include uppercase, lowercase, and a number",
      }),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = schema.validate({
      name,
      email,
      phone,
      password,
    });

    if (error) {
      seterrors(error.details[0].message);
      return;
    }

    const data = {
      fullname: name,
      email: email,
      phonenumber: phone,
      password: password,
    };

    setloading(true);
    try {
      const response = await fetch(
        "https://food-amazon-backend-project.vercel.app/home/register",
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        },
      );

      const result = await response.json();
      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: "You have successfully signed Up. You will be moved to Sign In.",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/SignIn");
        });
      } else {
        const errormessage =
          typeof result === "string"
            ? result
            : result.message
              ? result.message
              : "signup failed";
        seterrors(errormessage);
      }
    } catch (error) {
      console.log(error);
      seterrors(["unable to connect to server"]);
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="">
      <div className="row g-0 sign-main-part">
        <div className="col-12 col-md-6 col-lg-6 ">
          <div className="w-100 d-none d-md-block ">
            <img
              src={SignImg}
              alt="Food amazon SignImg "
              loading="lazy"
              className="w-100 sign-img"
            />
          </div>
          <div className="d-md-none">
            <img
              src={Signimage2}
              alt="Food amazon SignImg "
              loading="lazy"
              className="w-100 sign-img"
            />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6 mt-5 mt-md-0">
          <div className="sign-right-part mx-auto h-100 justify-content-center align-content-center w-100">
            <div>
              <h1 className="sign-h1">Sign Up</h1>
              <span className="sign-h1-span mt-4 d-block">
                Already have an account?
                <button
                  className="ms-2 sign-h1-span-btn text-decoration-none border-0 "
                  onClick={() => navigate("/SignIn")}
                >
                  Sign In
                </button>
              </span>

              <form onSubmit={handleSubmit}>
                <input
                  className="form-input mt-4"
                  type="text"
                  id="text"
                  placeholder="Your Name"
                  required
                  autoComplete="on"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />

                <input
                  className="form-input mt-4"
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  required
                  autoComplete="on"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />

                <input
                  className="form-input mt-4"
                  type="tel"
                  id="tel"
                  placeholder="Phone Number"
                  required
                  autoComplete="on"
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                />

                <div className="position-relative">
                  <input
                    className="form-input mt-4 "
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Password "
                    autoComplete="on"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                  />

                  <button
                    type="button"
                    className="showpass-btn position-absolute"
                    onClick={() => {
                      setshowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? (
                      <i
                        className="bx  bxs-eye bx-rotate-90 bx-flip-horizontal"
                        style={{ color: "#7C797A" }}
                      ></i>
                    ) : (
                      <i
                        className="bx  bxs-eye-closed bx-rotate-90 bx-flip-horizontal"
                        style={{ color: "#7C797A" }}
                      ></i>
                    )}
                  </button>
                </div>

                <div className="mt-3">
                  <p className="text-center error-test">{errors}</p>
                </div>

                <label hFor="checkbox" className="checkbox-label mt-3 ">
                  <input
                    className="checkbox-input me-2 "
                    type="checkbox"
                    id="checkbox"
                    required
                  />
                  I agree with
                  <span className="checkbox-span">Privacy Policy</span> and{" "}
                  <span className="checkbox-span">Terms of Use</span>
                </label>

                <button
                  type="submit"
                  className={`mt-4 mt-md-5 submit-btn btn btn-success w-100 mb-5 mb-lg-0 ${loading ? "loading" : ""}`}
                >
                  <span className="btn-text">Sign Up</span>

                  <i className="bx bx-loader-dots bx-spin loader-icon" />
                </button>
              </form>

              <div className="loading"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
