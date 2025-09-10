import React from 'react'

export const EstouConseguindoAprenderReact = (props) => {

    return (
        <div>
            {props.estouConseguindo ? <h1>Estou indo bem</h1> : <h1>Preciso estudar mais</h1>}
        </div>
    )
}
