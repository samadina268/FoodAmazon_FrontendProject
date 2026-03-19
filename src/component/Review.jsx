import RatingGoldStar from "../assets/images/rating-goldstar.png";
import ReviewImg1 from "../assets/images/reviewimg-1.png";
import ReviewImg2 from "../assets/images/reviewimg-2.png";
import ReviewImg3 from "../assets/images/reviewimg-3.png";
import ReviewImg4 from "../assets/images/reviewimg-4.png";
import ReviewImg5 from "../assets/images/reviewimg-5.png";
import ReviewImg6 from "../assets/images/reviewimg-6.png";

const reviewsPpf = [
  {
    id: 1,
    image: ReviewImg1,
    starRating: RatingGoldStar,
    name: "Sarah Taylor",
    productName: "Organic Fruit Bites",
    review:
      "They're the perfect snack for my kids and I feel great knowing they're eating something healthy and natural.",
  },
  {
    id: 2,
    image: ReviewImg2,
    starRating: RatingGoldStar,
    name: "Meg Lanning",
    productName: "Organic Fruit Bites",
    review:
      "They're deliciously chewy and full of flavor. It's like eating a fresh mango without the mess.",
  },
  {
    id: 3,
    image: ReviewImg3,
    starRating: RatingGoldStar,
    name: "Alyssa Healy",
    productName: "Crunchy Nut Mix",
    review:
      "I'm addicted to the Spicy Nut Mix! The blend of almonds, cashews, and walnuts with a hint of spice is just perfect.",
  },
  {
    id: 4,
    image: ReviewImg4,
    starRating: RatingGoldStar,
    name: "Ellyse Perry",
    productName: "Crunchy Nut Mix",
    review:
      "The Sweet & Salty Nut Mix is the best I've ever had. The nuts are roasted to perfection, and the balance of sweet.",
  },
  {
    id: 5,
    image: ReviewImg5,
    starRating: RatingGoldStar,
    name: "Beth Mooney",
    productName: "Seed Power Bars",
    review:
      "The Original Seed Power Bar is a lifesaver for my busy mornings. It's packed with protein and fiber.",
  },
  {
    id: 6,
    image: ReviewImg6,
    starRating: RatingGoldStar,
    name: "Megan Schutt",
    productName: "Seed Power Bars",
    review:
      "I tried the Chocolate Chip Seed Power Bar, and it exceeded my expectations. The combination is superb.",
  },
];

const Review = () => {
  return (
    <div className="review-mainbox mx-auto">
      <div className="row mt-5  justify-content-between mx-auto ">
        {reviewsPpf.map((pfp) => (
          <div className="col-12  review-cardbox rounded-4 " key={pfp.id}>
            <div className=" review-inner-cardbox ">
              <div className="col-3">
                <img
                  src={pfp.image}
                  alt="product image 1"
                  loading="lazy"
                  className="w-100"
                />
              </div>
              <div className="mt-2 pfp-name">{pfp.name}</div>
              <div className="col-4">
                <img
                  src={pfp.starRating}
                  alt="pfp profile star"
                  loading="lazy"
                  className="w-100"
                />
              </div>
              <div className="mt-3 pfp-productname">{pfp.productName}</div>
              <div className="pfp-review mt-3">{pfp.review}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
