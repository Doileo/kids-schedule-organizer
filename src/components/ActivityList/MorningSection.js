import React, { useState, useEffect } from "react";
import "./ActivityList.css";
import sunIcon from "../../assets/icons/sun-icon.svg";

const MorningSection = () => {
  const [activities, setActivities] = useState([
    { id: 1, name: "Make Bed", completed: false },
    { id: 2, name: "Oatmeal Breakfast", completed: false },
  ]);

  const [newActivity, setNewActivity] = useState("");
  const [shine, setShine] = useState(false);

  // Toggle the shine effect
  useEffect(() => {
    const shineInterval = setInterval(() => setShine((prev) => !prev), 2000);

    return () => clearInterval(shineInterval);
  }, []);

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
    <section className="routine-section" aria-labelledby="morning-section">
      <div className="routine-header">
        <img
          className={`sun-icon ${shine ? "shine" : ""}`}
          src={sunIcon}
          alt="Sun Icon"
        />
        <h2 id="morning-section">Morning Activities</h2>
        <p className="morning-hours">06:00 AM - 12:00 PM</p>
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

export default MorningSection;
