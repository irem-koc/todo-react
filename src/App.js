import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([])
  let id = 1;
  const addTodo = (text) => {
    if(todos.length>0){
      id = todos[0].id +1
    }
    let todo = {
      id: id,
      text: text,
      isCompleted: false
    }
    setTodos([todo, ...todos])
  }
  const completeTodo = (id) =>{
    let updatedTodos = todos.map((todo) => {
      if(todo.id===id) {
        todo.isCompleted= !todo.isCompleted
      }
      return todo;
    })
    setTodos(updatedTodos)
  }
  const deleteTodo = (id) =>{
    const updatedTodos = todos.filter((todo)=>todo.id !== id)
    setTodos(updatedTodos)
    
  }
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo}/>
      {
        todos.map((todo)=>{
          return(
            < TodoItem todo={todo} key={todo.id} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
          )
          }
        )
      }
      <h3 style={{marginTop:50}}>Completed Todos: {todos.filter((todo)=>todo.isCompleted).length}</h3>
      <h3 style={{marginTop:30}}>Total Todos: {todos.length}</h3>
    </div>
  );
}

export default App;
