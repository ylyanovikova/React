import { useLocation } from "react-router-dom";

const UserDetails = ()=>{
    const location = useLocation();
    const {state: user} = location;
    const {id, name, username, email, address} = user;

    return(
        <div>
            <div>{id} {name}</div>
            <div>{username}</div>
            <div>{email}</div>
            <div>Adress: {address.street}, {address.city}</div>
            <br/>
        </div>
    )
};

export {UserDetails};