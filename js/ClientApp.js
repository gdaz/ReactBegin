import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle.js'

let MyFirstComponent = React.createClass({
  render: function () {
    return (
            <div>
              <MyTitle title="1" color="red"/>
              <MyTitle title="2" color="red"/>
              <MyTitle title="3" color="red"/>
            </div>
        )
  }
})

ReactDOM.render(<MyFirstComponent/>, document.getElementById('app'))
