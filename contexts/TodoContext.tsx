'use client'

import { createContext, useState } from 'react'

const TodoContext = createContext()

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([{ todo: 'something', id: 0 }])

  const addTodo = (todo) => {
    const newTodo = {
      id: todos.length + 1,
      todo,
      done: false
    }

    setTodos((prevState) => [...prevState, newTodo])
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContext
