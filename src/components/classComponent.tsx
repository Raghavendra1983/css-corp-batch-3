import React, { Component, createRef } from 'react';

type Props = {
    name: string,
    heading: string,
    dispatchFn: (arg0: string | undefined) => void
};

type State = {};

let inputText = createRef<HTMLInputElement>();

export default class Input extends Component<Props, State> {
    constructor(props: Props | Readonly<Props>) {
        super(props);
        console.log("input render");
    }
    shouldComponentUpdate() {
        return false;
    }
    render() {
        const { dispatchFn, name, heading } = this.props;
        return (
            <div>
                <div>{heading}</div>
                <div className="flex text-bold">
                    <input type="text" className="input" ref={inputText}></input>
                    <button type="button" className="btn-primary" onClick={() => dispatchFn(inputText?.current?.value)}>{name}</button>
                </div>
            </div>)
    }
}
