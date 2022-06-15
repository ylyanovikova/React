import { CatForm, Cats, DogForm, Dogs } from "./components";
import css from "./App.module.css";

function App() {


  return (
    <div className={css.wrap}>
      <div className={css.df}>
        <CatForm/>
        <DogForm/>
      </div>
      <div className={css.df2}>
        <Cats/>
        <Dogs/>
      </div>
    </div>
  );
}

export default App;
