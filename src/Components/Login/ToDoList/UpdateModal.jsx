import React, { useState } from 'react';
import { Modal, Box , Typography} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { editedTask } from '../../../Reducer/todoSlice';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const UpdateModal = (props) => {
    const { open } = props
    console.log('props===', props)
    const [openModal, setModal] = useState(open)
    console.log('openModal===', openModal)

    const updatedId =  useSelector((state) => state.todo.taskIdToUpdate )
    console.log('updatedId===', updatedId)

    const [ updatedTassk, setUpdatedTask] = useState(updatedId[0].name)
    const id =  updatedId[0].id

    const dispatch = useDispatch()

    // on update button click
    const updatedData = () =>  {
        dispatch(editedTask({task: updatedTassk, id: id}))
        setModal(false)
        props.setOpen(false)
    }
    return (
        <div>
            <Modal
              open={openModal}
              onClose={() => setModal(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Update Task
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <input type="text" value={updatedTassk} onChange={(e) => setUpdatedTask(e.target.value) }></input>
                    <button onClick={updatedData}>Update</button>
                </Typography>
              </Box>
            </Modal>
               </div>
    );
}

export default UpdateModal;