import React from 'react'

export const RenderizandoComFuncones = (props) => {

    function oQueRenderizar(estado) {
        if (estado === "PB") {
            return <h1>João Pessoa</h1>
        } else if (estado === "PE") {
            return <h2>Recife</h2>
        }

    }

    return (
        <div>
            {oQueRenderizar("PE")}
        </div>
    )
}
