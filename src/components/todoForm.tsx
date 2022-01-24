import React, { createRef, memo, MouseEventHandler } from 'react';
import { TodoActionKind } from '../reducers/TodoActions';
import { TodoAction } from '../reducers/todoReducer';
export interface IInputProps {
    name: string,
    heading: string,
    dispatchFn: (arg0: string | undefined) => void
}
let inputText = createRef<HTMLInputElement>();
export const Input = React.memo((props: IInputProps): JSX.Element => {
    console.log("input render");
    const { dispatchFn, name, heading } = props;
    return (
        <div>
            <div>{heading}</div>
            <div className="flex text-bold">
                <input type="text" className="input" ref={inputText}></input>
                <button type="button" className="btn-primary" onClick={() => dispatchFn(inputText?.current?.value)}>{name}</button>
            </div>
        </div>
    );
});

