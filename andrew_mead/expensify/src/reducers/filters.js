import moment from 'moment';

// filters reducer
const filtersReducerDefaultState = { // <--- state for filters
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER': // text filter
      return { ...state, text: action.text }
    case 'SORT_BY_AMOUNT': // sort by
      return { ...state, sortBy: 'amount' }
    case 'SORT_BY_DATE': // sort by
      return { ...state, sortBy: 'date' }
    case 'SET_START_DATE': // set start date
      return { ...state, startDate: action.startDate }
    case 'SET_END_DATE':
      return { ...state, endDate: action.endDate }
    default:
      return state;
  }
}

export default filtersReducer;