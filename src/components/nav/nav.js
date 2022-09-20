import { Link } from "react-router-dom";
import "./nav.scss";
const Nav = () => {
  return (
    <nav className="site-nav">
      <h1 className="site-nav__title">USA NEWS</h1>
      <div className="site-nav__menu">
        <Link className="site-nav__menu-link" to={"/home"}>
          Home
        </Link>
        <Link className="site-nav__menu-link" to={"/"}>
          Other
        </Link>
        <Link className="site-nav__menu-link" to={"/"}>
          Contact
        </Link>
      </div>
    </nav>
  );
};
export default Nav;
