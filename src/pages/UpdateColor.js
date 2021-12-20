import classNames from "classnames";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import Star from "../components/Star";
import Stars from "../components/Stars";
import { useActions, useQuery } from "../hooks";
import { RouteNames } from "../routes";
import {
  makeSelectColorWithAverageRatingById,
  selectIsAdmin,
} from "../selectors";
import { generateArrayAndReverse } from "../utils";

const initialState = { name: "", description: "", color: "", rate: "" };

const UpdateColor = () => {
  const query = useQuery();
  const isAdmin = query.get("role") === "admin";
  const isAdminState = useSelector(selectIsAdmin);
  const { setIsAdmin } = useActions();

  useEffect(() => {

    if (isAdminState !== isAdmin) {
      setIsAdmin(isAdmin);
    }
    
  }, [isAdmin, isAdminState]);

  const { id } = useParams();
  const selectColorWithAverageRatingById = useMemo(
    makeSelectColorWithAverageRatingById,
    []
  );
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
    setState((prev) => ({ ...prev, rate: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editColor(state);
  };

  const handleClose = (e) => {
    router.push(RouteNames.COLORS);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const replyYes = window.confirm("The color will be removed. Continue ?");
    if (replyYes) {
      removeColor(id);
    }
    router.push(RouteNames.COLORS);
  };

  return (
    <section className="gallery-update gallery-update__container">
      <header className="gallery-update__header">
        <h2>Update color</h2>
      </header>
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

        <Stars
          className="item__stars"
          averageRating={state.averageRating}
          showCaption={isAdmin}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {generateArrayAndReverse(5).map((value) => (
            <Star
              key={value}
              value={value}
              averageRating={!isAdmin ? state.rate : state.averageRating}
              onChange={onChangeRating}
              disabled={isAdmin}
              id={id}
            />
          ))}
        </Stars>

        <div className="items__actions">
          <button type="submit">Save</button>
          <button
            type="button"
            onClick={handleDelete}
            className={classNames({ hidden: !isAdmin })}
          >
            Delete
          </button>
          <button type="button" onClick={handleClose}>
            Close
          </button>
        </div>
      </form>
    </section>
  );
};

export default UpdateColor;
