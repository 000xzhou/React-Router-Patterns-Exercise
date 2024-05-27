import { Link } from "react-router-dom";

const Nav = ({ dogs }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/dogs">Dog List</Link>
        </li>
        <li>
          <Link to="/colors">Color List</Link>
        </li>
        <li>
          <Link to="/colors/new">Add Color</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
