import { carServise } from "../../services";

const Car =({car, setCarForUpdate, setDeletedCar})=>{
    const {id, model, price, year} = car;

    const deleteCar= async() => {
        await carServise.deleteById(id);
        setDeletedCar(id)
    }

    return(
        <div>
            <div>Id: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={()=>deleteCar()}>Delete</button>
            <button onClick={()=>setCarForUpdate(car)}>Update</button>
            <br/>
        </div>
    )
}

export {Car}