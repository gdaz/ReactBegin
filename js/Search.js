import React from 'react'
import preload from '../public/data.json'

const Search = React.createClass({
  render () {
    return (
      <div className='search'>
        {preload.shows.map(function (show) {
          return (
            <div className='show-card'>
              <img src={`/public/img/posters/${show.poster}`} />
              <h3>{show.title}</h3>
              <p>({show.year})</p>
              <p>{show.description}</p>
            </div>
          )
        })}
      </div>
    )
  }
})

export default Search
