import React from "react";
import { AnimationProvider } from "./contexts/AnimationContext"; // Import AnimationProvider
import Header from "./components/Header/Header";
import "./App.css";
import ActivityList from "./components/ActivityList/ActivityList";

const App = () => {
  return (
    <AnimationProvider>
      {/* Use the AnimationProvider's context directly */}
      <div className="app">
        <Header />
        <ActivityList />
      </div>
    </AnimationProvider>
  );
};

export default App;
