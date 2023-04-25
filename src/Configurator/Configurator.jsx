import React, { useState } from "react";
import "./Configurator.css";

const Configurator = ({ onConfigure }) => {
  const [elevators, setElevators] = useState([]);
  const [floors, setFloors] = useState("");

  const handleAddElevator = () => {
    const newElevator = {
      elevator_id: String.fromCharCode(65 + elevators.length), // assign next alphabet as elevator ID
      floors: floors.split(",").map((floor) => parseInt(floor.trim())), // convert floors string to array of integers
    };
    setElevators([...elevators, newElevator]);
    setFloors("");
  };

  const handleConfigureClick = () => {
    onConfigure(elevators);
  };

  return (
    <div className="configurator">
      <h2>Elevator Configurator</h2>
      <h5>Please comma seperate each floor i.e 0,1,2,3 (0-9 ONLY)</h5>
      <label>
        Floors Serviced:
        <input
          type="text"
          value={floors}
          onChange={(e) => setFloors(e.target.value)}
        />
      </label>
      <button onClick={handleAddElevator}>Add Elevator</button>
      <ul>
        {elevators.map((elevator) => (
          <li key={elevator.elevator_id}>
            {elevator.elevator_id} - {elevator.floors.join(", ")}
          </li>
        ))}
      </ul>
      <button onClick={handleConfigureClick}>Configure Elevators</button>
    </div>
  );
};

export default Configurator;
