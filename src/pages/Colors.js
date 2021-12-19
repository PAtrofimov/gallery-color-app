import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../hooks";
import { selectIdColors } from "../selectors";
import Color from "./Color";

const Colors = () => {
  const { fetchColors, setIsAdmin } = useActions();

  const isAdmin = useSelector((state) => state.user.isAdmin);
  useEffect(() => {
    fetchColors();
  }, []);
  const handleClick = () => {
    setIsAdmin(!isAdmin);
  };
  const colors = useSelector(selectIdColors);

  return (
    <main role="main">
      <section className="gallery">
        <header className="gallery__header">
          <h2>Colors list</h2>
        </header>
        <div className="gallery__row">
          {colors.map((id) => (
            <Color key={id} id={id} />
          ))}
        </div>
        <button onClick={handleClick}>
          {isAdmin ? "Try User" : "Try Admin"}
        </button>
      </section>
      |
    </main>
  );
};

export default Colors;
