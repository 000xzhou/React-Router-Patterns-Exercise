import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

const DogDetails = ({ dogs }) => {
  const { name } = useParams();
  const navigate = useNavigate();

  const dog = dogs.find((dog) => dog.name.toLowerCase() === name.toLowerCase());

  useEffect(() => {
    if (!dog) {
      navigate("/dogs", { replace: true });
    }
  }, [dog, navigate]);

  if (!dog) {
    // Return null to render nothing while redirecting
    return null;
  }

  return (
    <div>
      <h2>{dog.name}</h2>
      <p>Age: {dog.age}</p>
      <ul>
        {dog.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default DogDetails;
