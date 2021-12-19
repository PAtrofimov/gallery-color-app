import classNames from "classnames";
import React from "react";

const Stars = ({ className, children }) => {
  return (
    <div className={classNames(className, "stars")}>
       {children}
    </div>
  );
};

export default Stars;
