import { useDispatch } from "react-redux";

import { catActions } from "../redux";

const Cat = ({cat})=>{

    const dispatch = useDispatch();
    return(
        <div>
            {cat.id} = {cat.name}
            <button onClick={()=> dispatch(catActions.deleteCat(cat.id))}>Delete</button>
        </div>
    )
};
export { Cat}