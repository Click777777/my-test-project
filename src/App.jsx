import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";
import Add from "./components/Add";
import Update from "./components/Update";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
