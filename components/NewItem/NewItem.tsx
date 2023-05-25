'use client'

import { useContext, useState } from 'react'
import styled from 'styled-components'
import TodoContext from '../../contexts/TodoContext'

const Input = styled.input.attrs({
  type: 'text'
})`
  border: 1px solid #bdc0ca;
  display: block;
  height: 40px;
  margin: 0 auto;
  padding: 0 44px;
`

export default function NewItem (): JSX.Element {
  const [todo, setTodo] = useState('')
  const { addTodo } = useContext(TodoContext)

  return (
    <>
      <Input
        type='text'
        placeholder='...'
        value={todo}
        onChange={e => setTodo(e.target.value)}
        onKeyDown={e => {
          if (e.code === 'Enter' && Boolean(todo)) {
            addTodo(todo)
            setTodo('')
          }
        }}
      />
    </>
  )
}
