import { useEffect, useState } from "react";

import { carService } from "../../services/car.service";
import { Car } from "../../components";


const Cars = ({newCar, setCarToUpdate, updatedCar})=>{

    const [cars, setCars] = useState([]);
    const [deletedCar, setDeletedCar] = useState(null);

    useEffect(()=>{
        carService.getAll().then(({data})=>setCars(data))
    },[]);

    useEffect(()=>{
        if(newCar){
            setCars(prevState => [...prevState, newCar])
        }
    },[newCar])
        
    useEffect(()=>{
        if(deletedCar){
            setCars(cars.filter(car=> car.id !== deletedCar))
        }
        if(updatedCar){
            const car = cars.find(car=> car.id === updatedCar.id);
            Object.assign(car, updatedCar);
            setCars([...cars])
        }
    },[deletedCar, updatedCar])


    return(
        <div>
            {cars.map(car=> <Car key={car.id} car={car} setDeletedCar={setDeletedCar} setCarToUpdate={setCarToUpdate}/>)}
        </div>
    )
}

export {Cars}