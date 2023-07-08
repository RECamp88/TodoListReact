import { useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"

export default function App() {
 

  // this state is used for updating the list of todos and there for set to an empty array. 
  const[todos, setTodos] = useState([])

  function addTodo(title) {
    setTodos(currentTodos => {
      return
      [
          ...currentTodos,
          {id: crypto.randomUUID(), title: newItem, completed: false},
      ]
      })
  }
 

  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return {...todo, completed}
        }

        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <NewTodoForm />
      <h1 className="Header">Todo List</h1>
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map(todo =>{
          return (
            <li key={todo.id}>
              <label htmlFor="">
                <input 
                  type="checkbox" 
                  checked={todo.completed} 
                  onChange={e => toggleTodo(todo.id, e.target.checked)} 
                />
                {todo.title}
              </label>
            <button 
              className="btn btn-danger" 
              onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
            </li>
          )
        })}
        
      </ul>
    </>
  )
}