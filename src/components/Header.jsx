import { useState } from 'react';
import { NavHashLink } from 'react-router-hash-link'; 
import { Menu, X } from 'lucide-react';
import './Header.css';
import logoImg from '../assets/images/alga_verde-logo.png';
import { getWhatsAppUrl, WA_CONFIG } from '../utils/contatosRedes';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="header-container">
        {/* NavHashLink para o topo da página */}
        <NavHashLink smooth to="/#top" className="logo-link" onClick={() => setIsMenuOpen(false)}>
          <img src={logoImg} alt="Alga Corretora" className="logo" />
        </NavHashLink>

        <button className="mobile-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li>
              <NavHashLink smooth to="/#top" onClick={toggleMenu}>Home</NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="/#planos" onClick={toggleMenu}>Planos</NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="/#parcerias" onClick={toggleMenu}>Parcerias</NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="/#filiais" onClick={toggleMenu}>Filiais</NavHashLink>
            </li>
            <li>
              <NavHashLink to="/sobre" onClick={toggleMenu}>Sobre</NavHashLink>
            </li>
          </ul>
          
          {/* Botão corrigido com onClick */}
          <button 
            className="cta-button" 
            onClick={() => window.open(getWhatsAppUrl(WA_CONFIG.numeroVendas, WA_CONFIG.msgInteresse), '_blank')}
          >
            Falar com especialista
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;