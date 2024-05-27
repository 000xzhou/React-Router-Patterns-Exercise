import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "./useLocalStorage";

const ColorForm = () => {
  const [colors, setColors] = useLocalStorage("colors", [
    { name: "red", value: "red" },
    { name: "blue", value: "blue" },
    { name: "green", value: "green" },
  ]);
  const [newColor, setNewColor] = useState({ name: "", value: "#ffffff" });
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setNewColor((prevColor) => ({
      ...prevColor,
      name: e.target.value,
    }));
  };

  const handleValueChange = (e) => {
    setNewColor((prevColor) => ({
      ...prevColor,
      value: e.target.value,
    }));
  };
  const handleColorSubmit = (e) => {
    e.preventDefault();
    setColors([...colors, newColor]);
    navigate("/colors", { replace: true });
  };

  return (
    <div>
      <form onSubmit={handleColorSubmit}>
        <label>Name your color</label>
        <input type="text" value={newColor.name} onChange={handleNameChange} />
        <label>Select a color</label>
        <input
          type="color"
          value={newColor.value}
          onChange={handleValueChange}
        />
        <button type="submit">Add a new color</button>
      </form>
    </div>
  );
};

export default ColorForm;
