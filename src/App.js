import React from "react";
import Header from "./components/Header/Header";
import MorningSection from "./components/ActivityList/MorningSection";
import AfternoonSection from "./components/ActivityList/AfternoonSection";
import EveningSection from "./components/ActivityList/EveningSection";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <MorningSection />
      <AfternoonSection />
      <EveningSection />
    </div>
  );
};

export default App;
