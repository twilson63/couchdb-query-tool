/* ignore below the fold */

const React = require('react')
const { connect } = require('react-redux')
const { dispatch } = require('./store')
const { query } = require('./actions')

// dispatch({type: 'SET_RESULT', payload: value })
const App = props => {
  return (
    <div>
      <header className='ma0 pa4 blue bg-red'>
        <h1 className='white-80'>Relaxing on CouchDB</h1>
      </header>
      <main className='pa4'>
        <div className='fr'>
          <a
            href='#'
            className='link'
            onClick={e => props.dispatch({ type: 'TOGGLE' })}
          >
            Advanced Options
          </a>
        </div>
        <div className='mv2'>
          <label className='db mb1'>Server/Database</label>
          <input
            value={props.url}
            onChange={
              e => props.dispatch({ type: 'SET_URL', payload: e.target.value })
            }
            className='w-100 ba pa3 dark-gray'
            type='text'
            placeholder='http://localhost:5984/dbname'
          />
        </div>
        <div className='mv2'>
          <label className='db mb1'>Path (optional) (hint: %2f == '/')</label>
          <input
            value={props.path}
            onChange={
              e => props.dispatch({ type: 'SET_PATH', payload: e.target.value })
            }
            className='w-100 ba pa3 dark-gray'
            type='text'
            placeholder='...'
          />
        </div>
        {props.advanced && (
        <div>
          <div className='mv2'>
            <label className='db mt2 mb1'>Method</label>
            <div className='cf'>
              <div className='fl w-25'>
                <label>
                  <input
                    type='radio'
                    name='method'
                    value='GET'
                    checked={props.method === 'GET'}
                    onChange={
                            e =>
                              props.dispatch({
                                type: 'SET_METHOD',
                                payload: 'GET'
                              })
                          }
                        />
                  <span className='ml1'>GET</span>
                </label>
              </div>
              <div className='fl w-25'>
                <label>
                  <input
                    type='radio'
                    name='method'
                    value='PUT'
                    checked={props.method === 'PUT'}
                    onChange={
                            e =>
                              props.dispatch({
                                type: 'SET_METHOD',
                                payload: 'PUT'
                              })
                          }
                        />
                  <span className='ml1'>PUT</span>
                </label>
              </div>
              <div className='fl w-25'>
                <label>
                  <input
                    type='radio'
                    name='method'
                    value='POST'
                    checked={props.method === 'POST'}
                    onChange={
                            e =>
                              props.dispatch({
                                type: 'SET_METHOD',
                                payload: 'POST'
                              })
                          }
                        />
                  <span className='ml1'>POST</span>
                </label>
              </div>
              <div className='fl w-25'>
                <label>
                  <input
                    type='radio'
                    name='method'
                    value='DELETE'
                    checked={props.method === 'DELETE'}
                    onChange={
                            e =>
                              props.dispatch({
                                type: 'SET_METHOD',
                                payload: 'DELETE'
                              })
                          }
                        />
                  <span className='ml1'>DELETE</span>
                </label>
              </div>
            </div>
          </div>
          <div className='mv2'>
            <label className='mt2 mb2'>Body</label>
            <textarea
              onChange={
                      e =>
                        props.dispatch({
                          type: 'SET_BODY',
                          payload: e.target.value
                        })
                    }
              rows={10}
              className='code mt2 pa2 w-100 h-25 ba'
              value={props.body}
                  />
          </div>
        </div>
            )}
        <div className='mv2'>
          <button
            className='ba bg-red white w-100 br2 pa2'
            onClick={e => props.dispatch(query)}
          >
            Run Query
          </button>
        </div>
        <pre className='w-100 ba pa4 code f5 bg-black-80 white'>
          <code>
            {props.result.toString()}
          </code>
        </pre>
      </main>
    </div>
  )
}

module.exports = connect(state => state)(App)
