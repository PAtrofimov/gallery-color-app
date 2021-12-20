import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useActions } from "../hooks";
import { selectIdColors, selectIsAdmin } from "../selectors";
import Color from "./Color";

const Colors = () => {
  const { setIsAdmin } = useActions();

  const isAdmin = useSelector(selectIsAdmin);
  const { isLoading, error } = useSelector((state) => state.color, shallowEqual);

  const handleClick = () => {
    setIsAdmin(!isAdmin);
  };
  const colors = useSelector(selectIdColors);

  return (
    <section className="gallery">
      <header className="gallery__header">
        <h2>Colors list</h2>
      </header>
      <button
        onClick={handleClick}
        style={{ marginRight: "auto", marginBottom: "20px" }}
      >
        {isAdmin ? "Try User" : "Try Admin"}
      </button>
      {isLoading ? (
        <div>Loading ...</div>
      ) : error ? (
        <div>Some error appears. Reload please!</div>
      ) : (
        <div className="gallery__row">
          {colors.map((id) => (
            <Color key={id} id={id} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Colors;
