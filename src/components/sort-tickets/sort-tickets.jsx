import { connect } from 'react-redux'

import { CHEAP, FAST, OPTIMAL } from '../../reducers/types'
import * as actions from '../../actions/actions'

import styles from './sort-tickets.module.scss'

function SortTickets({ filter, showCheap, showFast, showOptimal }) {
  const filters = [
    {
      id: 1,
      type: CHEAP,
      name: 'Самый дешевый',
      sort: showCheap,
    },
    {
      id: 2,
      type: FAST,
      name: 'Самый быстрый',
      sort: showFast,
    },
    {
      id: 3,
      type: OPTIMAL,
      name: 'Оптимальный',
      sort: showOptimal,
    },
  ]

  const ticketsSortItems = filters.map((elem, id) => {
    let className = ''
    if (elem.type === filter) {
      className = styles.active
    }
    return (
      <div key={id} className={`${styles['sort-tickets__item']} ${className}`} onClick={elem.sort}>
        <input type="radio" name="sort-tickets" id={elem.type} className={styles['sort-tickets__input']} />
        <label className={styles['sort-tickets__label']}>{elem.name}</label>
      </div>
    )
  })

  return <div className={styles['sort-tickets']}>{ticketsSortItems}</div>
}

const mapStateToProps = (state) => {
  return {
    filter: state.sort,
  }
}

export default connect(mapStateToProps, actions)(SortTickets)
