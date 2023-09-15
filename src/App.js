import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Color from "./components/Color";
import ColorDetails from "./components/ColorDetails";
import ColorProvider from "./provider/AppProvider";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ColorProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/save" element={<Color />}></Route>
            <Route path="/edit" element={<ColorDetails />}></Route>
          </Routes>
        </ColorProvider>
      </BrowserRouter>
    </>
  );
};
export default App;
