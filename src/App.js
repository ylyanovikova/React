import { useState } from "react";
import { CarForm, Cars } from "./components";


function App() {

  const [newCar, setNewCar] = useState(null);
  const [carForUpdate, setCarForUpdate] = useState(null);
  const [cars, setCars] = useState([]);


  return (
    <div>
        <CarForm setNewCar={setNewCar} carForUpdate={carForUpdate} setCars={setCars}/>
        <hr/>
        <Cars cars={cars} setCars={setCars} newCar={newCar} setCarForUpdate={setCarForUpdate}/>
    </div>
  );
}
 
export default App;
