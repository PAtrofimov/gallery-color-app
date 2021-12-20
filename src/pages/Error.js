import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page">
      <header className="gallery-create__header">
        <h2>Unknown page</h2>
      </header>
      <Link to="/">Go to the main page</Link>
    </section>
  );
};

export default Error;
