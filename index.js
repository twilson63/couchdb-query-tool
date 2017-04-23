const React = require('react')
const { render } = require('react-dom')
const { Provider } = require('react-redux')
const { store } = require('./store')

const App = require('./app')

// bootstrap react
render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
