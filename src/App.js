import {Navigate, Route, Routes} from "react-router-dom";

import {MainPage} from "./layouts/MainPage";
import {UsersPage, PostsPage, UserDetailsPage, PostsOfUserPage, PostDetailsPage, CommentsOfPostPage} from "./pages";

function App() {

  return (
    <Routes>
      <Route path={"/"} element={<MainPage/>}>
        <Route index element={<Navigate to={"/users"}/>}/>
        <Route path={"users"} element={<UsersPage/>}>
          <Route path={":id"} element={<UserDetailsPage/>}>
            <Route path={`posts-of-user=:id`} element={<PostsOfUserPage/>}/>
          </Route>
        </Route>
        <Route path={"posts"} element={<PostsPage/>}>
          <Route path={":id"} element={<PostDetailsPage/>}>
            <Route path={"comments-of-post=:id"} element={<CommentsOfPostPage/>}/>
          </Route>
        </Route>
        <Route/>
        <Route/>
      </Route>
    </Routes>
  );
}

export default App;
