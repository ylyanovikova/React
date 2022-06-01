import {Navigate, Route, Routes, useNavigate} from "react-router-dom";

import {MainPage} from "./layouts/MainPage";
import {UsersPage, PostsPage, UserDetailsPage} from "./pages";

function App() {

  return (
    <Routes>
      <Route path={"/"} element={<MainPage/>}>
        <Route index element={<Navigate to={"/users"}/>}/>
        <Route path={"users"} element={<UsersPage/>}>
          <Route path={":id"} element={<UserDetailsPage/>}/>
        </Route>
        <Route path={"posts"} element={<PostsPage/>}/>
        <Route/>
        <Route/>
      </Route>
    </Routes>
  );
}

export default App;
