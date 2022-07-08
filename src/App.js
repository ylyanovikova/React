import {Routes, Route, Navigate} from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout/MainLayout";
import { AboutPage, CarsPage, HomePage, UserDetailsPage } from "./pages";

function App() {


  return (
    <Routes>
      <Route path={"/"} element={<MainLayout/>}>
        <Route index element={<Navigate to={"home"}/>}/>
        <Route path={"home"} element={<HomePage/>}/>
        <Route path={"cars"} element={<CarsPage/>}/>
        <Route path={"about"} element={<AboutPage/>}/>
        <Route path={"userdetails"} element={<UserDetailsPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
