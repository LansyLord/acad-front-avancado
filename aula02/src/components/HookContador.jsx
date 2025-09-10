import React from 'react'
import { useState } from 'react'

export const HookContador = () => {

    const [contador, setContador] = useState(1);

    function incrementar() {
        setContador(contador + 1);
    }

    function decrementar() {
        setContador(contador - 1);
    }

    function dobrar() {
        setContador(contador * 2);
    }

    return (
        <div>
            <h1>Contador com useState</h1>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
            <button onClick={dobrar}>Dobrar</button>
            <h1>Contador está em: {contador}</h1>
        </div>
    )
}
