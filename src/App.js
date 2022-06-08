import { useReducer, useState} from "react";



const reducer = (state, action)=>{
  const {type, payload} = action;
  switch(type){
    case "createCat":
      return {...state, cats: [...state.cats, {name: payload, id: Date.now()}]}
    case "deleteCat":
      return {...state, cats: state.cats.filter(cat=> cat.id !== payload)}
    case "createDog":
      return {...state, dogs: [...state.dogs, {name: payload, id: Date.now()}]}
    case "deleteDog":
      return {...state, dogs: state.dogs.filter(dog=> dog.id !== payload)}
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});
  const [cat, setCat] = useState("");
  const [dog, setDog] = useState("");


  const catCreate = ()=>{
    dispatch({type: "createCat", payload: cat});
    setCat("");
  };
  const dogCreate = ()=>{
    dispatch({type: "createDog", payload: dog})
    setDog("");
  }

  return (
    <div>
      <div style={{display: "flex", justifyContent: "space-around"}}>
        <div>
          <label>Cat name: <input type="text" onChange={({target})=> setCat(target.value)} value={cat}/></label>
          <button onClick={()=> catCreate()}>Save cat</button>
        </div>
        <div>
          <label>Dog name: <input type="text" onChange={({target})=> setDog(target.value)} value={dog}/></label>
          <button onClick={()=> dogCreate()}>Save dog</button>
        </div>
      </div>
      <hr/>
      <div style={{display: "flex", justifyContent: "space-around"}}>
          <div>
          <h1>CATS</h1>
          {state.cats.map(cat=>
            <div key={cat.id}>
                {cat.name}
                <button onClick={()=> dispatch({type: "deleteCat", payload: cat.id})}>Delete</button>
            </div>
          )}
          </div>
          <div>
            <h1>DOGS</h1>
            {state.dogs.map(dog=>
              <div key={dog.id}>
                {dog.name}
                <button onClick={()=> dispatch({type: "deleteDog", payload: dog.id})}>Delete</button>
              </div>
              )}
          </div>
      </div>
    </div>
  );
}

export default App;
