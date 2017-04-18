import React from 'react'
import ShowCard from './ShowCard'

const {string, arrayOf, shape} = React.PropTypes

const Search = React.createClass({
  propTypes: {
    shows: arrayOf(shape({
      title: string.isRequired,
      description: string.isRequired
    }))
  },
  getInitialState () {
    return {
      msgSearch: ''
    }
  },
  handleSearchState (event) {
    this.setState({msgSearch: event.target.value})
  },
  render () {
    return (
      <div className='search'>
        <header>
          <h1>{this.state.msgSearch}</h1>
          <input value={this.state.msgSearch} onChange={this.handleSearchState} type='text' placeholder='Search' />
        </header>
        <div>
          {this.props.shows
          .filter((show) => {
            return `${show.title}`.toUpperCase()
            .indexOf(this.state.msgSearch.toUpperCase()) >= 0
          })
          .map((show) => {
            return (
              <ShowCard key={show.imdbID} {...show} />
            )
          })}
        </div>
      </div>
    )
  }
})

export default Search
