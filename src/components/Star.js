import React from "react";

const Star = ({ id: sid, value, disabled, averageRating, onChange: onChangeParent }) => {

  const id = `star-${sid}-${value}`;
  const name = `rating${sid}`;
  const title = `Rating «${value}»`;
  const onChange = () => {
   onChangeParent(value);
  };
  return (
    <>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        checked={averageRating === value}
      />
      <label htmlFor={id} title={title}></label>
    </>
  );
};

Star.defaultProps = {
  disabled: false,
  onChange: () => {}
};

export default Star;
