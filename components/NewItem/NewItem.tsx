'use client'

import { useState } from 'react'
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

export default function NewItem (): JSX.Element {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState<any[]>([])

  return (
    <>
      <Input
        type='text'
        placeholder='...'
        value={todo}
        onChange={e => setTodo(e.target.value)}
        onKeyDown={e => {
          if (e.code === 'Enter' && Boolean(todo)) {
            setTodos([
              ...todos,
              { id: nextId++, todo }
            ])
            setTodo('')
          }
        }}
      />

      <ul>
        {todos.map(item => (
          <li key={item.id}>{item.todo}</li>
        ))}
      </ul>
    </>
  )
}
