/* ignore below the fold */

const React = require('react')
const { connect } = require('react-redux')
const { dispatch } = require('./store')
const { query } = require('./actions')

//dispatch({type: 'SET_RESULT', payload: value })

const App = (props) => {
  return (
    <div>
      <header className="ma0 pa4 blue bg-yellow">
        <h1 className="">Relaxing on CouchDB</h1>
      </header>
      <main className="pa4">
        <div className="mv2">
          <label className="db mb1">Server</label>
          <input 
            value={props.url}
            onChange={e => props.dispatch({type: 'SET_URL', payload: e.target.value})}
            className="w-100 ba pa3 dark-gray" type="text" placeholder="http://localhost:5984" />
        </div>
        <div className="mv2">
          <label className="db mb1">Path (hint: %2f == '/')</label>
          <input 
            value={props.path}
            onChange={e => props.dispatch({type: 'SET_PATH', payload: e.target.value})}
            className="w-100 ba pa3 dark-gray" type="text" placeholder="_all_dbs" />
        </div>
        <div className="mv2">
          <button className="ba bg-pink white w-100 br2 pa2"
            onClick={e => props.dispatch(query)}
            >Run Query</button>
        </div>
        <pre className="w-100 ba pa4 code f5 bg-black-80 white">
          <code>
        {props.result.toString()}
          </code>
        </pre>
      </main>
    </div>
    
  )
}

module.exports = connect(state => state)(App)