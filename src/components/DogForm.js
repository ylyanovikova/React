import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { dogActions } from "../redux/slices/dog.slice";

const DogForm = () => {
    const dogName = useRef();
    const dispatch = useDispatch();

    const [name, setName] = useState("");

    const { dogForUpdate } = useSelector(({ dogs }) => dogs);

    useEffect(() => {
        if (dogForUpdate) {
            setName(dogForUpdate.name);
        }
    }, [dogForUpdate]);

    const createDog = (dog) => {
        if (dogForUpdate) {
            dispatch(dogActions.updateDog({ id: dogForUpdate.id, name }));
            console.log(dogForUpdate);
        } else {
            dispatch(dogActions.addDog(dog));
        }
        setName('');
    }

    return (
        <div>
            <label>Dog name: <input type="text" placeholder="name" ref={dogName} onChange={(e) => setName(e.target.value)} value={name} /></label>
            <button onClick={() => createDog(dogName.current.value)}>Save</button>
        </div>
    )

};

export { DogForm }