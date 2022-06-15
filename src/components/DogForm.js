import {useRef} from "react";
import {useDispatch} from "react-redux";

import { dogActions } from "../redux/slices/dog.slice";


const DogForm = ()=>{
    const dogName = useRef();
    const dispatch = useDispatch();


    return(
        <div>
            <label>Dog name: <input type="text" placeholder="name" ref={dogName}/></label>
            <button onClick={()=> dispatch(dogActions.addDog(dogName.current.value))}>Save</button>
        </div>
    )

};

export {DogForm}