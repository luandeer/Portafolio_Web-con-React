import React from 'react'

const ItemProyecto = (props) => {
    return (
        <div className="portafolio-item">
            <div className="portafolio-item-image">
                <img src={require(`../../assets/img/${props.imagen}`)} alt={`${props.nomFoto}`} />
            </div>
            <h3>{props.descripcion}</h3>
            <div className="portafolio-item-cta">
                <a target="_blank" rel="noreferrer" href={`${props.linkGit}`} className='btn' >GitHub</a>
                <a target="_blank" rel="noreferrer" href={`${props.linkDemo}`} className='btn btn-primary' >Demo</a>
            </div>
        </div>
    )
}

export default ItemProyecto