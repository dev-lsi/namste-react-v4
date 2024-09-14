import { Link } from "react-router-dom";

const NavMain = () => {
  return (
    <nav className="nav-main">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About this.Project</Link>
        </li>
        <li>
          <Link to="/contacts">Contact me</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/login">LogIn/LogOut</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMain;
