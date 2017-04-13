import React from 'react'
import ShowCard from './ShowCard'
import preload from '../public/data.json'

const Search = React.createClass({
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
          {preload.shows
          .filter((show) => {
            return `${show.title}`.toUpperCase()
            .indexOf(this.state.msgSearch.toUpperCase()) >= 0
          })
          .map((show) => {
            return (
              <ShowCard key={show.imdbID} poster={show.poster} title={show.title} year={show.year} description={show.description} />
            )
          })}
        </div>
      </div>
    )
  }
})

export default Search
