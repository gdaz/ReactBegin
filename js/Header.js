import React from 'react'
import {Link} from 'react-router-dom'

class Header extends React.Component {
  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <input value={this.props.searchTerm} onChange={this.props.hadleSearchTermChange} type='text'
        placeholder='Search' />
    } else {
      utilSpace = (
        <h2>
          <Link to='/Search'>
            Back
          </Link>
        </h2>
      )
    }
    return (
      <header>
        <h1>
          <Link to='/'>
            svideo
          </Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
}

const {func, bool, string} = React.PropTypes
Header.propTypes = {
  hadleSearchTermChange: func,
  showSearch: bool,
  searchTerm: string
}

export default Header
