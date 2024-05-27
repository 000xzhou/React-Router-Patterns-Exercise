import React from "react";
import "./App.css";
import appDefaultProps from "./appDefaultProps";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import NotFound from "./NotFound";
import Nav from "./Nav";
import Color from "./Color";
import ColorList from "./ColorList";
import ColorForm from "./ColorForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = ({ dogs = appDefaultProps.dogs }) => {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/dogs" element={<DogList dogs={dogs} />} />
          <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/colors" element={<ColorList />} />
          <Route path="/colors/:color" element={<Color />} />
          <Route path="/colors/new" element={<ColorForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
