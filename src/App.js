import { CatForm, DogForm, Dogs } from "./components";
import { Cats } from "./components/Cats";
import css from "./App.module.css";


function App() {
  return (
    <div className={css.wrap}>
      <div className={css.forms}>
        <CatForm/>
        <DogForm/>
      </div>
      <div className={css.info}>
        <Cats/>
        <Dogs/>
      </div>
    </div>
    )
}

export default App;
