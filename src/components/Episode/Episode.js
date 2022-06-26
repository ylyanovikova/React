import { Link } from "react-router-dom";

const Episode = ({ episode: singleEpisode }) => {

    const { name, air_date, episode, characters } = singleEpisode;

    const chatactersIdArr = characters.map(item => item.split("/").slice(-1)[0]);
    const chatactersIds = chatactersIdArr.join(",")

    console.log(chatactersIds);

    return (
        <Link to={`/characters/${chatactersIds}`} state={characters}>
            <div>
                <div>{name}</div>
                <div>{air_date}</div>
                <div>{episode}</div>
            </div>
        </Link>
    )
};
export { Episode };