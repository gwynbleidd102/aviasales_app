import { ALL, NO_TRANSFERS, ONE_TRANSFER, TWO_TRANSFERS, THREE_TRANSFERS } from './types'

const initialThemeState = {
  all: true,
  noTransfers: true,
  oneTransfers: true,
  twoTransfers: true,
  threeTransfers: true,
}

export const filtersReducer = (state = initialThemeState, action) => {
  switch (action.type) {
    case ALL:
      if (state.all) {
        return {
          all: false,
          noTransfers: false,
          oneTransfers: false,
          twoTransfers: false,
          threeTransfers: false,
        }
      } else {
        return {
          all: true,
          noTransfers: true,
          oneTransfers: true,
          twoTransfers: true,
          threeTransfers: true,
        }
      }
    case NO_TRANSFERS:
      if (state.all) {
        return { ...state, all: false, noTransfers: false }
      } else if (!state.noTransfers && state.oneTransfers && state.twoTransfers && state.threeTransfers) {
        return {
          ...state,
          all: true,
          noTransfers: true,
        }
      } else {
        return { ...state, noTransfers: !state.noTransfers }
      }
    case ONE_TRANSFER:
      if (state.all) {
        return { ...state, all: false, oneTransfers: false }
      } else if (state.noTransfers && !state.oneTransfers && state.twoTransfers && state.threeTransfers) {
        return {
          ...state,
          all: true,
          oneTransfers: true,
        }
      } else {
        return { ...state, oneTransfers: !state.oneTransfers }
      }
    case TWO_TRANSFERS:
      if (state.all) {
        return { ...state, all: false, twoTransfers: false }
      } else if (state.noTransfers && state.oneTransfers && !state.twoTransfers && state.threeTransfers) {
        return {
          ...state,
          all: true,
          twoTransfers: true,
        }
      } else {
        return { ...state, twoTransfers: !state.twoTransfers }
      }
    case THREE_TRANSFERS:
      if (state.all) {
        return { ...state, all: false, threeTransfers: false }
      } else if (state.noTransfers && state.oneTransfers && state.twoTransfers && !state.threeTransfers) {
        return {
          ...state,
          all: true,
          threeTransfers: true,
        }
      } else {
        return { ...state, threeTransfers: !state.threeTransfers }
      }
    default:
      return state
  }
}
