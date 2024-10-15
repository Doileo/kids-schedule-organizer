import React, { useContext } from "react";
import MorningSection from "./MorningSection";
import AfternoonSection from "./AfternoonSection";
import EveningSection from "./EveningSection";
import "./ActivityList.css";

const ActivityList = () => {
  const { animationsEnabled } = useContext(AnimationContext); // Access the context

  return (
    <div
      className={`activity-sections ${
        animationsEnabled ? "" : "animations-disabled"
      }`}
    >
      <MorningSection />
      <AfternoonSection />
      <EveningSection />
    </div>
  );
};

export default ActivityList;
