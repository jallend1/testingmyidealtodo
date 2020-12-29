import React from "react";
import { Link } from "@reach/router";
const Header = () => {
  return (
    <>
      <header className="mdl-layout__header">
        <div className="mdl-layout-icon"></div>
        <div className="mdl-layout__header-row">
          <span className="mdl-layout__title">To Do</span>
          <div className="mdl-layout-spacer"></div>
          <nav className="mdl-navigation">
            <Link to="/" className="mdl-navigation__link">
              Home
            </Link>
            <Link to="/archive" className="mdl-navigation__link">
              Archive
            </Link>
            <Link to="/about" className="mdl-navigation__link">
              About
            </Link>
            <a href="https://www.google.com/" className="mdl-navigation__link">
              Templates
            </a>
          </nav>
        </div>
      </header>
      <div className="mdl-layout__drawer">
        <span className="mdl-layout--title">To Do</span>
        <nav className="mdl-navigation">
          <Link to="/" className="mdl-navigation__link">
            Home
          </Link>
          <Link to="/archive" className="mdl-navigation__link">
            Archive
          </Link>
          <Link to="/about" className="mdl-navigation__link">
            About
          </Link>
          <a href="https://www.google.com" className="mdl-navigation__link">
            Templates
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
