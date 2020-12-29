import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Vidly
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#vidlyNavbar"
          aria-controls="vidlyNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="vidlyNavbar">
          <div className="navbar-nav">
            <NavLink to="/movies" className="nav-link nav-item">
              Movies
            </NavLink>

            <NavLink to="/customers" className="nav-link nav-item">
              Customers
            </NavLink>

            <NavLink to="/rentals" className="nav-link nav-item">
              Rentals
            </NavLink>

            {!user && (
              <>
                <NavLink to="/login" className="nav-link nav-item">
                  Login
                </NavLink>
                <NavLink to="/register" className="nav-link nav-item">
                  Register
                </NavLink>
              </>
            )}
            {user && (
              <>
                <NavLink to="/profile" className="nav-link nav-item">
                  {user.name}
                </NavLink>
                <NavLink to="/logout" className="nav-link nav-item">
                  Logout
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
