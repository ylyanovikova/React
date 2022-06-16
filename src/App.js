import { useState } from "react";

import {CarForm, Cars} from "./components";

function App() {

  const [newCar, setNewCar] = useState(null);
  const [carToUpdate, setCarToUpdate] = useState(null);
  const [updatedCar, setUpdatedCar] = useState(null);

  return (
    <div>
      <CarForm setNewCar={setNewCar} carToUpdate={carToUpdate} setUpdatedCar={setUpdatedCar} setCarToUpdate={setCarToUpdate}/>
      <hr/>
      <Cars newCar={newCar} setCarToUpdate={setCarToUpdate} updatedCar={updatedCar}/>
          
    </div>
  );
}

export default App;
