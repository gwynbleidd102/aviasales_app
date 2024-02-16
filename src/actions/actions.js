import AviasalesService from '../services/aviasales-services'
import {
  CHEAP,
  FAST,
  OPTIMAL,
  ALL,
  NO_TRANSFERS,
  ONE_TRANSFER,
  TWO_TRANSFERS,
  THREE_TRANSFERS,
  LIST_TICKED_STARTED,
  LIST_TICKED_SUCCESS,
  LIST_TICKED_FAILURE,
} from '../reducers/types'

export const showCheap = () => {
  return {
    type: CHEAP,
  }
}

export function showFast() {
  return {
    type: FAST,
  }
}

export function showOptimal() {
  return {
    type: OPTIMAL,
  }
}

export function setAllTransfers() {
  return {
    type: ALL,
  }
}

export function setNoTransfers() {
  return {
    type: NO_TRANSFERS,
  }
}

export function setOneTransfer() {
  return {
    type: ONE_TRANSFER,
  }
}

export function setTwoTransfers() {
  return {
    type: TWO_TRANSFERS,
  }
}

export function setThreeTransfers() {
  return {
    type: THREE_TRANSFERS,
  }
}

export function listTickedStarted() {
  return {
    type: LIST_TICKED_STARTED,
  }
}

export function listTickedSuccess(tickets, stop) {
  return {
    type: LIST_TICKED_SUCCESS,
    payload: {
      tickets,
      stop,
    },
  }
}

export function listTickedFailure(error) {
  return {
    type: LIST_TICKED_FAILURE,
    payload: {
      error,
    },
  }
}

const aviasalesService = new AviasalesService()

export function listTicked() {
  return async function (dispatch) {
    dispatch(listTickedStarted())
    const whileSuccess = async () => {
      let start
      await aviasalesService
        .getTickets()
        .then((res) => {
          dispatch(listTickedSuccess(res.tickets, res.stop))
          start = !res.stop
        })
        .catch((err) => {
          start = err.message.includes('500')
          if (!start) {
            dispatch(listTickedFailure(err.message))
          }
        })
      return start
    }

    let status = true
    while (status) {
      status = await whileSuccess()
    }
  }
}
