import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { episodesActions } from "../../redux/slices/episodes.slice";
import css from "./Episode.module.css";

const Episode = ({ episode: singleEpisode }) => {

    const { name, air_date, episode, characters } = singleEpisode;

    const chatactersIdArr = characters.map(item => item.split("/").slice(-1)[0]);
    const chatactersIds = chatactersIdArr.join(",");

    const dispatch = useDispatch();

    return (
        <Link to={`/characters/${chatactersIds}`} state={characters} className={css.link}>
            <div className={css.episode} onClick={() => dispatch(episodesActions.currentEpisodeAndSeason({ episode: name, season: episode }))}>
                <div><b>{name}</b></div>
                <div>{air_date}</div>
                <div>{episode}</div>
            </div>
        </Link>
    )
};
export { Episode };