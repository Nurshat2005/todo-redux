import "./App.css";
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  let router = [
    {
      id: 1,
      link: "/",
      element: <Home/>,
    },
  ];
  return (
    <>
      <Header />
      <Routes>
        {router.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
      </Routes>
    </>
  );
};

export default App;
