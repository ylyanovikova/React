import {Link, Route, Routes} from "react-router-dom";
import { About, Comments, Home, Layouts, Posts, Users } from "./components";

function App() {
  return (
    <div>
      <div>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/layouts"}>Layouts</Link></li>
          <li><Link to={"/about"}>About</Link></li>
        </ul>
      </div>

      <div>
        <h2>Content</h2>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/layouts"} element={<Layouts/>}>
              <Route path={"users"} element={<Users/>}/>
              <Route path={"posts"} element={<Posts/>}/>
              <Route path={"comments"} element={<Comments/>}/>
          </Route>
          <Route path={"/about"} element={<About/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
