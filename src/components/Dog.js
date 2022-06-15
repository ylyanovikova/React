import { useDispatch } from "react-redux";

import { dogActions } from "../redux/slices/dog.slice";

const Dog = ({dog})=>{

    const dispatch = useDispatch();
    return(
        <div>
            {dog.id} - {dog.name}
            <button onClick={()=>dispatch(dogActions.deleteDog(dog.id))}>Delete</button>
        </div>
    )
};

export {Dog}