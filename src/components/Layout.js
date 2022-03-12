import React from "react";
import Header from "./Header";
import { useState } from "react";

export default function Layout({ children }) {
  const [navBarActive, setNavBarActive] = useState("Home");
  return (
    <div>
      <Header clicked={navBarActive} setNavBarActive={setNavBarActive}></Header>
    </div>
  );
}
