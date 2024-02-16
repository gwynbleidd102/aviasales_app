import TicketDesc from '../ticket-desc'

import styles from './ticket.module.scss'

function Ticket({ ticket: { price, carrier, segments } }) {
  const ticketPrice = price.toLocaleString('ru-RU')

  const ticketInfo = segments.map((segment, index) => {
    return <TicketDesc segment={segment} key={index} />
  })

  return (
    <div className={styles['ticket']}>
      <div className={styles['ticket__header']}>
        <p className={styles['ticket__price']}>{ticketPrice} Р</p>
        <img className={styles['ticket__logo']} src={`//pics.avs.io/99/36/${carrier}.png`} alt="Логотип авиакомпании" />
      </div>
      <div className={styles['ticket__info']}>{ticketInfo}</div>
    </div>
  )
}

export default Ticket
