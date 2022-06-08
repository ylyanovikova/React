import {useReducer} from "react";


const init = (initState)=>{
  return{count1: initState, count2: initState, count3: initState}
}


const reducer=(state, action)=>{
  switch(action.type){
    case "inc":
      return {...state, count1: state.count1++, count2: state.count2++, count3: state.count3+2}
    case "dec":
      return{...state, count1: state.count1--, count2: state.count2++, count3: state.count3-2}
    case "reset":
      return{...state, count1: 0, count2: state.count2++, count3: 0}
    default:
    return{...state, count1:0, count2:0, count3:0}
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, 0, init);




  return (
    <div>
      Number: {state.count1}    Count of operation: {state.count2} Count x2: {state.count3}
      <br/>
      <button onClick={()=>dispatch({type: "inc"})}>inc</button>
      <button onClick={()=>dispatch({type: "dec"})}>dec</button>
      <button onClick={()=>dispatch({type: "reset"})}>reset</button>

    </div>
  );
}

export default App;
