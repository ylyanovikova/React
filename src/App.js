import { Navigate, Route, Routes } from "react-router-dom";

import { CarsPage, CarDetailsPage, HomePage } from "./pages";


function App() {

  return (
    <div>
      <Routes>
        <Route path={"/"} element={<HomePage />}>
          <Route index element={<Navigate to={"cars"} />} />
          <Route path={"cars"} element={<CarsPage />} />
          <Route path={`:id`} element={<CarDetailsPage />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
