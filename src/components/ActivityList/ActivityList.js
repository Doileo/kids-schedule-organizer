// ActivityList.js
import React from "react";
import MorningSection from "./MorningSection";
import AfternoonSection from "./AfternoonSection";
import EveningSection from "./EveningSection";
import "./ActivityList.css";

const ActivityList = ({ animationsEnabled }) => {
  return (
    <div className="activity-sections">
      <MorningSection animationsEnabled={animationsEnabled} />
      <AfternoonSection animationsEnabled={animationsEnabled} />
      <EveningSection animationsEnabled={animationsEnabled} />
    </div>
  );
};

export default ActivityList;
