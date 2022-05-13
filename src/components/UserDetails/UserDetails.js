import { postsService } from "../../services";
import css from "./UserDetails.module.css"

const UserDetails = ({chosenUser, setPosts})=>{

    const getPosts = async(id) =>{
        const {data} = await postsService.getByUsersId(id);
        setPosts(data);
    };

const {id, name, username, email, address, phone, website }= chosenUser;
    return(
        <div className={css.ud}>
            <h2>USER DETAILS</h2>
         <div className={css.udItem}><b>Id:</b> {id}</div>  
         <div className={css.udItem}><b>Name:</b> {name}</div>  
         <div className={css.udItem}><b>Username:</b> {username}</div> 
         <div className={css.udItem}><b>Email:</b> {email}</div>  
         <div className={css.udItem}><b>Address:</b> {address.suit}, {address.street}, {address.city}</div>  
         <div className={css.udItem}><b>Phone:</b> {phone}</div>  
         <div className={css.udItem}><b>Website:</b> {website}</div> 
         <button onClick={()=>{getPosts(id)}}>Show posts</button> 
        </div>
    )
}

export {UserDetails};