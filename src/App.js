import {Routes, Route, Navigate} from "react-router-dom";
import { AuthRequire } from "./hoc";

import { MainPage } from "./layouts/MainPage";
import {Home, Posts, Users, About, NotFound, UserDetailsPage, PostDetailsPage, LogInPage} from "./pages"

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<MainPage/>} >
        <Route index element={<Navigate to={"/home"}/>}/>
        <Route path={"home"} element={<Home/>}/>
        <Route path={"users"} element={
          <AuthRequire>
            <Users/>
          </AuthRequire>
        }>
          <Route path={":id"} element={<UserDetailsPage/>}/>
        </Route>
        <Route path={"posts"} element={<Posts/>}>
          <Route path={":id"} element={<PostDetailsPage/>}/>
        </Route>
        <Route path={"about"} element={<About/>}/>
        <Route path={"/logIn"} element={<LogInPage/>}/>
        <Route path={"*"} element={<NotFound/>}/>
      </Route>
    </Routes>
  );
}

export default App;
