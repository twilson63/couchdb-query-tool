const fetch = require('unfetch')

module.exports = {
  query(dispatch, getState) {
    const { url, path } = getState()
    
    return fetch(`${url}/${path}`)
      .then(res => res.json())
      .then(payload => dispatch({type: 'SET_RESULT', payload}))
      .catch(({message}) => dispatch({type: 'SET_ERROR', payload: message}))
  }
}