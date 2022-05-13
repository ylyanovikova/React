import css from "./User.module.css"

const User =({user, setChosenUser, setPosts})=>{

    const {id, name} = user;
    
    const clickForPosts=()=>{
        setPosts(false);
        setChosenUser(user)
    };

    return(
        <div className={css.user}>
            {id}--{name} <button onClick={()=>{clickForPosts()}}>Show user details</button>
        </div>
    )
};
export {User};