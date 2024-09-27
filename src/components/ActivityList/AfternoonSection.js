import React, { useState } from "react";
import "./ActivityList.css";
import sunCloudIcon from "../../assets/icons/cloudly-icon.svg";

const AfternoonSection = () => {
  const [activities, setActivities] = useState([
    { id: 1, name: "Lunch", completed: false },
    { id: 2, name: "Playing outside", completed: false },
    { id: 3, name: "Homework", completed: false },
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
    <section className="routine-section" aria-labelledby="afternoon-section">
      <div className="routine-header">
        <img
          className="float-icon"
          src={sunCloudIcon}
          alt="Sun with Cloud Icon"
        />
        <h2 id="afternoon-section">Afternoon Activities</h2>
        <p className="afternoon-hours">12:00 PM - 06:00 PM</p>
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

export default AfternoonSection;
