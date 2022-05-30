import {Routes, Route, Navigate} from "react-router-dom"
import { MainPage } from "./layouts/MainPage";
import {Home, Posts, Users, About, NotFound, UserDetailsPage} from "./pages"

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<MainPage/>} >
        <Route index element={<Navigate to={"/home"}/>}/>
        <Route path={"home"} element={<Home/>}/>
        <Route path={"users"} element={<Users/>}>
          <Route path={":id"} element={<UserDetailsPage/>}/>
        </Route>
        <Route path={"posts"} element={<Posts/>}/>
        <Route path={"about"} element={<About/>}/>
        <Route path={"*"} element={<NotFound/>}/>
      </Route>
    </Routes>
  );
}

export default App;
