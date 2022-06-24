import { Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts";
import { CarDetailsPage, CarsPage, NotFoundPage } from "./pages";

function App() {

  return (
    <Routes>
      <Route path={"/"} element={<MainLayout />}>
        <Route index element={<Navigate to={"cars"} />} />
        <Route path={"cars"} element={<CarsPage />} />
        <Route path={"cars/:id"} element={<CarDetailsPage />} />
        <Route path={"*"} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
