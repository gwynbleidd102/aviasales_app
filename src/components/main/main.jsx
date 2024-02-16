import Filters from '../filters'
import SortTickets from '../sort-tickets'
import Tickets from '../tickets'

import styles from './main.module.scss'

function Main() {
  return (
    <main className={styles.main}>
      <aside className={styles.main__aside}>
        <Filters />
      </aside>
      <section className={styles.main__section}>
        <SortTickets />
        <Tickets />
      </section>
    </main>
  )
}

export default Main
