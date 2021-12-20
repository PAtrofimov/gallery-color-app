import React, { useMemo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Star from "../components/Star";
import Stars from "../components/Stars";
import { makeSelectColorWithAverageRatingById, selectIsAdmin } from "../selectors";
import { generateArrayAndReverse } from "../utils";

const Color = ({ id }) => {
  const isAdmin = useSelector(selectIsAdmin);
  const selectColorWithAverageRatingById = useMemo(makeSelectColorWithAverageRatingById, []);
  const { color, name, averageRating } = useSelector((state) =>
    selectColorWithAverageRatingById(state, id), shallowEqual
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
    <article className="gallery__col">
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
              id={id}
            />
          ))}
        </Stars>
      </div>
    </article>
  );
};

export default Color;
