import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <Link to="/">Inicial | </Link>

            <Link to="/noticias">Notícias | </Link>

            <Link to="/dpo-lgpd">DPO LGPD | </Link>

            <Link to="/a-faculdade">Faculdade | </Link>

            <Link to="/contato">Contato | </Link>

        </nav>
    )
}

export default NavBar