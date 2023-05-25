'use client'

import { createContext, useState } from 'react'

const TodoContext = createContext()

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    const newTodo = {
      id: todos.length + 1,
      todo,
      done: false
    }

    setTodos((prevState) => [...prevState, newTodo])
  }

  const switchStatus = (id) => {
    setTodos(todos.map(todo => (todo.id === Number(id)) ? { ...todo, done: !todo.done } : todo))
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, switchStatus }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContext
