import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Daily Routine</h1>

      <div className="header__inputs">
        <div className="header__input-group">
          <label htmlFor="date" className="header__label">
            Day/Date:
          </label>
          <input
            type="date"
            id="date"
            className="header__input"
            aria-label="Select day or date"
          />
        </div>

        <div className="header__input-group">
          <label htmlFor="week" className="header__label">
            Week of:
          </label>
          <input
            type="week"
            id="week"
            className="header__input"
            aria-label="Select week"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
