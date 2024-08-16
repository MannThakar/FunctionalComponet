import "./ParentToChild.css";

const Child = ({ sendDataToParent }) => {
  const handleClick = () => {
    const data = "Hello Parent!";
    sendDataToParent(data); // Sending data to parent
  };

  return (
    <div className="child-container">
      <button className="child-button" onClick={handleClick}>
        Send Data to Parent
      </button>
    </div>
  );
};

export default Child;
