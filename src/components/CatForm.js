import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { catActions } from "../redux";

const CatForm = () => {
    const catName = useRef();
    const dispatch = useDispatch();

    const [name, setName] = useState('');

    const { catForUpdate } = useSelector((state) => state.cats);

    useEffect(() => {
        if (catForUpdate) {
            setName(catForUpdate.name)
        }
    }, [catForUpdate]);


    const addCat = (catName) => {
        if (catForUpdate) {
            dispatch(catActions.updateCat({ id: catForUpdate.id, name }));
        } else {

            dispatch(catActions.addCat({ name: catName }));
        }
        setName('');
    }

    return (
        <div>
            <label>Cat name: <input type="text" placeholder="name" ref={catName} onChange={(e) => setName(e.target.value)} value={name} /></label>
            <button onClick={() => addCat(catName.current.value)}>Save</button>
        </div>
    )
};
export { CatForm }