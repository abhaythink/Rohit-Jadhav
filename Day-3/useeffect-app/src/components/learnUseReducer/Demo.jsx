import { useReducer } from "react";
import "./Demo.css"
function reducerFunction(state, action) {
  if (action.type === "INC") {
    return state + 1;
  } else if (action.type === "DEC") {
    return state - 1;
  }
}

export default function Demo() {
  let [count, dispatchFun] = useReducer(reducerFunction, 0);

  return (
  
    <div className="demo-container">
        <h1>State Management with useReducer</h1>
      <h1 className="count">{count}</h1>
      <div className="button-container">
        <button
          className="inc-btn"
          onClick={() => {
            dispatchFun({
              type: "INC",
            });
          }}
        >
          Inc
        </button>
        <button
          className="dec-btn"
          onClick={() => {
            dispatchFun({
              type: "DEC",
            });
          }}
        >
          Dec
        </button>
      </div>
    </div>
  );
}
