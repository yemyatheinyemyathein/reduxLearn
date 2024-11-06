import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { ordered, restocked } from "../icecream/iceCreamSlice";

const ICeCreamVierw = () => {
  const [value, setValue] = React.useState(1);
  const numberOfIceCreams = useSelector((state) =>  state.iceCream.numOfIceCreams)
  const dispatch = useDispatch();
    return (
      <div>
          <h2>Number Of IceCream - {numberOfIceCreams}</h2>
          <button onClick={() => dispatch(ordered())}>Order IceCream</button>
          <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))}/>
          <button onClick={() => dispatch(restocked(value))}>Restock IceCream</button>
      </div>
    )
  }
  
  export default ICeCreamVierw