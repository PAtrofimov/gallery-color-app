import React from "react";
import Header from "../components/Header";
import LeftMenu from "../components/LeftMenu";

const Main = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <LeftMenu />
        {children}
      </div>
    </>
  );
};

export default Main;
