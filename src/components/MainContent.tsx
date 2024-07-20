import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTitle, generateData } from "../redux/actions";
import Typing from "react-typing-effect";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import "../styles/MainContent.css";
import { RootState } from "../redux/store";
import { generateRandomData } from "../utils/dataGenerator";

const MainContent: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.data.generatedData);

  const handleGenerate = () => {
    const newData = generateRandomData();
    dispatch(addTitle(query));
    dispatch(generateData(newData));
  };

  return (
    <div className="main-content">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your query"
      />
      <button onClick={handleGenerate}>Generate</button>
      <Typing text={`Generated data for ${query}:`} />
      <div>
        <InlineMath>{data}</InlineMath>
      </div>
    </div>
  );
};

export default MainContent;
