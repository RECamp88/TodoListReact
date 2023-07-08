import { useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

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
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="Header">Todo List</h1>
      <TodoList todos={todos} />
    </>
  )
}