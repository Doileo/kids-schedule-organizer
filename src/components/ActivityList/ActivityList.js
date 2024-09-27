import React from "react";
import MorningSection from "./MorningSection";
import "./ActivityList.css";
import AfternoonSection from "./AfternoonSection";

const ActivityList = () => {
  return (
    <div className="activity-list">
      <MorningSection />
      <AfternoonSection />
    </div>
  );
};

export default ActivityList;
