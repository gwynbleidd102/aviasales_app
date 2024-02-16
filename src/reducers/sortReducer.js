import { CHEAP, FAST, OPTIMAL } from './types'

export const sortReducer = (state = CHEAP, action) => {
  switch (action.type) {
    case CHEAP:
      return CHEAP
    case FAST:
      return FAST
    case OPTIMAL:
      return OPTIMAL
    default:
      return state
  }
}
