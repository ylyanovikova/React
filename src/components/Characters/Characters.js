import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { charactersService } from "../../services/characters.service";
import { Character } from "../Character/Character";
import css from "./Characters.module.css";

const Characters = () => {

    const { state } = useLocation();
    const [characters, setcharacters] = useState([]);


    useEffect(() => {
        charactersService.getByCharactersList(state).then(({ data }) => setcharacters(data));
    }, []);

    return (
        <div className={css.characters}>
            {characters.map(character => <Character key={character.id} character={character} />)}
        </div>
    )
};

export { Characters };