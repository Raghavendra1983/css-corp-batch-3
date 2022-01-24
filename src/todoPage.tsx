import React, { createRef } from "react";
import { FunctionComponent, useReducer } from "react";
import { todoReducer, Todo } from "./reducers/todoReducer";
import { TodoActionKind } from "./reducers/TodoActions";
import cn from "classnames";
import './root.css'
import Input from '@components/classComponent';



// An example of using the `useReducer` hooks with our reducer function and an initial state
export const TodoApp: FunctionComponent = () => {
    const [state, dispatch] = useReducer(todoReducer, Todo);
    const dispatchTodoTextFn = (value: any) => dispatch({ type: TodoActionKind.ADD_TODO, payload: value });
    console.log(state);
    return (
        <div className="flex shadow-lg w-3/5">
            <div className="mt-9 ml-9">
                <Input dispatchFn={dispatchTodoTextFn} name="Add Todo" heading='Enter todo' />
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