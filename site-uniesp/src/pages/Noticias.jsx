import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Noticias = () => {
    return (
        <Container className="py-4">
            <h2 className="mb-4">Notícias</h2>
            <Row className="g-4">
                <Col md={4}>
                    <Card className="text-center h-100 shadow-sm">
                        <Card.Img
                            variant="top"
                            src="ia.jpg"
                            alt="Main Building"
                            style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <Card.Body>
                            <Card.Title className="text-start">
                                Tecnologia avança com IA Generativa
                            </Card.Title>
                            <Card.Subtitle className="text-start mb-4">
                                UNIESP inaugura laboratório dedicado a soluções inteligentes para empresas paraibanas
                            </Card.Subtitle>
                            <Card.Text className='text-start'>
                                O novo laboratório de IA Generativa da UNIESP já nasce conectado a desafios reais enviados por empresas parceiras da região metropolitana de João P...
                            </Card.Text>
                            <Card.Text as={Link} to="/noticias/1" className="text-start">Ler mais</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="text-center h-100 shadow-sm">
                        <Card.Img
                            variant="top"
                            src="mercado-financeiro.png"
                            alt="Main Building"
                            style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <Card.Body>
                            <Card.Title className="text-start">
                                Mercado financeiro fecha em alta
                            </Card.Title>
                            <Card.Subtitle className="text-start mb-4">
                                Indicadores positivos de emprego e infla;áo animam investidores brasileiros
                            </Card.Subtitle>
                            <Card.Text className='text-start'>
                                O Ibovespa encerrou o pregão desta quarta-feira com alta de 1,8%, impulsionado pelo setor financeiro e por empresas ligadas ao consumo. A divulgaçã...
                            </Card.Text>
                            <Card.Text as={Link} to="/noticias/2" className="text-start">Ler mais</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="text-center h-100 shadow-sm">
                        <Card.Img
                            variant="top"
                            src="exoplaneta.jpg"
                            alt="Main Building"
                            style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <Card.Body>
                            <Card.Title className="text-start">
                                Cientistas descobrem exoplaneta habitável
                            </Card.Title>
                            <Card.Subtitle className="text-start mb-4">
                                Equpe internacional detecta indicios de atmosfera estável a 120 anos-luz da terra
                            </Card.Subtitle>
                            <Card.Text className='text-start'>
                                Astrônomos que utilizam o telescópio espacial James Webb anunciaram a identificação de um exoplaneta com tamanho semelhante ao da Terra e condições...
                            </Card.Text>
                            <Card.Text as={Link} to="/noticias/3" className="text-start">Ler mais</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Noticias