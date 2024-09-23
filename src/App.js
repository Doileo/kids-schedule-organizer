import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import ActivityList from "./components/ActivityList/ActivityList";

const App = () => {
  return (
    <div className="app">
      <Header />
      <ActivityList />
    </div>
  );
};

export default App;
