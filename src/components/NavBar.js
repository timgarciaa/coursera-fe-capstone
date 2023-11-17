import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";

function NavBar({ type }) {
  return (
    <nav>
      <menu className={`navbar ${type}`}>
        {type === "mobile" ? (
          <></>
        ) : (
          <Link className="navlink" to="/">
            {" "}
            <img src={Logo} alt="Little Lemon" />
          </Link>
        )}

        <Link className="navlink" to="/">
          <h3>Home</h3>
        </Link>
        <Link className="navlink" to="/">
          <h3>About</h3>
        </Link>
        <Link className="navlink" to="/">
          <h3>Menu</h3>
        </Link>
        <Link className="navlink" to="/">
          <h3>Reservations</h3>
        </Link>
        <Link className="navlink" to="/">
          <h3>Order</h3>
        </Link>
        <Link className="navlink" to="/">
          <h3>Login</h3>
        </Link>
      </menu>
    </nav>
  );
}

export default NavBar;
