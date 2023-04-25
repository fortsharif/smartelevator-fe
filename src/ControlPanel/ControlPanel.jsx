import React from "react";
import "./ControlPanel.css";

const ControlPanel = ({ handleFloorClick }) => {
  return (
    <div className="control-panel">
      <div className="row">
        <button className="button" onClick={() => handleFloorClick(0)}>
          0
        </button>
        <button className="button" onClick={() => handleFloorClick(1)}>
          1
        </button>
        <button className="button" onClick={() => handleFloorClick(2)}>
          2
        </button>
      </div>
      <div className="row">
        <button className="button" onClick={() => handleFloorClick(3)}>
          3
        </button>
        <button className="button" onClick={() => handleFloorClick(4)}>
          4
        </button>
        <button className="button" onClick={() => handleFloorClick(5)}>
          5
        </button>
      </div>
      <div className="row">
        <button className="button" onClick={() => handleFloorClick(6)}>
          6
        </button>
        <button className="button" onClick={() => handleFloorClick(7)}>
          7
        </button>
        <button className="button" onClick={() => handleFloorClick(8)}>
          8
        </button>
      </div>
      <div className="row">
        <button className="button" onClick={() => handleFloorClick(9)}>
          9
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
