import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
    todo_list: {
        id: number,
        name: string
    }[]
}

const initialState: IInitialState = {
    todo_list: []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addNew: (state, action: PayloadAction<{ name: string, id: number }>) => {
            state.todo_list.push(action.payload)
        },
        remove: (state, action) => {
            const existing = state.todo_list.find(data => data.id === action.payload)
            if (existing) {
                state.todo_list = state.todo_list.filter(data => data.id !== action.payload)
            }
        }
    }
})


export const { addNew, remove } = todoSlice.actions

