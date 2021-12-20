import React from "react";
import Header from "../components/Header";
import LeftMenu from "../components/LeftMenu";

const Main = ({ children }) => {
  return (
    <>
      <Header />
      <LeftMenu />
      <main role="main">{children}</main>
    </>
  );
};

export default Main;
