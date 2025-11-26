import React from 'react'
import Inicial from './pages/Inicial'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import CustomNavbar from './components/CustomNavBar'
import Faculdade from './pages/Faculdade'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CustomNavbar />
        <Container className="my-4">
          <Routes>
            <Route path="/" element={<Inicial />} />
            <Route path="/a-faculdade" element={<Faculdade />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  )
}

export default App