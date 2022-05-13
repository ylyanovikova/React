const User =({user, setChosenUser})=>{

    const {id, name} = user;

    return(
        <div>
            {id}--{name} <button onClick={()=>{setChosenUser(user)}}>Show user details</button>
        </div>
    )
};
export {User};