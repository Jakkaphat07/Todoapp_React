import React,{useState} from 'react'
import { TextField} from '@mui/material';


export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('')
    const handleSubmit = (e) => {
          e.preventDefault();
          if (value) {
            addTodo(value)
            setValue("")
          }
        };
        
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <TextField className='todo-text'
              label="What I need to do"
              value={value} onChange={(e) => setValue(e.target.value)}
              color='success'
              type="text"
              required={true}
              >

        </TextField>
        <button type="submit" color='success' className='todo-btn'>Add task</button>
    </form>
  )
}

export default TodoForm