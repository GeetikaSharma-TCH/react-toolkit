import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editTodo } from '../../../Reducer/todoSlice'; 
import UpdateModal from './UpdateModal';
import { TableContainer, Table, TableHead, TableCell, TableRow, TableBody } from '@mui/material';
import {Checkbox} from '@mui/material';

const ToDoList = () => {

    // to get data from store
    const todoList =  useSelector((state) => state.todo.todoList )
    console.log('todoList==-====', todoList)
    
    // dispatch
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false)
    return ( 
        <div>
            <TableContainer>
                <Table  sx={{ minWidth: 650 }} size="small" stickyHeader aria-label="sticky table">  
                    <TableHead>
                        <TableRow>
                            <TableCell><Checkbox/></TableCell>
                            <TableCell>Id</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Actions</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {todoList.map((val, key) => {
                        return(
                            <TableRow key={key}>
                                <TableCell>
                                    <Checkbox/>
                                </TableCell>
                                <TableCell>{val.id}</TableCell>
                                <TableCell>{val.name}</TableCell>
                                <TableCell>
                                    <button onClick={() => {
                                        setOpen(true)
                                        dispatch(editTodo(val.id))
                                    }}>Edit</button>
                                </TableCell>
                                <TableCell>
                                    <button onClick={() => {
                                        dispatch(deleteTodo(val.id))
                                    }}>Delete</button>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                    </TableBody>
                </Table>
            </TableContainer>
            <div>
            </div>
            {open &&
                <UpdateModal open={open} setOpen={setOpen}></UpdateModal>
            }
        </div>
    );
}
 
export default ToDoList;