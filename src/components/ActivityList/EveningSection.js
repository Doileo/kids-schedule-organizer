import React, { useState } from "react"; // Remove useEffect import
import moonIcon from "../../assets/icons/nightlight.svg";
import "./ActivityList.css";

const EveningSection = () => {
  const [activities, setActivities] = useState([
    { id: 1, name: "Dinner", completed: false },
    { id: 2, name: "Reading", completed: false },
  ]);

  const [newActivity, setNewActivity] = useState("");

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const glow = !prefersReducedMotion ? "glow" : "";

  const handleAddActivity = () => {
    if (newActivity.trim()) {
      setActivities((prevActivities) => [
        ...prevActivities,
        { id: prevActivities.length + 1, name: newActivity, completed: false },
      ]);
      setNewActivity("");
    }
  };

  const handleDeleteActivity = (id) => {
    setActivities((prevActivities) =>
      prevActivities.filter((activity) => activity.id !== id)
    );
  };

  const handleToggleComplete = (id) => {
    setActivities((prevActivities) =>
      prevActivities.map((activity) =>
        activity.id === id
          ? { ...activity, completed: !activity.completed }
          : activity
      )
    );
  };

  return (
    <section className="routine-section" aria-labelledby="evening-section">
      <div className="routine-header">
        <img
          className={`moon-icon ${glow}`} // Apply glow effect based on preferences
          src={moonIcon}
          alt="Moon Icon"
        />
        <h2 id="evening-section">Evening Activities</h2>
        <p className="evening-hours">06:00 PM - 10:00 PM</p>
      </div>

      <div className="activity-container">
        <ul className="activity-list">
          {activities.map((activity) => (
            <li
              key={activity.id}
              className={`activity-item ${
                activity.completed ? "completed" : ""
              }`}
            >
              <label>
                <input
                  type="checkbox"
                  checked={activity.completed}
                  onChange={() => handleToggleComplete(activity.id)}
                  aria-label={`Mark ${activity.name} as complete`}
                />
                {activity.name}
              </label>
              <button
                className="delete-btn"
                onClick={() => handleDeleteActivity(activity.id)}
                aria-label={`Delete ${activity.name}`}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        <div className="new-activity">
          <input
            type="text"
            value={newActivity}
            onChange={(e) => setNewActivity(e.target.value)}
            placeholder="Add a new activity"
            aria-label="New activity input"
          />
          <button className="add-activity-button" onClick={handleAddActivity}>
            Add
          </button>
        </div>
      </div>
    </section>
  );
};

export default EveningSection;
