import OrganicSnackImg from "../assets/images/organicsnack-wrapper.png";
const OrganicSnack = () => {
  return (
    <div id="healthBenefits" className="organicsnack-mainbox mx-auto">
      <div className="row mt-5 pt-5 g-0 justify-content-between">
        <div className="col-12 col-lg-5 d-flex align-items-center">
          <div>
            <img
              src={OrganicSnackImg}
              alt="orgainic snacks wrapper image"
              loading="lazy"
              className="w-100"
            />
            <div className="mx-auto text-center">
              <button className="rounded-5 mt-4 btn btn-success ">
                100% Organic
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <h1 className="osnacks-h1 mt-5 mt-lg-0  ">
            HIGH QUALITY <span className="osancks-h1-span">ORGANIC SNACKS</span>
          </h1>
          <div className="osnacks-note mt-3">
            At Foodie Amazon, we believe in the power of nature to provide
            wholesome, delicious snacks. Our journey began with a simple
            mission: to bring the pure taste of nature to your doorstep. We are
            dedicated to creating snacks that are not only delicious but also
            healthy and free from artificial additives. Our major focus is on
            providing organic snacks that are made with the finest ingredients
            sourced from sustainable farms.
            <p className="osnacks-note">
              Our commitment to quality means that you won't find any gums,
              preservatives, or artificial sugars in our products. Instead, we
              use natural sweeteners and preservatives to ensure that every bite
              is as healthy as it is tasty.
            </p>
            <span className="osnacks-note-span mt-3">
              Our vision is to become a household name in organic snacks, known
              for our commitment to quality and sustainability.
            </span>
          </div>

          <div className="osnacks-note-footer mt-4">
            John Doe{" "}
            <span className="osnacks-note-footer-span d-block">
              Chief Executive Officer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganicSnack;
