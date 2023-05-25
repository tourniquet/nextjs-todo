import { useContext } from 'react'
import styled from 'styled-components'

const ListItemStyled = styled.li`
  display: block;
  line-height: 63px;
  margin: 0 auto;
  width: 80%;

  &.done {
    color: #bdc0ca;
    text-decoration: line-through;
  }
`

export default function ListItem ({ item, status, switchStatus }): JSX.Element {
  const condition = status === true ? 'done' : ''

  return (
    <ListItemStyled
      id={item.id}
      onClick={switchStatus}
      className={condition}
    >
      {/* // onDoubleClick={removeItem} */}
      {item}
    </ListItemStyled>
  )
}
