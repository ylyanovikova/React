import { useDispatch } from "react-redux";

import { catsDogsActions } from "../redux/slices/catsAndDogs.slice";

const Cat = ({cat}) =>{

    const dispatch = useDispatch();

    return(
        <div>
            {cat.id} - {cat.name}
            <button onClick={()=> dispatch(catsDogsActions.deleteCat(cat.id))}>Delete</button>
        </div>
    )
};

export {Cat}