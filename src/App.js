import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./Redux/store/Reducer/Reducer";
function App() {
  const currState = useSelector((state) => state.incdec.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>React-redux</h1>
      <h2>{currState}</h2>
      <div>
        <button onClick={() => dispatch(increment(10))}>INC</button>
        <button onClick={() => dispatch(decrement(5))}>DEC</button>
      </div>
    </div>
  );
}

export default App;
