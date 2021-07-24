import React, { useState } from "react";
import "./App.css";

import SideBar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";

// eslint-disable-next-line
const App = () => {
  const [sideBar, setSideBar] = useState(false);

  const openSideBar = () => {
    setSideBar(true);
  };

  const closeSideBar = () => {
    setSideBar(false);
  };
  return (
    <div className="container">
      <Navbar sideBar={sideBar} openSideBar={openSideBar} />
      <Main/>
      <SideBar sideBar={sideBar} closeSideBar={closeSideBar} />
    </div>
  );
};

export default App;
