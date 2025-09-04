import React from 'react'
import PorscheImg from '../assets/porsche.png'

export const TrabalhandoComImagens = () => {
    return (
        <div>
            <h2>Imagem do public</h2>
            <img src="postman-astronaut.png" alt="public-image" />

            <h2>Imagem do assets</h2>
            <img src={PorscheImg} alt="assets-image" />


        </div>
    )
}
