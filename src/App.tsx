import React from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default App;
