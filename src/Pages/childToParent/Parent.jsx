import { useState } from "react";
import Child from "./Child";
import "./ParentToChild.css";

const ParentToChild = () => {
  const [child, setChild] = useState("");

  const handleDataFromChild = (data) => {
    setChild(data);
  };

  return (
    <div className="container">
      <div className="glassmorphic-box">
        <h1 className="parent-heading">Data from Child: {child}</h1>
        <Child sendDataToParent={handleDataFromChild} />
      </div>
    </div>
  );
};

export default ParentToChild;
