import React from 'react'
import {Link} from 'react-router-dom'

const {string} = React.PropTypes

const ShowCard = React.createClass({
  propTypes: {
    poster: string.isRequired,
    title: string.isRequired,
    year: string.isRequired,
    description: string.isRequired,
    imdbID: string.isRequired
  },
  render () {
    const {poster, title, year, description, imdbID} = this.props
    return (
      <Link to={`/details/${imdbID}`} >
        <div className='show-card'>
          <img src={`/public/img/posters/${poster}`} />
          <h3>{title}</h3>
          <p>({year})</p>
          <p>{description}</p>
        </div>
      </Link>
    )
  }
})

export default ShowCard
