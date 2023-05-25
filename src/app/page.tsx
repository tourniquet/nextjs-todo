'use client'

import NewItem from '../../components/NewItem/NewItem'
import UnorderedList from '../../components/UnorderedList/UnorderedList'

import { TodoProvider } from '../../contexts/TodoContext'

export default function Home (): JSX.Element {
  return (
    <TodoProvider>
      <NewItem />
      <UnorderedList />
    </TodoProvider>
  )
}
