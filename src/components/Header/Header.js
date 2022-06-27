import { useSelector } from "react-redux";

import css from "./Header.module.css";

const Header = () => {

    const { currentEpisode, currentSeason } = useSelector(({ episodes }) => episodes);

    return (
        <div className={css.Header}>
            <h1>Rick and Morty</h1>
            {currentEpisode && <h2>{currentEpisode}</h2>}
            {currentSeason && <h3>{currentSeason}</h3>}
        </div>
    )
};

export { Header }