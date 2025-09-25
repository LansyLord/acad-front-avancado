import React from 'react'
import styles from './Campanha.module.css'

const Campanha = (props) => {

    function definirMensagem(mes) {
        if (mes === "Setembro") return "Prevenção ao suicídio";
        else if (mes === "Outubro") return "Conscientização sobore o cancer de mama";
        else if (mes === "Novembro") return "Prevenção e combate ao cancer de próstata";
    }

    function definirCor(mes) {
        if (mes === "Setembro") return styles.setembro;
        if (mes === "Outubro") return styles.outubro;
        if (mes === "Novembro") return styles.novembro;

    }

    return (
        <div className={definirCor(props.mes)}>
            {definirMensagem(props.mes)}
        </div>
    )
}

export default Campanha