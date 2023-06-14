import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editTodo } from '../../../Reducer/todoSlice'; 
import UpdateModal from './UpdateModal';
import { TableContainer, Table, TableHead, TableCell, TableRow, TableBody, Button, ButtonGroup } from '@mui/material';
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
																<ButtonGroup variant="text" aria-label="text button group">
																	<Button onClick={() => {
																					setOpen(true)
																					dispatch(editTodo(val.id))
																			}}>Edit	
																	</Button>
  																<Button  onClick={() => {
                                        dispatch(deleteTodo(val.id))
                                    }}>Delete
																	</Button>
																</ButtonGroup>
																</TableCell>
                            </TableRow>
                        )
                    })}
										{todoList.length === 0 && 
												<TableRow align="center">
													<TableCell>
														No Record Found
													</TableCell>
												</TableRow>
										}
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