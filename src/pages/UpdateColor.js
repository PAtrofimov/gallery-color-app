import classNames from "classnames";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Rating from "../components/Rating";
import Star from "../components/Star";
import Stars from "../components/Stars";
import { useActions, useQuery } from "../hooks";
import { RouteNames } from "../routes";
import { selectColorWithAverageRatingById } from "../selectors";
import { generateArrayAndReverse } from "../utils";

const initialState = { name: "", description: "", color: "", rate: "" };

const UpdateColor = ({ id }) => {
  const query = useQuery();
  const isAdmin = query.get("role") === "admin";

  const savedState = useSelector((state) =>
    selectColorWithAverageRatingById(state, id)
  );

  const [state, setState] = useState({ ...initialState, ...savedState });
  const router = useHistory();
  const { editColor, removeColor } = useActions();

  const onChangeState = ({ target: { name, value } }) => {
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onChangeRating = (value) => {
    console.log(value);
    setState((prev) => ({ ...prev, rate: [value] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editColor(state);
  };

  const handleClose = (e) => {
    router.push(RouteNames.COLORS);
  };

  const handleDelete = (e) => {
    const replyYes = window.confirm("The color will be removed. Continue ?");
    if (replyYes) {
      removeColor(id);
    }
    router.push(RouteNames.COLORS);
  };

  return (
    <form
      className="gallery-create gallery-create__container"
      onSubmit={handleSubmit}
    >
      <label className="form-line">
        <span>Name:</span>
        <input
          type="text"
          name="name"
          className="form-input"
          placeholder="Name"
          value={state.name}
          onChange={onChangeState}
        />
      </label>
      <div className="form-line">
        <span>Description:</span>
        <textarea
          name="description"
          className="form-input"
          rows="10"
          placeholder="Description"
          value={state.description}
          onChange={onChangeState}
        ></textarea>
      </div>
      <label className="form-line">
        <span>Choose color:</span>
        <input
          type="color"
          name="color"
          className="form-input"
          value={state.color}
          onChange={onChangeState}
        />
      </label>
      <Rating
        averageRating={state.averageRating}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Stars className="item__stars">
          {generateArrayAndReverse(5).map((value) => (
            <Star key = {value} value={value} onChange={onChangeRating} disabled={isAdmin} />
          ))}
        </Stars>
      </Rating>

      <div className="items__actions">
        <button type="submit">Save</button>
        <button
          onClick={handleDelete}
          className={classNames({ hide: !isAdmin })}
        >
          Delete
        </button>
        <button onClick={handleClose}>Close</button>
      </div>
    </form>
  );
};

export default UpdateColor;
