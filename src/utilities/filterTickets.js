const filterTickets = (items, filter) => {
  if (filter.all) return items
  if (!filter.noTransfers) {
    items = items.filter((el) => el.segments[0].stops.length !== 0 && el.segments[1].stops.length !== 0)
  }
  if (!filter.oneTransfers) {
    items = items.filter((el) => el.segments[0].stops.length !== 1 && el.segments[1].stops.length !== 1)
  }
  if (!filter.twoTransfers) {
    items = items.filter((el) => el.segments[0].stops.length !== 2 && el.segments[1].stops.length !== 2)
  }
  if (!filter.threeTransfers) {
    items = items.filter((el) => el.segments[0].stops.length !== 3 && el.segments[1].stops.length !== 3)
  }

  return items
}

export default filterTickets
