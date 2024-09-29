import React, { useState } from "react";
import "./ActivityList.css";
import moonIcon from "../../assets/icons/nightlight.svg";

const EveningSection = () => {
  const [activities, setActivities] = useState([
    { id: 1, name: "Dinner", completed: false },
    { id: 2, name: "Reading", completed: false },
    { id: 3, name: "Prepare for bed", completed: false },
  ]);

  const [newActivity, setNewActivity] = useState("");

  const handleAddActivity = () => {
    if (newActivity.trim()) {
      setActivities([
        ...activities,
        { id: activities.length + 1, name: newActivity, completed: false },
      ]);
      setNewActivity("");
    }
  };

  const handleDeleteActivity = (id) => {
    setActivities(activities.filter((activity) => activity.id !== id));
  };

  const handleToggleComplete = (id) => {
    setActivities(
      activities.map((activity) =>
        activity.id === id
          ? { ...activity, completed: !activity.completed }
          : activity
      )
    );
  };

  return (
    <section className="routine-section" aria-labelledby="evening-section">
      <div className="routine-header">
        <img className="moon-icon" src={moonIcon} alt="Moon Icon" />
        <h2 id="evening-section">Evening Activities</h2>
        <p className="evening-hours">06:00 PM - 12:00 AM</p>
      </div>

      <ul className="activity-list">
        {activities.map((activity) => (
          <li
            key={activity.id}
            className={`activity-item ${activity.completed ? "completed" : ""}`}
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
    </section>
  );
};

export default EveningSection;
