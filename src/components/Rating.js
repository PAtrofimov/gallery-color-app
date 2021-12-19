import React from "react";

const Rating = ({ averageRating, children }) => {
  const number = React.Children.count(children);
  const caption = `${averageRating} of ${number} stars`;

  return (
    <div className="item__rating">
      {children}
      <div className="items__stars-value">{caption}</div>
    </div>
  );
};

export default Rating;
