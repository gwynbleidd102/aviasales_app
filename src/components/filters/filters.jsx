import { connect } from 'react-redux'

import { ALL, NO_TRANSFERS, ONE_TRANSFER, TWO_TRANSFERS, THREE_TRANSFERS } from '../../reducers/types'
import * as actions from '../../actions/actions'

import styles from './filters.module.scss'

function Filters({ check, setAllTransfers, setNoTransfers, setOneTransfer, setTwoTransfers, setThreeTransfers }) {
  const ticketFilters = [
    {
      type: ALL,
      id: 1,
      checked: 'all',
      name: 'Все',
      filter: setAllTransfers,
    },
    {
      type: NO_TRANSFERS,
      id: 2,
      checked: 'noTransfers',
      name: 'Без пересадок',
      filter: setNoTransfers,
    },
    {
      type: ONE_TRANSFER,
      id: 3,
      checked: 'oneTransfers',
      name: '1 пересадка',
      filter: setOneTransfer,
    },
    {
      type: TWO_TRANSFERS,
      id: 4,
      checked: 'twoTransfers',
      name: '2 пересадки',
      filter: setTwoTransfers,
    },
    {
      type: THREE_TRANSFERS,
      id: 5,
      checked: 'threeTransfers',
      name: '3 пересадки',
      filter: setThreeTransfers,
    },
  ]

  const filterOptions = ticketFilters.map((elem, id) => {
    return (
      <div className={styles['filters__container']} key={id}>
        <label className={styles['filters__item']}>
          <input
            className={styles['filters__input']}
            type="checkbox"
            checked={check[elem.checked]}
            onChange={elem.filter}
          />
          <span className={styles['filters__checkbox']}></span>
          {elem.name}
        </label>
      </div>
    )
  })

  return (
    <div className={styles['filters']}>
      <h3 className={styles['filters__title']}>Количество пересадок</h3>
      {filterOptions}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    check: state.check,
  }
}

export default connect(mapStateToProps, actions)(Filters)
