import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'
const ItemSkill = (props) => {
    return (
        <div className="technology-details">
            <BsFillCheckCircleFill className='technology-details-icon' />
            <div>
                <h4>{props.nombre}</h4>
                <small className='text-light'>{props.nivel}</small>
            </div>
        </div>
    )
}

export default ItemSkill