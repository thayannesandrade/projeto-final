import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Portfolio from '../pages/Portifolio/Portfolio'
import Menu from '../components/Menu/Menu'
import Footer from '../components/Footer/Footer'
import Contato from '../pages/Contato/Contato'

function ApplicationRoutes() {
    return(
        <BrowserRouter>
                <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="contato" element={<Contato />} />
            </Routes>
                <Footer />
            
        </BrowserRouter>
    ) 
}

export default ApplicationRoutes
