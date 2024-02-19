import { useEffect, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { listTicked } from '../../actions/actions'
import Ticket from '../ticket'
import MoreTicketsBtn from '../moreTicketsBtn'
import Spinner from '../spinner/spinner'
import sortTickets from '../../utilities/sortTickets'
import filterTickets from '../../utilities/filterTickets'

import styles from './tickets.module.scss'

function Tickets() {
  const dispatch = useDispatch()
  const ticketsArr = useSelector((state) => state.tickets.tickets)
  const sortValue = useSelector((state) => state.sort)
  const checkboxValue = useSelector((state) => state.check)
  const loading = useSelector((state) => state.tickets.loading)
  const [ticketsLenth, setTicketsLenth] = useState(5)

  useEffect(() => {
    dispatch(listTicked())
  }, [])

  const addTickets = () => {
    setTicketsLenth((ticketsLenth) => ticketsLenth + 5)
  }

  const sortedTickets = useMemo(() => sortTickets(ticketsArr, sortValue), [ticketsArr, sortValue])
  const filtredTickets = useMemo(() => filterTickets(sortedTickets, checkboxValue), [sortedTickets, checkboxValue])

  const tickets = filtredTickets.slice(0, ticketsLenth).map((ticket) => {
    const id = `ticket-${new Date().getTime()}`
    return <Ticket key={id} ticket={ticket} />
  })

  if (filtredTickets.length > 0) {
    return (
      <>
        {loading ? <Spinner /> : null}
        {tickets}
        <MoreTicketsBtn addTickets={addTickets} />
      </>
    )
  }
  return <div className={styles['no-tickets']}>Рейсов, подходящих под заданные фильтры, не найдено</div>
}

export default Tickets
