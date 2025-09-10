import React from 'react'
import { useState } from 'react';

export const HookMegaSena = () => {

    const [numeroSorteado, setNumeroSorteado] = useState(null);
    const [numerosSorteados, setNumerosSorteados] = useState([]);

    function sortearNumero() {
        setNumeroSorteado(Math.floor(Math.random() * 60) + 1)
    }

    return (
        <div>
            <button onClick={sortearNumero}>Sortear</button>
            <h1>Número sorteado: {numeroSorteado}</h1>
        </div>
    )
}
