const HOST_URL = "http://localhost:8000";

export const getElevatorStatus = async (elevatorId) => {
  try {
    const response = await fetch(
      `${HOST_URL}/api/elevator/status/${elevatorId}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getAllElevators = async () => {
  try {
    const response = await fetch(`${HOST_URL}/api/elevator/`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const configureElevators = async (elevatorConfig) => {
  try {
    const response = await fetch(`${HOST_URL}/api/elevator/configure`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(elevatorConfig),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getElevatorToTake = async (fromFloor, toFloor) => {
  try {
    const response = await fetch(
      `${HOST_URL}/api/floor?from_floor=${fromFloor}&to_floor=${toFloor}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
