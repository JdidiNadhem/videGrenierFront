import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const isAuth = useSelector((state) => state.utilisateurReducer.isAuth);

  return (
    <header id="header" className="fixed-top header-inner-pages">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo">
          <a href="index.html">Vide Grenier</a>
        </h1>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="/#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/#categories">
              Categories
              </a>
            </li>
            <li>
              <a className="nav-link scrollto " href="/#portfolio">
                Produits
              </a>
            </li>
            {isAuth && isAuth === true ? (
              <li>
                <div>
                  <button
                    className="btn btn-secondary"
                    onClick={() => {
                      //
                    }}
                  >
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span
                      style={{
                        position: "absolute",
                        bottom: "40px",
                        fontSize: "15px",
                        fontWeight: 800,
                        color: "red",
                      }}
                    >
                      0
                    </span>
                  </button>
                </div>
              </li>
            ) : null}
            {isAuth && isAuth === true ? (
              <li>
                <FontAwesomeIcon style={{color:"white",cursor:"pointer"}} icon={faUser} />
              </li>
            ) : (
              <li>
                <NavLink to="/login">Connexion</NavLink>
              </li>
            )}
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
