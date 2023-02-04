import React from 'react'
import {RiCloseCircleLine} from "react-icons/ri"
import {AiOutlineCheckCircle} from "react-icons/ai"

export default function TodoItem(props) {
  
  const {todo, completeTodo, deleteTodo} = props
  return (
    <div className={todo.isCompleted ? "todo-row complete": "todo-row"}>
      {todo.text}
      <div className="iconsContainer">
        <RiCloseCircleLine size={20} style={{marginRight:5}} onClick={() => props.deleteTodo(todo.id)}/>
        <AiOutlineCheckCircle size={20} onClick={() => props.completeTodo(todo.id)}/> 
      </div>
    </div>
  )
}
