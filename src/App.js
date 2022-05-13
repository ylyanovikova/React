import { useState } from "react";

import {Users, UserDetails, Posts} from "./components";
import css from "./App.module.css"


function App() {

  const [chosenUser, setChosenUser] = useState(null);
  const [posts, setPosts] = useState(null);

  return (
    <div className={css.general}>
    <div className={css.df}>
    <div><Users setChosenUser={setChosenUser} setPosts={setPosts}/></div>
    <div>{chosenUser && <UserDetails chosenUser={chosenUser} setPosts={setPosts} />}</div>
    </div>
    {posts &&  <Posts posts={posts}/>}
    </div>
  );
}

export default App;
