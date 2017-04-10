import React from 'react'
const {string} = React.PropTypes

const ShowCard = React.createClass({
  propTypes: {
    poster: string.isRequired,
    title: string.isRequired,
    year: string.isRequired,
    description: string.isRequired
  },
  render () {
    const {poster, title, year, description} = this.props
    return (
      <div className='show-card'>
        <img src={`/public/img/posters/${poster}`} />
        <h3>{title}</h3>
        <p>({year})</p>
        <p>{description}</p>
      </div>
    )
  }
})

export default ShowCard
