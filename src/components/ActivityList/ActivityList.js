import React from "react";
import MorningSection from "./MorningSection";
import AfternoonSection from "./AfternoonSection";
import EveningSection from "./EveningSection";
import "./ActivityList.css";

const ActivityList = () => {
  return (
    <div className="activity-sections">
      <MorningSection />
      <AfternoonSection />
      <EveningSection />
    </div>
  );
};

export default ActivityList;
