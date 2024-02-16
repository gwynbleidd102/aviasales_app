import { format, roundToNearestMinutes } from 'date-fns'

import styles from './ticket-desc.module.scss'

function TicketDesc({ segment: { date, destination, duration, origin, stops } }) {
  function roundedDate(date) {
    return roundToNearestMinutes(date, { nearestTo: 5 })
  }
  const originTime = format(roundedDate(new Date(date)), 'HH:mm')
  const destinationTime = format(roundedDate(new Date(Date.parse(date) + duration * 60000)), 'HH:mm')

  function formatTime(minutes) {
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = Math.round((minutes % 60) / 5) * 5
    return `${hours}ч ${remainingMinutes}м`
  }
  const formattedTime = formatTime(duration)

  let stop
  if (stops.length === 0) stop = '0 пересадок'
  else if (stops.length === 1) stop = '1 пересадка'
  else stop = `${stops.length} пересадки`

  return (
    <div className={styles['ticket-desc']}>
      <div className={styles['ticket-desc__column']}>
        <p className={styles['ticket-desc__title']}>
          {origin} - {destination}
        </p>
        <p className={styles['ticket-desc__info']}>
          {originTime} - {destinationTime}
        </p>
      </div>
      <div className={styles['ticket-desc__column']}>
        <p className={styles['ticket-desc__title']}>В пути</p>
        <p className={styles['ticket-desc__info']}>{formattedTime}</p>
      </div>
      <div className={styles['ticket-desc__column']}>
        <p className={styles['ticket-desc__title']}>{stop}</p>
        <p className={styles['ticket-desc__info']}>{stops.join(', ')}</p>
      </div>
    </div>
  )
}

export default TicketDesc
