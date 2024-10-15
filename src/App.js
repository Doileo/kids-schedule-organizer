// App.js
import React from "react";
import Header from "./components/Header/Header";
import ActivityList from "./components/ActivityList/ActivityList";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <ActivityList />
    </div>
  );
};

export default App;
