// components/Layout.js
import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export const Layout = ({ children }: any) => {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
