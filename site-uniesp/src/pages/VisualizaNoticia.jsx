import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';

// Defina o URL base do seu JSON Server
// Assumindo que o servidor esteja rodando em http://localhost:3000
const API_URL = 'http://localhost:3000/noticias';

const VisualizarNoticia = () => {
    // 1. Obter o parâmetro de rota (o ID da notícia)
    const { id } = useParams();

    // 2. Estados para armazenar os dados, o estado de carregamento e erros
    const [noticia, setNoticia] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    // 3. Hook useEffect para buscar a notícia
    useEffect(() => {
        const buscarNoticia = async () => {
            // Se não tiver ID na URL, pode ser um erro ou um caso que você queira tratar
            if (!id) {
                setErro("ID da notícia não fornecido.");
                setCarregando(false);
                return;
            }

            try {
                // A requisição GET para o json-server deve ser no formato:
                // GET /noticias/:id
                const resposta = await axios.get(`${API_URL}/${id}`);
                setNoticia(resposta.data); // Armazena os dados da notícia
            } catch (error) {
                console.error("Erro ao buscar a notícia:", error);
                // Verifica se é um erro 404 (Not Found) ou outro erro
                if (error.response && error.response.status === 404) {
                    setErro(`Notícia com ID ${id} não encontrada.`);
                } else {
                    setErro("Ocorreu um erro ao carregar a notícia. Verifique se o JSON Server está rodando.");
                }
            } finally {
                setCarregando(false); // Finaliza o estado de carregamento
            }
        };

        buscarNoticia();
    }, [id]); // O array de dependências garante que a busca é re-executada se o ID mudar

    // --- Lógica de Renderização ---

    // Exibir um spinner enquanto carrega
    if (carregando) {
        return (
            <Container className="py-5 text-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Carregando...</span>
                </Spinner>
                <p className="mt-2">Carregando notícia...</p>
            </Container>
        );
    }

    // Exibir mensagem de erro
    if (erro) {
        return (
            <Container className="py-5">
                <Alert variant="danger">
                    <h4>Erro! 🚨</h4>
                    <p>{erro}</p>
                    <p className="mb-0">Tente novamente mais tarde ou verifique a rota no seu JSON Server.</p>
                </Alert>
            </Container>
        );
    }

    // Exibir o conteúdo da notícia
    // Se não está carregando, não há erro, mas também não há notícia (nunca deveria acontecer se o erro for bem tratado)
    if (!noticia) {
        return null;
    }

    return (
        <Container className="py-5">
            {/* Card para dar um visual bacana com Bootstrap */}
            <Card className="shadow-lg">
                {/* Imagem de Capa (usando a URL da notícia do json-server) */}
                <Card.Img
                    variant="top"
                    src={noticia.imagem} // Assumindo que seu JSON Server tem um campo 'imagem'
                    alt={noticia.titulo}
                    style={{ height: '350px', objectFit: 'cover' }}
                />
                <Card.Body className="p-5">
                    {/* Título da Notícia */}
                    <Card.Title as="h1" className="mb-4">
                        {noticia.titulo}
                    </Card.Title>
                    {/* Subtítulo/Resumo */}
                    <Card.Subtitle as="h4" className="mb-4 text-muted">
                        {noticia.subtitulo}
                    </Card.Subtitle>
                    <hr />
                    {/* Conteúdo Completo (Assumindo que seu JSON Server tem um campo 'conteudo') */}
                    {/* Pode ser necessário um tratamento para quebras de linha/parágrafos se o conteúdo for formatado em texto simples */}
                    <Card.Text style={{ whiteSpace: 'pre-wrap', fontSize: '1.1rem', lineHeight: '1.8' }}>
                        {noticia.conteudo}
                    </Card.Text>

                    {/* Informações adicionais, se houver */}
                    <footer className="blockquote-footer mt-5 pt-3 border-top">
                        Publicado em: <cite title="Data">{noticia.dataPublicacao || 'Data Desconhecida'}</cite>
                    </footer>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default VisualizarNoticia;