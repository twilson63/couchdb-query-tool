const { createStore, combineReducers, applyMiddleware } = require('redux')
const thunk = require('redux-thunk').default

const store = createStore(
  combineReducers({
    url(state='', action) {
      switch (action.type) {
        case 'SET_URL':
          return action.payload
        default:
          return state
      }
    },
    path(state='', action) {
      switch (action.type) {
        case 'SET_PATH':
          return action.payload
        default:
          return state
      }
    },
    result(state='', action) {
      switch (action.type) {
        case 'SET_RESULT':
          return JSON.stringify(action.payload, null, 2)
        case 'SET_ERROR': 
          return action.payload
        default:
          return state
      }
    }    
  }),
  applyMiddleware(thunk)
)

module.exports = {
  store,
  dispatch: store.dispatch
}