import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'

const Inicial = () => {
    return (
        <Container className="py-4">
            <Card className="mb-4 shadow-sm">
                <p>
                    A Faculdade UNIESP é uma instituição comprometida em fornecer educação de qualidade, com foco no desenvolvimento profissional e pessoal...
                </p>
                <p>
                    Contamos com uma equipe de professores qualificados, uma infraestrutura moderna e uma metodologia de ensino que valoriza o aprendizado prático...
                </p>
                <p>
                    A seguir, conheça mais sobre as áreas e as oportunidades que a Faculdade UNIESP oferece para você.
                </p>
            </Card>
            <Row className="g-4">
                <Col md={4}>
                    <Card className="text-center h-100 shadow-sm">
                        <Card.Img
                            variant="top"
                            src="https://images.unsplash.com/photo-1652974731232-efc86a9bd985"
                            alt="Main Building"
                            style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <Card.Body>
                            <Card.Title>
                                Vida no Campus
                            </Card.Title>
                            <Card.Text>
                                Um ambiente vibrante e acolhedor, com atividades...
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="text-center h-100 shadow-sm">
                        <Card.Img
                            variant="top"
                            src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc"
                            alt="Main Building"
                            style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <Card.Body>
                            <Card.Title>
                                Biblioteca
                            </Card.Title>
                            <Card.Text>
                                Uma biblioteca com um acervo completo e atualizado...
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="text-center h-100 shadow-sm">
                        <Card.Img
                            variant="top"
                            src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
                            alt="Main Building"
                            style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <Card.Body>
                            <Card.Title>
                                Sala de aula
                            </Card.Title>
                            <Card.Text>
                                Um ambiente vibrante e acolhedor, com atividades...
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="g-4 mt-4">
                <Col md={6}>
                    <Card className="h-100 shadow-sm">
                        <Card.Img
                            src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0"
                            style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <Card.Body className="text-center">
                            <Card.Title>
                                Parceria com empresas
                            </Card.Title>
                            <Card.Text>
                                Mantemos acordos com empresas locais e multinacionais...
                            </Card.Text>
                        </Card.Body>
                    </Card>


                </Col>

                <Col md={6}>
                    <Card className="h-100 shadow-sm">
                        <Card.Img
                            src="https://images.unsplash.com/photo-1513258496099-48168024aec0"
                            style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <Card.Body className="text-center">
                            <Card.Title>
                                Compromisso com a Educação
                            </Card.Title>
                            <Card.Text>
                                Mantemos acordos com empresas locais e multinacionais... Bla bla
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Inicial