import React from 'react'
import ShowCard from './ShowCard'
import Header from './Header'

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
  hadleSearchTermChange (event) {
    this.setState({msgSearch: event.target.value})
  },
  render () {
    return (
      <div className='search'>
        <Header
          showSearch
          searchTerm={this.state.msgSearch}
          hadleSearchTermChange={this.hadleSearchTermChange}
        />
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
