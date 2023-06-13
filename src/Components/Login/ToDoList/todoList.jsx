import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editTodo } from '../../../Reducer/todoSlice'; 
import UpdateModal from './UpdateModal';
const ToDoList = () => {

    // to get data from store
    const todoList =  useSelector((state) => state.todo.todoList )
    console.log('todoList==-====', todoList)
    
    // dispatch
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false)
    return ( 
        <div>
            <div>
            {todoList.map((val, key) => {
                    return(
                        <div key={key}>
                            <p>{val.id}. {val.name}</p>
                            <p><button onClick={() => {
                                setOpen(true)
                                dispatch(editTodo(val.id))
                            }}>Edit</button></p>
                            <p><button onClick={() => dispatch(deleteTodo(val.id))}>Delete</button></p>
                        </div>
                    )
                })}
            </div>
            {open &&
                <UpdateModal open={open} setOpen={setOpen}></UpdateModal>
            }
        </div>
    );
}
 
export default ToDoList;