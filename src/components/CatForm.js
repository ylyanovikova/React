import { useRef } from "react"
import { useDispatch } from "react-redux";
import { catsDogsActions } from "../redux/slices/catsAndDogs.slice";

const CatForm = () => {

    const catName = useRef();
    const dispatch = useDispatch();

    const createCat = ()=>{
        dispatch(catsDogsActions.addCat(catName.current.value));
        console.log(catName);

    }

    return(
        <div>
            <label>Cat name: <input type={"text"} placeholder={"Enter cat name"} ref={catName}/></label>
            <button onClick={()=>createCat()}>Save</button>
        </div>
    )
};

export {CatForm};