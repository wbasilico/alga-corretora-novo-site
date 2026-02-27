import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Footer from './components/Footer';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade';
import TermosDeUso from './pages/TermosDeUso';

function App() {
  return (
    <Router>
      {/* Colocamos o ID numa div que envolve os componentes principais */}
      <div id="top" className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
            <Route path="/termos-uso" element={<TermosDeUso />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;