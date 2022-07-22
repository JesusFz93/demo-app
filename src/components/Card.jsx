import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({ image, name, description, id }) => {
    return (
        <div className="card h-100">
            <img src={image} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <NavLink to={`/animal/${id}`} className='btn btn-info'>Ver mas...</NavLink>
            </div>
        </div>
    )
}

export default Card