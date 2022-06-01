import { Button } from "../Button/Button";
import css from "./UserDetails.module.css";

const UserDetails = ({user})=>{
    const {id, name, username, email, website} = user;
    return(
        <div className={css.userDetails}>
            <div>Id: {id}- Name:{name}</div>
            <div>Username: {username}</div>
            <div>Email: {email}</div>
            <div>Website: {website}</div>
            <Button to={"#"}>Show posts</Button>
        </div>
    )
};
export {UserDetails};