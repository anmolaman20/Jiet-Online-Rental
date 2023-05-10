import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsBuilding } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import "../../styles/Header.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-sm-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <BsBuilding size={30} className="me-2" /> JOR MarketPlace
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <FaBars />
            </span>
          </button>
          <div class="input-group rounded" style={{ width: "350px" }}>
            <input
              type="search"
              class="form-control rounded"
              className="prompt"
              placeholder="Enter the Product ..."
              aria-label="Search"
              aria-describedby="search-addon"
              style={{ backgroundColor: "#F1F1F1" }} 
            />
            <span class="input-group-text border-0" id="search-addon">
              <i class="fas fa-search" style={{ color: "black" }}></i>
            </span>
          </div>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${({ isActive }) =>
                    isActive ? "active" : "inactive"}`}
                  aria-current="page"
                  to="/"
                >
                  Explore
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${({ isActive }) =>
                    isActive ? "active" : "inactive"}`}
                  to="/offers"
                >
                  Offers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${({ isActive }) =>
                    isActive ? "active" : "inactive"}`}
                  to="/profile"
                >
                  Profile
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
