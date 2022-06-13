import { useDispatch, useSelector } from "react-redux"
import { counterActions } from "../redux/slices";

const Counter = ()=>{
    const {count1, count2} = useSelector(state => state.counter);

    const dispatch = useDispatch()

    return(
        <div>
            Counter1: {count1}
            <button onClick={()=>dispatch(counterActions.inc())}>inc</button>
            <button onClick={()=>dispatch(counterActions.dec())}>dec</button>
            <button onClick={()=>dispatch(counterActions.reset())}>reset</button>

            Counter2: {count2}
            <button onClick={()=>dispatch(counterActions.inc2())}>inc x2</button>
            <button onClick={()=>dispatch(counterActions.dec2())}>dec x2</button>
            <button onClick={()=>dispatch(counterActions.upTo20())}>up to 20</button>
        </div>
    )
};
export {Counter};