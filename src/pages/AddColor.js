import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useActions } from "../hooks";
import { RouteNames } from "../routes";

const initialState = { name: "", description: "", color: "" };

const AddColor = () => {
  const [state, setState] = useState(initialState);
  const router = useHistory();
  const { addColor } = useActions();

  const onChangeState = ({ target: { name, value } }) => {
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(state);
    setState(initialState);
  };

  const handleClose = (e) => {
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

      <div className="items__actions">
        <button type="submit">Add</button>
        <button onClick={handleClose}>Close</button>
      </div>
    </form>
  );
};

export default AddColor;
