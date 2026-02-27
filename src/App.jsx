import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Footer from './components/Footer'; // Importe o Footer aqui
import PoliticaPrivacidade from './pages/PoliticaPrivacidade';
import TermosDeUso from './pages/TermosDeUso';

function App() {
  return (
    <Router>
      <div id="top"></div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
        <Route path="/termos-uso" element={<TermosDeUso />} />
      </Routes>
      <Footer /> {/* Coloque o Footer aqui, fora do Routes e abaixo dele */}
    </Router>
  );
}

export default App;