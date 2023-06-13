import React, { useState } from 'react';

// import react hooks
import { useDispatch, useSelector } from 'react-redux';

// import reducer
import { addToddo } from '../../../Reducer/todoSlice'; 
import ToDoList from '../ToDoList/todoList';
const TodoForm = () => {

    // state
    const [task, setTask] = useState('')
    
    // use selectr to get state data
    const todo = useSelector((state) => state.todoList)
    console.log('todo', todo)

 

    // to update and dispatch actions
    const dispatch = useDispatch()
    console.log('dispatch', dispatch)

    // function to call dispatch
    const dispatchAddTodo = (event) => {
        console.log('event', event)
        dispatch(addToddo(task))
        event.preventDefault()
        setTask('')
    }

    return (
        <div>
            <form>
                <input type="text" value={task} onChange={(event) => setTask(event.target.value)}></input>
                <button onClick={dispatchAddTodo}>Add</button>
            </form>
            <ToDoList></ToDoList>
        </div>
    );
}
 
export default TodoForm;