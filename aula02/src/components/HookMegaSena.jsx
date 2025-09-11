import React from 'react'
import { useState } from 'react';

export const HookMegaSena = () => {

    const [numeroSorteado, setNumeroSorteado] = useState(null);
    const [numerosSorteados, setNumerosSorteados] = useState([]);

    function sortearNumero() {
        const novoNumero = Math.floor(Math.random() * 60) + 1;
        if (numerosSorteados.length < 6) {
            setNumeroSorteado(novoNumero);
            setNumerosSorteados((prevNumeros) => [...prevNumeros, novoNumero]);
        } else alert("Já temos 6 números sorteados");
    }

    return (
        <div>
            <h1>Sorteador da Mega em React! :)</h1>
            <button onClick={sortearNumero}>Sortear Número</button>
            <h1>Último Número sorteado: {numeroSorteado}</h1>
            <h1>Sorteados: {numerosSorteados.join(' - ')}</h1>
        </div>
    )
}
