import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [date, setDate] = useState(() => localStorage.getItem("date") || "");
  const [week, setWeek] = useState(
    () => localStorage.getItem("week") || "First week"
  );

  useEffect(() => {
    localStorage.setItem("date", date);
    localStorage.setItem("week", week);
  }, [date, week]);

  return (
    <header className="header">
      <h1 className="header__title">Daily Routine</h1>
      <div className="header__inputs">
        {/* Day/Date input */}
        <div className="header__input-group">
          <label htmlFor="date" className="header__label">
            Day/Date:
          </label>
          <input
            type="date"
            id="date"
            className="header__input"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            aria-label="Enter day or date"
          />
        </div>

        {/* Week of input */}
        <div className="header__input-group">
          <label htmlFor="week" className="header__label">
            Week of:
          </label>
          <select
            id="week"
            className="header__input"
            value={week}
            onChange={(e) => setWeek(e.target.value)}
            aria-label="Select week"
          >
            <option value="First week">First week</option>
            <option value="Second week">Second week</option>
            <option value="Third week">Third week</option>
            <option value="Fourth week">Fourth week</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
