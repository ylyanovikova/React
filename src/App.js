import { Routes, Route, Navigate } from "react-router-dom";

import { MainLayout } from "./layouts";
import { CharactersPage, EpisodesPage } from "./pages";

function App() {


  return (
    <Routes>
      <Route path={"/"} element={<MainLayout />}>
        <Route index element={<Navigate to={"episodes"} />} />
        <Route path={"episodes"} element={<EpisodesPage />} />
        <Route path={"/characters/:charactersIds"} element={<CharactersPage />} />
      </Route>
    </Routes>
  );
}

export default App;
