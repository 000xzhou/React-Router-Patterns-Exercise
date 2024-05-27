import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useLocalStorage from "./useLocalStorage";

const Color = () => {
  const { color } = useParams();
  const navigate = useNavigate();

  const [colors, setColors] = useLocalStorage("colors", [
    { name: "red", value: "red" },
    { name: "blue", value: "blue" },
    { name: "green", value: "green" },
  ]);
  // filter out the color i want
  const findColor = colors.filter((c) => c.name === color);

  // if no color found
  useEffect(() => {
    if (!findColor) {
      navigate("/colors", { replace: true });
    }
  }, [findColor, navigate]);

  if (!findColor) {
    return null; // Optional: render nothing while redirecting
  }

  const handleDeleteColor = () => {
    const updatedColors = colors.filter((c) => c.name !== color);
    setColors(updatedColors);
    navigate("/colors", { replace: true });
  };

  return (
    <div>
      <div style={{ backgroundColor: findColor[0].value, height: "10vh" }}>
        {color}
      </div>
      <button onClick={handleDeleteColor}>Delete this color</button>
    </div>
  );
};

export default Color;
