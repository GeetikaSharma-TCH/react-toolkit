import React, { useState } from 'react';

// import react hooks
import { useDispatch, useSelector } from 'react-redux';

// import reducer
import { addToddo } from '../../../Reducer/todoSlice'; 
import ToDoList from '../ToDoList/todoList';
import { Container, FormControl, TextField, Button } from '@mui/material';
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
						<Container fixed>
                <FormControl>
									<TextField
										id="outlined-password-input"
										label="Enter Task"
										type="text"
										size="small"
										margin="normal"
										value={task} onChange={(event) => setTask(event.target.value)}
									/>
									{/* <TextField
										id="outlined-password-input"
										label="Enter details"
										size="small"
										type="text"
										margin="normal"
									/> */}
									<Button variant="contained" margin="normal" onClick={dispatchAddTodo}>Add</Button>
                </FormControl>
                <ToDoList></ToDoList>
						</Container>
        </div>
    );
}
 
export default TodoForm;