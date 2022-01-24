import { TodoActionKind } from "./TodoActions";

interface TodoObjects {
    id: number | undefined,
    todoText: string | undefined
    isComplete: boolean
}

// An interface for our state
export interface TodoType {
    todos: TodoObjects[]
}
export const Todo: TodoType = {
    todos: []
}

// An interface for our actions
export interface TodoAction {
    type: TodoActionKind,
    payload: string | undefined
}



// Our reducer function that uses a switch statement to handle our actions
export function todoReducer(state: TodoType, action: TodoAction) {
    const { type, payload } = action;
    switch (type) {
        case TodoActionKind.ADD_TODO:
            return {
                todos: [...state.todos, { todoText: payload, id: Date.now(), isComplete: false }]
            };
        case TodoActionKind.DELETE_TODO:
            const index = state.todos.findIndex(data => data.id === Number(payload));
            return {
                ...state,
                todos: [...state.todos.slice(0, index), ...state.todos.slice(index + 1)]
            }
        case TodoActionKind.TOGGLE_TODO:
            let indexToUpdate = state.todos.findIndex(data => data.id === Number(payload))!;
            return {
                todos: state.todos.map((x) => {
                    if (x.id === Number(payload)) {
                        return { ...x, isComplete: !x.isComplete };
                    }
                    return x;
                })
            }
        default:
            return state;
    }
}