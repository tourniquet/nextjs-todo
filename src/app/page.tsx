import Image from 'next/image'
import styles from './page.module.css'

import NewItem from '../../components/NewItem/NewItem'

export default function Home() {
  return (
    <main className={styles.main}>
      <NewItem />
    </main>
  )
}
