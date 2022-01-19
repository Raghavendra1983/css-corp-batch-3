import React from "react";
import { FunctionComponent, useReducer } from "react";
import { CountActionKind, counterReducer } from "./reducers/counterReducer";

// An example of using the `useReducer` hooks with our reducer function and an initial state
export const Counter: FunctionComponent = () => {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });
    return (
        <div>
            Count: {state.count}
            {/* Calling our actions on button click */}
            <button
                onClick={() => dispatch({ type: CountActionKind.INCREASE, payload: 5 })}
            >
                -
            </button>
            <button onClick={() => dispatch({ type: CountActionKind.DECREASE, payload: 5 })}>+</button>
        </div>
    );
};