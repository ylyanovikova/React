import { useDispatch } from "react-redux";

import { catsDogsActions } from "../redux/slices/catsAndDogs.slice";


const Dog = ({dog})=> {

    const dispatch = useDispatch();
    return(
        <div>
            {dog.id} - {dog.name}
            <button onClick={()=> dispatch(catsDogsActions.deleteDog(dog.id))}>Delete</button>
        </div>
    )
};

export {Dog}