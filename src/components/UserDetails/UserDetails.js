import { useEffect } from "react";

import { postsService } from "../../services";



const UserDetails = ({chosenUser, setPosts})=>{

    // let userId =null;
    // useEffect(()=>{
    //     postsService.getByUsersId(userId).then(({data})=> setPosts(data));
    //   },[]);

    const getPosts = async(id) =>{
        const {data} = await postsService.getByUsersId(id);
        setPosts(data);
    };

const {id, name, username, email, address, phone, website }= chosenUser;
    return(
        <div>
         <div>Id: {id}</div>  
         <div>Name: {name}</div>  
         <div>Username: {username}</div> 
         <div>Email: {email}</div>  
         <div>Address: {address.suit}, {address.street}, {address.city}</div>  
         <div>Phone: {phone}</div>  
         <div>Website: {website}</div> 
         <button onClick={()=>{getPosts(id)}}>Show posts</button> 
        </div>
    )
}

export {UserDetails};