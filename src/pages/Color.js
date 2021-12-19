import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Star from "../components/Star";
import Stars from "../components/Stars";
import { selectColorWithAverageRatingById } from "../selectors";
import { generateArrayAndReverse } from "../utils";

const Color = ({ id }) => {
  const isAdmin = useSelector((state) => state.user.isAdmin);
  const { color, name, averageRating } = useSelector((state) =>
    selectColorWithAverageRatingById(state, id)
  );
  const router = useHistory();
  const onClick = (e) => {
    e.stopPropagation();
    if (isAdmin) {
      router.push(`/color/${id}?role=admin`);
    } else {
      router.push(`/color/${id}`);
    }
  };

  return (
    <div className="gallery__item item" onClick={onClick}>
      <div className="item__name" data-name={name} style={{ color }}>
        {name}
      </div>
      <div className="item__color-block" style={{ background: color }}></div>

      <Stars
        className="item__stars"
        averageRating={averageRating}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {generateArrayAndReverse(5).map((value) => (
          <Star
          key={value}
          value={value}
          disabled
          averageRating={averageRating}
          id = {id}
          />
        ))}
      </Stars>
    </div>
  );
};

export default Color;
