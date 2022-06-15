import { useRef } from "react"
import { useDispatch } from "react-redux";

import { catsDogsActions } from "../redux/slices/catsAndDogs.slice";


const DogForm = ()=>{

    const catName = useRef();
    const dispatch = useDispatch();

    return(
        <div>
            <label>Dog name: <input type="text" placeholder="Enter dog's name" ref={catName} /></label>
            <button onClick={()=>dispatch(catsDogsActions.addDog(catName.current.value))}>Save</button>
        </div>
    )

};

export {DogForm};