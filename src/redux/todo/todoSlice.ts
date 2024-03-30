import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
    todo_list: {
        id: number,
        name: string
    }[],
    completed_todos: {
        id: number,
        name: string
    }[],
    deleted_todos: {
        id: number,
        name: string
    }[],
}

const initialState: IInitialState = {
    todo_list: [],
    completed_todos: [],
    deleted_todos: []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addNew: (state, action: PayloadAction<{ name: string, id: number }>) => {
            state.todo_list.push(action.payload)
        },
        remove: (state, action) => {
            const existing = state.todo_list.find(data => data.id === action.payload.id)
            if (existing) {
                state.todo_list = state.todo_list.filter(data => data.id !== action.payload.id)
                state.deleted_todos.push(action.payload)
            }
        },
        completed: (state, action) => {
            const existing = state.todo_list.find(data => data.id === action.payload.id)
            if (existing) {
                state.todo_list = state.todo_list.filter(data => data.id !== action.payload.id)
                state.completed_todos.push(action.payload)
            }
        }
    }
})


export const { addNew, remove, completed } = todoSlice.actions

