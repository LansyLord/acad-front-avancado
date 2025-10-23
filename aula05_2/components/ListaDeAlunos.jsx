import React, { useEffect, useState } from 'react'

const ListaDeAlunos = () => {

    const [alunos, setAlunos] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:3000/alunos")
            const data = await response.json()
            setAlunos(data)
        }
        fetchData()
    }, [])

    return (
        <>
            <table>
                <thead>
                    <th>ID:</th>
                    <th>Nome:</th>
                    <th>Curso:</th>
                </thead>
                <tbody>
                    {
                        alunos.map((aluno) => (
                            <tr key={aluno.id}>
                                <td>{aluno.id}</td>
                                <td>{aluno.nome}</td>
                                <td>{aluno.curso}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default ListaDeAlunos