import React from 'react'
import Inicial from './pages/Inicial'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import CustomNavbar from './components/CustomNavBar'
import Faculdade from './pages/Faculdade'
import Noticias from './pages/Noticias'
import VisualizaNoticia from './pages/VisualizaNoticia'
import CustomFooter from './components/CustomFooter'
import Dpo from './pages/Dpo'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CustomNavbar />
        <Container className="my-4">
          <Routes>
            <Route path="/" element={<Inicial />} />
            <Route path="/a-faculdade" element={<Faculdade />} />
            <Route path="/dpo-lgpd" element={<Dpo />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/noticias/:id" element={<VisualizaNoticia />} />
          </Routes>
        </Container>
        <CustomFooter />
      </BrowserRouter>
    </div>
  )
}

export default App