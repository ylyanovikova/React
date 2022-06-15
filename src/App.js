import { CatForm, DogForm, Dogs } from "./components";
import { Cats } from "./components/Cats";


function App() {

 

  return (
    <div>
      <div>
        <CatForm/>
        <DogForm/>
      </div>
      <div>
        <Cats/>
        <Dogs/>
      </div>

    </div>
    )
}

export default App;
