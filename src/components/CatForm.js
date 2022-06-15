import {useRef} from "react";
import { useDispatch} from "react-redux";

import { catActions } from "../redux";

const CatForm = ()=>{
    const catName = useRef();
    const dispatch = useDispatch();

    return(
        <div>
            <label>Cat name: <input type="text" placeholder="name" ref={catName} /></label>
            <button onClick={()=>dispatch(catActions.addCat({name: catName.current.value}))}>Save</button>
        </div>
    )
};
export {CatForm}