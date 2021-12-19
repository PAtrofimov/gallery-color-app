import classNames from "classnames";
import React from "react";

const Stars = ({ className, averageRating, children }) => {
  const number = React.Children.count(children);
  const caption = `${averageRating} of ${number} stars`;
  return (
    <div className="item__rating">
      <div className={classNames(className, "stars")}>{children}</div>
      <div className="items__stars-value">{caption}</div>
    </div>
  );
};

export default Stars;
