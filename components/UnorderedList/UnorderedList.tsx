import { useContext } from 'react'
import styled from 'styled-components'
import TodoContext from '../../contexts/TodoContext'

// components
import ListItem from '../ListItem/ListItem'

const UnorderedListStyled = styled.ul`
  font-size: 18px;
  list-style: none;
  padding: 0 24px;
`

export default function UnorderedList (props): JSX.Element {
  const { todos, switchStatus } = useContext(TodoContext)

  return (
    <UnorderedListStyled>
      {todos.map((item) => (
        <ListItem
          key={item.id}
          // id={item.id}
          item={item.todo}
          switchStatus={() => switchStatus(item.id)}
          status={item.done}
          // removeItem={el => props.dispatch(removeItem(el))}
        />
      ))}
    </UnorderedListStyled>
  )
}
