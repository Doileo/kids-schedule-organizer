import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [date, setDate] = useState(() => localStorage.getItem("date") || "");
  const [week, setWeek] = useState(
    () => localStorage.getItem("week") || "First week"
  );

  // Save to localStorage when the input changes
  useEffect(() => {
    localStorage.setItem("date", date);
    localStorage.setItem("week", week);
  }, [date, week]);

  return (
    <header className="header">
      <h1 className="header__title">Daily Routine</h1>

      <div className="header__inputs">
        <div className="header__input-group">
          <label htmlFor="date" className="header__label">
            Day/Date:
          </label>
          <input
            type="text"
            id="date"
            className="header__input"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Enter date (e.g. 2024-09-19)"
            aria-label="Enter day or date"
          />
        </div>

        <div className="header__input-group">
          <label htmlFor="week" className="header__label">
            Week of:
          </label>
          <input
            type="text"
            id="week"
            className="header__input"
            value={week}
            onChange={(e) => setWeek(e.target.value)}
            placeholder={week}
            aria-label="Enter week"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
