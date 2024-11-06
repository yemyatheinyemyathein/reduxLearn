import { useDispatch, useSelector } from "react-redux"
import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {
  const numberOfCakes = useSelector((state) =>  state.cake.numOfCakes)
  const dispatch = useDispatch();
  console.log("Number Of Cakes => ", numberOfCakes)
  return (
    <div>
        <h2>Number Of Cake - {numberOfCakes}</h2>
        <button onClick={() => dispatch(ordered())}>Order Cake</button>
        <button onClick={() => dispatch(restocked(5))}>Restock Cake</button>
    </div>
  )
}

export default CakeView