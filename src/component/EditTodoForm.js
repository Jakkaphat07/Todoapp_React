import React, { useState } from 'react'
import { TextField } from '@mui/material';
export const EditTodoForm = ({editTodo, task}) => {
  const[value,setValue] = useState(task.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
  };
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <TextField className='todo-text'
              label="What I need to change"
              value={value} onChange={(e) => setValue(e.target.value)}
              color='success'
              type="text"
              >

        </TextField>
        <button type="submit" color='success' className='todo-btn'>Update</button>
    </form>
  )
}
export default EditTodoForm
