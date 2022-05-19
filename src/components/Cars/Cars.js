import { useEffect, useState } from "react"
import { carServise } from "../../services";
import { Car } from "../../components";

const Cars =({cars, setCars, newCar, setCarForUpdate})=>{

// const [cars, setCars] = useState([]);
const [deletedCar, setDeletedCar]= useState(null);

 useEffect(()=>{
    carServise.getAll().then(({data})=>setCars(data))
 }, []);

 useEffect(()=>{
    if(newCar){
        // setCars(prevState=> [...prevState, newCar])
        setCars([...cars, newCar])
    }
 }, [newCar]);
 
 useEffect(()=>{
     if(deletedCar){
        setCars(cars.filter(car => car.id !== deletedCar))
     }
 }, [deletedCar]);


    return(
        <div>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setDeletedCar={setDeletedCar}/>)}
        </div>
    )
}
export {Cars}