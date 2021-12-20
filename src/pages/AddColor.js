import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useActions } from "../hooks";
import { RouteNames } from "../routes";
import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(5, "Name is too short (>5)!").required("Required"),
  description: Yup.string().min(10, "Description is too short (>10)!").max(300, "Description is too long(<300)!"),
  color: Yup.string().required("Color is required"),
});

const AddColor = () => {
  const router = useHistory();
  const { addColor } = useActions();

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      color: "",
    },
    validationSchema,
    onSubmit: (values, actions) => {
      addColor(values);
      actions.resetForm();
    },
  });

  const handleClose = (e) => {
    router.push(RouteNames.COLORS);
  };

  return (
    <section className="gallery-create">
      <header className="gallery-create__header">
        <h2>Add color</h2>
      </header>
      <form
      onSubmit={formik.handleSubmit}
      className="gallery-create__container"
      >
        <label className="form-line">
          <span>Name:</span>
          <input
            type="text"
            name="name"
            className="form-input"
            placeholder="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>
        {formik.touched.name && formik.errors.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}
        <div className="form-line">
          <span>Description:</span>
          <textarea
            name="description"
            className="form-input"
            rows="10"
            placeholder="Description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
        </div>
        {formik.touched.description && formik.errors.description ? (
          <div className="error">{formik.errors.description}</div>
        ) : null}
        <label className="form-line">
          <span>Choose color:</span>
          <input
            type="color"
            name="color"
            className="form-input"
            value={formik.values.color}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>
        {formik.touched.color && formik.errors.color ? (
          <div className="error">{formik.errors.color}</div>
        ) : null}
        <div className="items__actions">
          <button type="submit">Add</button>
          <button type="button" onClick={handleClose}>
            Close
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddColor;
