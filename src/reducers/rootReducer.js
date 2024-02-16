import { combineReducers } from 'redux'

import { sortReducer } from './sortReducer'
import { filtersReducer } from './filterReducer'
import { ticketsReducer } from './ticketsReducer'

export const rootReducer = combineReducers({
  sort: sortReducer,
  check: filtersReducer,
  tickets: ticketsReducer,
})
