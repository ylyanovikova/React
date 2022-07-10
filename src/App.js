import { useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { RequireAuth } from "./hoc/RequireAuth";

import { MainLayout } from "./layouts/MainLayout/MainLayout";
import { AboutPage, CarsPage, HomePage, LoginPage, RegisterPage, UserDetailsPage } from "./pages";
import { authActions } from "./redux/slices";

function App() {
  const dispatch = useDispatch();
  const access = localStorage.getItem("access");

  if(access){
    dispatch(authActions.setAuth());
  }
  


  return (
    <Routes>
      <Route path={"/"} element={<MainLayout />}>
        <Route index element={<Navigate to={"home"} />} />
        <Route path={"home"} element={<HomePage />} />
        <Route path={"cars"} element={
          <RequireAuth>
            <CarsPage />
          </RequireAuth>
        } />
        <Route path={"about"} element={<AboutPage />} />
        <Route path={"userdetails"} element={<UserDetailsPage />} />
        <Route path={"login"} element={<LoginPage />} />
        <Route path={"register"} element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
