import { useState } from "react";
import SignImg from "../assets/images/sign-img.png";
import Signimage2 from "../assets/images/sign-image-2.png";
import { useNavigate } from "react-router-dom";
import Joi from "joi";

const SignIn = () => {
  const [showPassword, setshowPassword] = useState(false);

  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [errors, seterrors] = useState("");

  const schema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
  });

  const handleClick = async (e) => {
    e.preventDefault();

    const { error } = schema.validate({
      email,
      password,
    });

    if (error) {
      seterrors(error.details[0].message);
      return;
    }

    const data = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch(
        "https://food-amazon-backend-project.vercel.app/home/signin",
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        },
      );
      const result = await response.json();

      if (response.ok) {
        localStorage.setItem("token", result.token);
        navigate("/Landing");
      } else {
        const errormessage =
          typeof result === "string"
            ? result
            : result.message
              ? result.message
              : "signin failed";
        seterrors(errormessage);
      }
    } catch (error) {
      console.log(error);
      seterrors("Unable to connect to server");
    }
  };

  return (
    <div className="">
      <div className="row g-0 sign-main-part">
        <div className="col-12 col-md-6 col-lg-6 ">
          <div className="w-100 d-none d-md-block">
            <img
              src={SignImg}
              alt="Food amazon SignImg "
              loading="lazy"
              className="w-100"
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
              <h1 className="sign-h1">Sign In</h1>
              <span className="sign-h1-span mt-4 d-block">
                Already have an account?
                <button
                  className="ms-2 sign-h1-span-btn text-decoration-none border-0 "
                  onClick={() => navigate("/Sign")}
                >
                  Sign Up
                </button>
              </span>

              <form action="#" method="get">
                <input
                  className="form-input mt-4"
                  type="email"
                  id="email"
                  value={email}
                  placeholder="Email Address"
                  required
                  autoComplete="on"
                  onChange={(e) => setemail(e.target.value)}
                />

                <div className="position-relative">
                  <input
                    className="form-input mt-4 "
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Password "
                    required
                    value={password}
                    autoComplete="on"
                    onChange={(e) => setpassword(e.target.value)}
                  />

                  <button
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

                <div className="row  ">
                  <div className="col-6">
                    <label hFor="checkbox" className="checkbox-label mt-4 ">
                      <input
                        className="checkbox-input me-2 "
                        type="checkbox"
                        id="checkbox"
                      />
                      Remind me
                    </label>
                  </div>
                  <div className="col-6  text-end ">
                    <a
                      className="checkbox-span text-decoration-none mt-4 d-block "
                      href="/signIn"
                    >
                      Forget Password?
                    </a>{" "}
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-4 mt-md-5 mb-5 mb-lg-0 submit-btn btn btn-success w-100"
                  onClick={handleClick}
                >
                  Sign In{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
