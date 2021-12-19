import React from "react";

const Star = ({ value, disabled, onChange: onChangeParent }) => {
  const id = `star-${value}`;
  const title = `Rating «${value}»`;
  const onChange = () => {
   onChangeParent(value);
  };
  return (
    <>
      <input
        type="radio"
        id={id}
        name="rating"
        value={value}
        onChange={onChange}
        disabled={disabled}
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
