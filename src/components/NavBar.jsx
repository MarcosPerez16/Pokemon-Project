// imports here
import { Link } from "react-router-dom";
const NavBar = () => {
  // logic here
  return (
    <div>
      <Link to={"/"}>Homepage</Link>
      <Link to={"singleview"}>Single View Page</Link>
    </div>
  );
};

export default NavBar;
