import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import "../styles/Sidebar.css";

const Sidebar: React.FC = () => {
  const titles = useSelector((state: RootState) => state.data.titles);

  return (
    <div className="sidebar">
      <h2>Titles</h2>
      <ul>
        {titles.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
