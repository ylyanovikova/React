import { useReducer, useRef } from "react";

const initState = (init)=>{
  return {cats: init, dogs:init}
};

const reducer = (state, action)=>{
  switch(action.type){
    case "cat":
      return state.cats.push(action.cat)
    case "dog":
      return state.dogs.push(action.dog)
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, [], initState);
  const catName= useRef(null);
  const dogName= useRef(null);

  const catSubmit = ()=>{
    let cat = catName.current.value;
    dispatch({type: "cat"})
    console.log(cat);
    console.log(state);

  }
  const dogSubmit = ()=>{
    let dog = dogName.current.value;
    dispatch({type:"dog"})
    console.log(dog); 
    console.log(state); 
  }

  return (
    <div>
      <form onSubmit={(e)=> e.preventDefault()}>
        Cat: <input type="text" ref={catName} placeholder={"name"}/>
        <button onClick={()=>catSubmit()}>Save Cat</button>
      </form>

      <form onSubmit={(e)=> e.preventDefault()}>
        Dog: <input type="text" ref={dogName} placeholder="name"/>
        <button onClick={()=>dogSubmit()}>Save dog</button>
      </form>
    </div>
  );
}

export default App;
