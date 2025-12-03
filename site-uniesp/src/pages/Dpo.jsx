import React from 'react'
import { Card, Container } from 'react-bootstrap'


const Dpo = () => {
    return (
        <Container>
            <h2 className="mb-5 mt-5">DPO - LGPD</h2>
            <Card className="mb-4 shadow-sm p-4">

                <Card.Title>
                    Oficial de Proteção de Dados - DPO
                </Card.Title>
                <Card.Body>
                    <p>
                        O Centro Universitário Uniesp atendendo à Lei Geral de Proteção de dados (Lei n. 13.709, de 14 de agosto de 2018) disponibiliza ao público o canal de comunicação dpo@iesp.edu.br para tratamento de assuntos relacionados a este tema. Tal e-mail é um canal permanente entre o público externo e interno que necessite de atendimento aos assuntos que abordem à LGPD. Comprometidos com o cumprimento legal desta atribuição comunicamos ainda que as mensagens eletrônicas enviadas serão respondidas em até 5 dias úteis.                    </p>

                </Card.Body>

            </Card>
        </Container>
    )
}

export default Dpo