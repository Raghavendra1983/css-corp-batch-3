import React, { createRef } from "react";
import { FunctionComponent, useReducer } from "react";
import { todoReducer, Todo } from "./reducers/todoReducer";
import { TodoActionKind } from "./reducers/TodoActions";
import cn from "classnames";
import './root.css'

let inputText = createRef<HTMLInputElement>();


// An example of using the `useReducer` hooks with our reducer function and an initial state
export const TodoApp: FunctionComponent = () => {
    const [state, dispatch] = useReducer(todoReducer, Todo);
    console.log(state);
    return (
        <div className="flex shadow-lg w-3/5">
            <div className="mt-9 ml-9">
                <div>ENTER TODO</div>
                <div className="flex text-bold">
                    <input type="text" className="input" ref={inputText}></input>
                    <button type="button" className="btn-primary" onClick={() => dispatch({ type: TodoActionKind.ADD_TODO, payload: inputText.current?.value })}>Add Todo</button>
                </div>
                <table className="w-full">
                    <tbody>
                        {state.todos.map((item) => (
                            <tr key={item.id}>
                                <td><input type="checkbox" onChange={() => dispatch({ type: TodoActionKind.TOGGLE_TODO, payload: String(item.id) })}></input></td>
                                <td><h1 className={cn('', {
                                    'line-through': item.isComplete
                                })}>{item.todoText}</h1></td>
                                <td><button type="button" className="btn-primary" onClick={() => dispatch({ type: TodoActionKind.DELETE_TODO, payload: String(item.id) })}>&times;</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >
        </div >
    );
};