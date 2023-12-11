import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const Todo = ({task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className='Todo'> 
        <p className={`${task.completed ? "completed" : "incompleted"}`} 
        onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <EditIcon className="edit-icon" onClick={()=> editTodo (task.id)}/>
        <DeleteIcon className='delete-icon' onClick={()=> deleteTodo(task.id)}/>
    </div>
  )
}
export default Todo
