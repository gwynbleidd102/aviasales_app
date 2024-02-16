import { LIST_TICKED_STARTED, LIST_TICKED_SUCCESS, LIST_TICKED_FAILURE } from './types'

const initialState = {
  tickets: [],
  error: false,
  loading: true,
}

export const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_TICKED_STARTED:
      return {
        ...state,
        loading: true,
      }

    case LIST_TICKED_SUCCESS: {
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload.tickets],
        loading: !action.payload.stop,
      }
    }
    case LIST_TICKED_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}
