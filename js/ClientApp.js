import React from 'react'
import {render} from 'react-dom'
import {HashRouter, Route} from 'react-router-dom'
import Landing from './Landing'
import '../public/normalize.css'
import '../public/style.css'

const App = React.createClass({
  render () {
    return (
      <div className='app'>
        <HashRouter>
          <Route exact path='/' component={Landing} />
        </HashRouter>
      </div>
    )
  }
})

render(<App />, document.getElementById('app'))
