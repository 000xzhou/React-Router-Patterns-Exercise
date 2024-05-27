import React from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "./useLocalStorage";

const ColorList = () => {
  const [colors, setColors] = useLocalStorage("colors", [
    { name: "red", value: "red" },
    { name: "blue", value: "blue" },
    { name: "green", value: "green" },
  ]);
  const handleDeleteAllColors = () => {
    setColors([]);
  };

  return (
    <div>
      <h3>List of colors</h3>
      <ul>
        {colors.map((color) => (
          <li key={color.name}>
            <Link to={`/colors/${color.name}`}>{color.name}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleDeleteAllColors}>Delete all colors</button>
    </div>
  );
};

export default ColorList;
