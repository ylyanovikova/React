import css from "./User.module.css"

const User =({user, setChosenUser})=>{

    const {id, name} = user;

    return(
        <div className={css.user}>
            {id}--{name} <button onClick={()=>{setChosenUser(user)}}>Show user details</button>
        </div>
    )
};
export {User};