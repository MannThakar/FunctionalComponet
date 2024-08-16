import { useState } from "react";
import "../index.css";

const ParentToChild = () => {
  const [inputs, setInputs] = useState("");

  return (
    <div className="container">
      <div className="glassmorphic-box">
        <h1>Parent Compo</h1>
        <input
          type="text"
          value={inputs}
          onChange={(e) => setInputs(e.target.value)}
          placeholder="Enter text..."
          className="styled-input"
        />
        <Child data={inputs} />
      </div>
    </div>
  );
};

const Child = ({ data }) => {
  return (
    <>
      <h1>child component</h1>
      <h1 className="child-heading">Parent Data is Being Rendered: </h1>
      <p className="texting">{data}</p>
    </>
  );
};

export default ParentToChild;
