import cloneDeep from 'lodash/cloneDeep'

import { CHEAP, FAST, OPTIMAL } from '../reducers/types'

const sortTickets = (items, filter) => {
  let itemsCopy

  switch (filter) {
    case CHEAP:
      itemsCopy = cloneDeep(items).sort((a, b) => a.price - b.price)
      break
    case FAST:
      itemsCopy = cloneDeep(items).sort(
        (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
      )
      break
    case OPTIMAL:
      itemsCopy = cloneDeep(items)
        .sort(
          (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
        )
        .sort((a, b) => a.price - b.price)
      break
    default:
      itemsCopy = cloneDeep(items)
  }

  return itemsCopy
}

export default sortTickets
