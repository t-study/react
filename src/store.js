import { createStore } from 'redux'

export default createStore((state = { number: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, number: state.number + action.size }
    default:
      return state
  }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
