import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Rating from "../components/Rating";
import Star from "../components/Star";
import Stars from "../components/Stars";
import { RouteNames } from "../routes";
import { selectColorWithAverageRatingById } from "../selectors";
import { generateArrayAndReverse } from "../utils";

const Color = ({ id }) => {
  const isAdmin = useSelector((state) => state.user.isAdmin);
  const { color, name, averageRating } = useSelector((state) =>
    selectColorWithAverageRatingById(state, id)
  );
  const router = useHistory();
  const onClick = (e) => {
    //e.stopPropagation();
    console.log("click");
    if (isAdmin) {
      router.push(RouteNames.COLORADMIN);
    } else {
      router.push(RouteNames.COLOR);
    }
  };

  return (
    <div className="gallery__item item" onClick={onClick}>
      <div className="item__name" style={{ color }}>
        {name}
      </div>
      <div className="item__color-block" style={{ background: color }}></div>

      <Rating
        averageRating={averageRating}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Stars className="item__stars">
          {generateArrayAndReverse(5).map((value) => (
            <Star key={value} value={value} disabled />
          ))}
        </Stars>
      </Rating>
    </div>
  );
};

export default Color;
