'use client'

import { FormEvent, useState } from 'react'
import styled from 'styled-components'

const Input = styled.input.attrs({
  type: 'text'
})`
  border: 1px solid #bdc0ca;
  display: block;
  height: 40px;
  margin: 0 auto;
  padding: 0 44px;
`

let nextId = 0

export default function NewItem () {
  const [todo, setTodo] = useState('') // FIXME: replace todo with something else?
  const [todos, setTodos] = useState<any[]>([])

  return (
    <>
      <Input
        type='text'
        placeholder='...'
        value={todo}
        onChange={e => setTodo(e.target.value)}
        onKeyDown={e => {
          if (e.code === 'Enter' && todo) {
          setTodos([
            ...todos,
            { id: nextId++, name: todo }
          ])
          setTodo('')
          }
        }}
      />

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
      </>
  )
}
