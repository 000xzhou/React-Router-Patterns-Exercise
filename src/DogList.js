import { Link } from "react-router-dom";

const DogList = ({ dogs }) => {
  return (
    <div>
      <h3>List of dogs</h3>
      <ul>
        {dogs.map((dog) => (
          <li>
            <Link key={dog.src} to={`/dogs/${dog.src}`}>
              {dog.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DogList;
