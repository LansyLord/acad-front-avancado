import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'

const Faculdade = () => {
    return (
        <Container className="py-4">
            <h2 className="mb-4">A Faculdade</h2>
            <Card className="mb-4 shadow-sm">
                <Card.Body>
                    <p>
                        A Faculdade Uniesp é boa!
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nostrum quos laboriosam est eaque sit ut sunt itaque, debitis aperiam? Voluptas porro, sit nesciunt tempora id similique quisquam consectetur quibusdam.
                    </p>

                </Card.Body>

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
        </Container>
    )
}

export default Faculdade