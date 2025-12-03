import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'; // Ícones das redes sociais
import { Link } from 'react-router-dom';
import './CustomFooter.css'; // Vamos criar um arquivo CSS para o fundo preto

const CustomFooter = () => {
    return (
        // O elemento 'footer' com a classe de fundo preto (bg-dark) e cor do texto branca (text-white)
        <footer className="footer-custom mt-auto py-5">
            <Container>
                <Row>
                    {/* COLUNA 1: Logo e Redes Sociais */}
                    <Col md={3} className="mb-4">
                        {/* 1.1. Logo */}
                        <img
                            src="/logo-iesp.jpg" // Assumindo que você tem uma versão branca do logo na pasta public
                            alt="UNIESP Centro Universitário"

                            className="mb-3"
                        />

                        {/* 1.2. Ícones de Redes Sociais */}
                        <div className="d-flex mb-4">
                            <a href="#" className="text-white me-2">
                                <FaFacebookF size={20} />
                            </a>
                            <a href="#" className="text-white me-2">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" className="text-white">
                                <FaYoutube size={20} />
                            </a>
                        </div>

                        {/* 1.3. QR Code (e-MEC) */}
                        <div className="text-center">
                            <img
                                src="/qrcode.png" // Assumindo o QR Code na pasta public
                                alt="e-MEC QR Code"
                                style={{ maxWidth: '250px' }}
                            />
                            <small className="d-block mt-2 text-light">
                                CONSULTE O CADASTRO DA <br /> INSTITUIÇÃO NO SISTEMA E-MEC
                            </small>
                        </div>
                    </Col>

                    {/* COLUNA 2: Institucional e Cursos */}
                    <Col md={3} className="mb-4">
                        <Row>
                            {/* 2.1. Institucional */}
                            <Col xs={12} className="mb-3">
                                <h5 className="text-uppercase border-bottom border-light pb-2 mb-2">Institucional</h5>
                                <Nav className="flex-column">
                                    <Nav.Link as={Link} to="/institucional/centro-universitario">Centro Universitário</Nav.Link>
                                    <Nav.Link as={Link} to="/institucional/estrutura">Estrutura</Nav.Link>
                                    <Nav.Link as={Link} to="/institucional/biblioteca">Biblioteca</Nav.Link>
                                    <Nav.Link as={Link} to="/institucional/ceua">CEUA</Nav.Link>
                                    <Nav.Link as={Link} to="/institucional/lgpd">DPO - LGPD</Nav.Link>
                                    <Nav.Link as={Link} to="/noticias">Notícias</Nav.Link>
                                    <Nav.Link as={Link} to="/trabalhe-conosco">Trabalhe conosco</Nav.Link>
                                </Nav>
                            </Col>

                            {/* 2.2. Cursos */}
                            <Col xs={12}>
                                <h5 className="text-uppercase border-bottom border-light pb-2 mb-2">Cursos</h5>
                                <Nav className="flex-column">
                                    <Nav.Link as={Link} to="/cursos/graduacao">Graduação</Nav.Link>
                                    <Nav.Link as={Link} to="/cursos/semipresencial">Semipresencial</Nav.Link>
                                    <Nav.Link as={Link} to="/cursos/ead">EAD</Nav.Link>
                                    <Nav.Link as={Link} to="/cursos/pos-graduacao">Pós-Graduação</Nav.Link>
                                    <Nav.Link as={Link} to="/cursos/livres">Cursos Livres</Nav.Link>
                                </Nav>
                            </Col>
                        </Row>
                    </Col>

                    {/* COLUNA 3: Inscreva-se e Serviços (Parte 1) */}
                    <Col md={3} className="mb-4">
                        {/* 3.1. Inscreva-se */}
                        <h5 className="text-uppercase border-bottom border-light pb-2 mb-2">Inscreva-se</h5>
                        <Nav className="flex-column">
                            <Nav.Link as={Link} to="/inscreva-se/enem">ENEM</Nav.Link>
                            <Nav.Link as={Link} to="/inscreva-se/vestibular">Vestibular Online</Nav.Link>
                            <Nav.Link as={Link} to="/inscreva-se/transferencia">Transfira para o UNIESP</Nav.Link>
                            <Nav.Link as={Link} to="/inscreva-se/segunda-graduacao">2ª Graduação</Nav.Link>
                            <Nav.Link as={Link} to="/inscreva-se/retorno-ao-curso">Retorno ao curso</Nav.Link>
                            <Nav.Link as={Link} to="/inscreva-se/bolsas-financiamentos">Bolsas e Financiamentos</Nav.Link>
                            <Nav.Link as={Link} to="/inscreva-se/consulta-resultado">Consulte seu Resultado</Nav.Link>
                            <Nav.Link as={Link} to="/inscreva-se/matricula">Matrícula</Nav.Link>
                            <Nav.Link as={Link} to="/inscreva-se/pravaler">PRAVALER</Nav.Link>
                        </Nav>
                    </Col>

                    {/* COLUNA 4: Serviços (Parte 2) */}
                    <Col md={3} className="mb-4">
                        <h5 className="text-uppercase border-bottom border-light pb-2 mb-2">Serviços</h5>
                        <Nav className="flex-column">
                            <Nav.Link as={Link} to="/servicos/aluno-online-graduacao">Aluno Online - Graduação</Nav.Link>
                            <Nav.Link as={Link} to="/servicos/aluno-online-pos">Aluno Online - Pós</Nav.Link>
                            <Nav.Link as={Link} to="/servicos/professor-online">Professor Online</Nav.Link>
                            <Nav.Link as={Link} to="/servicos/plataforma-de-aprendizagem">Plataforma de Aprendizagem</Nav.Link>
                            <Nav.Link as={Link} to="/servicos/biblioteca">Biblioteca</Nav.Link>
                            <Nav.Link as={Link} to="/servicos/educacao-corporativa">Educação Corporativa</Nav.Link>
                            <Nav.Link as={Link} to="/servicos/internacionalizacao">Internacionalização</Nav.Link>
                            <Nav.Link as={Link} to="/servicos/nucleo-de-carreiras">Núcleo de Carreiras</Nav.Link>
                            <Nav.Link as={Link} to="/servicos/clinica-escola">Clínica Escola</Nav.Link>
                            <Nav.Link as={Link} to="/servicos/area-do-egresso">Área do Egresso</Nav.Link>
                            <Nav.Link as={Link} to="/servicos/atendimento-online">Atendimento on-line</Nav.Link>
                            <Nav.Link as={Link} to="/servicos/autenticidade">Autenticidade</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>

            {/* Linha de Copyright */}
            <div className="footer-copyright py-3 mt-4 text-center">
                <Container>
                    <p className="mb-0 text-white-50">
                        Copyright ©2025 Sociedade de Ensino Superior da Paraíba Sociedade Simples LTDA
                    </p>
                </Container>
            </div>
        </footer>
    );
};

export default CustomFooter;