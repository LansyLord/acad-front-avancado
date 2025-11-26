import React from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const CustomNavbar = () => {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            {/* `px-3` cria respiro lateral e `shadow-sm` destaca a barra com uma sombra suave */}
            <Navbar expand="md" style={{ backgroundColor: '#002F6C' }} variant="dark" className="px-3 shadow-sm">
                <Container fluid>
                    {/* `d-flex` transforma o brand em flex container e `align-items-center` alinha logo e texto verticalmente */}
                    <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                        {/* `me-2` aplica margem à direita no logo e `rounded` deixa as bordas suavizadas */}
                        <img src="/uniesp.jpg" alt="Uniesp Logo" width={60} height={60} className="me-2 rounded" />
                    </Navbar.Brand>

                    { /* Botão hamburger visível apenas em telas pequenas */}
                    <Navbar.Toggle onClick={handleShow} />
                    {/* `justify-content-end` empurra os itens para a direita, `d-none` esconde em telas pequenas e `d-md-flex` mostra a partir de `md` */}
                    <Navbar.Collapse className="justify-content-end d-none d-md-flex">
                        <Nav>
                            {/* `px-3` repete o espaçamento horizontal para que cada link tenha área clicável confortável */}
                            <Nav.Link as={Link} to="/a-faculdade" className="px-3">A Faculdade</Nav.Link>
                            <Nav.Link as={Link} to="/dpo-lgpd" className="px-3">DPO LGPD</Nav.Link>
                            <Nav.Link as={Link} to="/noticias" className="px-3">Notícias</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Menu lateral (Offcanvas) visível em telas pequenas ao clicar no botão hamburger */}

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {/* `flex-column` deixa os links empilhados verticalmente para leitura fácil no menu lateral */}
                    <Nav className="flex-column">
                        { /* Cada item de menu fecha o Offcanvas ao ser clicado */}
                        <Nav.Link as={Link} to="/a-faculdade" onClick={handleClose} >A Faculdade</Nav.Link>
                        <Nav.Link as={Link} to="/dpo-lgpd" onClick={handleClose} >DPO LGPD</Nav.Link>
                        <Nav.Link as={Link} to="/noticias" onClick={handleClose} >Notícias</Nav.Link>
                        <Nav.Link as={Link} to="/admin-noticias" onClick={handleClose} >Admin</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>

        </>
    )
}

export default CustomNavbar