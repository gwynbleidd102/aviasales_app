import React from 'react'

import styles from './moreTicketsBtn.module.scss'

const MoreTicketsBtn = ({ addTickets }) => (
  <div className={styles['more-tickets']}>
    <button className={styles['more-tickets__btn']} onClick={addTickets}>
      Показать ещё 5 билетов!
    </button>
  </div>
)

export default MoreTicketsBtn
