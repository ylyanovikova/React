import { useSelector } from "react-redux";

import { Cat } from "./Cat";

const Cats = ()=>{
    const {cats} = useSelector(state=> state.catsAndDogs);

    return(
        <div>
            <h1>CATS</h1>
            {cats.map(cat=> <Cat key={cat.id} cat={cat}/>)}
        </div>
    )
};

export {Cats};