import React from 'react'
import Produto from './components/Produto'

const App = () => {
  return (
    <div>
      {
        [
          { nome: "Aula F75", preco: 299.90, categoria: "Periférico", quantidade: 5 },
          { nome: "Black Widow Chroma", preco: 699.90, categoria: "Periférico", quantidade: 0 },
          { nome: "Monitor AOC Hero", preco: 899.90, categoria: "Periférico", quantidade: 2 }
        ].map((produto) =>
          <Produto nome={produto.nome} preco={produto.preco} categoria={produto.categoria} quantidade={produto.quantidade} />)
      }

    </div>
  )
}

export default App
