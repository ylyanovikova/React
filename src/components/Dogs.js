import { useSelector } from "react-redux";

import { Dog } from "./Dog";

const Dogs = ()=>{
    const {dogs} = useSelector(state=> state.catsAndDogs);

    return(
        <div>
            <h1>DOGS</h1>
            {dogs.map(dog=> <Dog key={dog.id} dog={dog}/>)}
        </div>
    )
};

export {Dogs}

