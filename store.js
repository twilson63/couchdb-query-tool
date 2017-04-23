const { createStore, combineReducers, applyMiddleware } = require('redux')
const thunk = require('redux-thunk').default

const store = createStore(
  combineReducers({
    error (state = '', action) {
      switch (action.type) {
        case 'SET_ERROR':
          return action.payload
        default:
          return state
      }
    },
    advanced (state = false, action) {
      switch (action.type) {
        case 'TOGGLE':
          return !state
        default:
          return state
      }
    },
    url (state = '', action) {
      switch (action.type) {
        case 'SET_URL':
          return action.payload
        default:
          return state
      }
    },
    path (state = '', action) {
      switch (action.type) {
        case 'SET_PATH':
          return action.payload
        default:
          return state
      }
    },
    method (state = 'GET', action) {
      switch (action.type) {
        case 'SET_METHOD':
          return action.payload
        default:
          return state
      }
    },
    body (state = '', action) {
      switch (action.type) {
        case 'SET_BODY':
          return action.payload
        default:
          return state
      }
    },
    result (state = '', action) {
      switch (action.type) {
        case 'SET_RESULT':
          return JSON.stringify(action.payload, null, 2)
        default:
          return state
      }
    }
  }),
  applyMiddleware(thunk)
)

module.exports = { store, dispatch: store.dispatch }
