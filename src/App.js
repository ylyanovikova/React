import { CatForm, DogForm, Dogs, Cats } from "./components";
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
