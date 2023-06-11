import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { SignIn } from "phosphor-react";
import { SignOut } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div>
      <img
        id="logo-main"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32877/logo-thing.png"
        width="200"
        alt="Logo Thing main logo"
      ></img>

      <div className="navbar">
        <div className="links">
          <Link to="/"> Shop </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/cart">
            <ShoppingCart size={32} />
          </Link>
          <Link to="/signin">
            <SignIn size={32} />
          </Link>
          <Link to="/signout">
            <SignOut size={32} />
          </Link>
        </div>
        <div className="search-item">
          <input type="search" placeholder="Search..." className="search-input" />
        </div>
      </div>
    </div>
  );
};

// Need to fix overlaping on logothing  and fix the placeholder for search
