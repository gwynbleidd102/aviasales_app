import { CHEAP, FAST, OPTIMAL } from '../reducers/types'

const sortTickets = (items, filter) => {
  switch (filter) {
    case CHEAP:
      return items.sort((a, b) => a.price - b.price)
    case FAST:
      return items.sort(
        (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
      )
    case OPTIMAL:
      return items
        .sort(
          (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
        )
        .sort((a, b) => a.price - b.price)
    default:
      return items
  }
}

export default sortTickets
