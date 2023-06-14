import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    // display  local storage data 
    todoList : JSON.parse(localStorage.getItem('todo')) || [],
    taskIdToUpdate : [],
}
const todoSlice =  createSlice({

    // name of reducer
    name: "TodoSLice",

    // initial state
    initialState,
    
    // reducer functions
    reducers:{

        // add to do action
        addToddo : (state, action) => {
            console.log('state==', state)
            console.log('action==', action)
            state.todoList.push({id: state.todoList.length + 1, name : action.payload})
            localStorage.setItem('todo', JSON.stringify(state.todoList))
        },

        // delete task
        deleteTodo : (state, action) => {
            console.log('action== delete', action)
            state.todoList = state.todoList.filter((val) => val.id !== action.payload)
        }, 

        // getUpdated  task
        editTodo : (state, action) => {
            console.log('action== edit', action)
            state.taskIdToUpdate = state.todoList.filter((val) => val.id === action.payload)
            console.log('taskIdToUpdate', state.taskIdToUpdate)  
        }, 

        // update Taskk
        editedTask : (state, action) => {
            console.log('action== edit', action)
            const { task, id } = action.payload
            state.todoList.map((val) => {
                if(val.id === id) {
                    val.name = task
                }    
            })
            localStorage.setItem('todo', JSON.stringify(state.todoList))
        }
    }

})

// export actions
export const {addToddo, deleteTodo, editTodo , editedTask} = todoSlice.actions

// export redcuer
export default todoSlice.reducer