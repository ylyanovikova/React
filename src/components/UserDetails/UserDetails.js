import css from "./UserDetails.module.css";

const UserDetails = ({user})=>{
    const {id, name, username, address, email} = user;

    return(
        <div className={css.userDetails}>
            <div>ID: {id} Name: {name}</div>
            <div>Usermane: {username}</div>
            <div>Email: {email}</div>
            <div>Address: {address.street}, {address.city}</div>
        </div>
    )
};
export {UserDetails};