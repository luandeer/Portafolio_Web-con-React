import React from 'react'
import {BiCheck} from 'react-icons/bi'
const itemServicio = (props) => {
    return (
        <li>
            <BiCheck className='service-list-icon' />
            <p>{props.servicio}</p>
        </li>
    )
}

export default itemServicio