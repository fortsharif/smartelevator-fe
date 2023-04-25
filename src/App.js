import React, { useState, useEffect } from "react";
import "./App.css";
import {
  getAllElevators,
  configureElevators,
  getElevatorStatus,
  getElevatorToTake,
} from "./api/api";
import ControlPanel from "./ControlPanel/ControlPanel";
import Configurator from "./Configurator/Configurator";

const App = () => {
  const [elevatorsConfigured, setElevatorsConfigured] = useState(false);
  const [currentFloor, setCurrentFloor] = useState(0);

  useEffect(() => {
    checkElevatorsConfigured();
  }, []);

  const checkElevatorsConfigured = async () => {
    const data = await getAllElevators();
    console.log(data);
    if (data.length === 0) {
      setElevatorsConfigured(false);
    } else {
      setElevatorsConfigured(true);
    }
  };

  const handleConfigureClick = async (elevatorConfig) => {
    const data = await configureElevators(elevatorConfig);
    console.log(data);
    if (data.status === "success") {
      setElevatorsConfigured(true);
    }
  };

  const handleFloorClick = async (floor) => {
    console.log(`Button ${floor} was clicked`);
    const response = await getElevatorToTake(currentFloor, floor);
    console.log(response);
    if (response?.direction) {
      const direction = response.direction === "left" ? "Left" : "Right";
      alert(
        `You should take ${response.elevator_id} it is arriving on your ${direction}`
      );
      setCurrentFloor(floor);
    } else {
      alert(
        `It seems like there are no elevators that could take you from ${currentFloor} to ${floor}`
      );
    }
  };

  if (!elevatorsConfigured) {
    return (
      <div>
        <h1>Welcome to the Smart Elevator</h1>
        <p>Please configure the elevators before using the app.</p>
        <Configurator onConfigure={handleConfigureClick} />
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome to My Elevator App</h1>
      <p>Current floor: {currentFloor}</p>
      <ControlPanel
        handleFloorClick={(elevatorConfig) => handleFloorClick(elevatorConfig)}
      />
    </div>
  );
};

export default App;
