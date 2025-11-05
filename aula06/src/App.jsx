import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicial from './pages/Inicial'
import Contato from './pages/Contato'
import Noticias from './pages/Noticias'
import Faculdade from './pages/Faculdade'
import DpoLgpd from './pages/DpoLgpd'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Inicial />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/a-faculdade" element={<Faculdade />} />
          <Route path="/dpo-lgpd" element={<DpoLgpd />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App