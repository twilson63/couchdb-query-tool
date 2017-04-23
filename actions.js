const fetch = require('unfetch')

module.exports = {
  query (dispatch, getState) {
    const { url, path, method, body } = getState()
    let options = {}
    dispatch({ type: 'SET_ERROR', payload: '' })
    if (method !== 'GET') {
      options = Object.assign(options, {
        method,
        body,
        headers: { 'Content-Type': 'application/json' }
      })
    }
    return fetch(`${url}/${path}`, options)
      .then(res => res.json())
      .then(payload => dispatch({ type: 'SET_RESULT', payload }))
      .catch(
        ({ message }) => dispatch({ type: 'SET_ERROR', payload: message })
      )
  }
}
