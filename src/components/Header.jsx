import { useState } from 'react';
import { NavHashLink } from 'react-router-hash-link'; 
import { Menu, X } from 'lucide-react';
import './Header.css';
import logoImg from '../assets/images/alga_verde-logo.png';
import { getWhatsAppUrl, WA_CONFIG } from '../utils/contatosRedes';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Função para calcular o scroll exato ignorando conflitos de CSS
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; // Altura do seu Header fixo
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  };

  return (
    <header className="header">
      <div className="header-container">
        
        {/* Logo - Agora usando a função de scroll manual */}
        <NavHashLink 
          to="/#top" 
          scroll={scrollWithOffset}
          className="logo-link" 
          onClick={() => setIsMenuOpen(false)}
        >
          <img src={logoImg} alt="Alga Corretora" className="logo" />
        </NavHashLink>

        <button className="mobile-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li>
              <NavHashLink to="/#top" scroll={scrollWithOffset} onClick={toggleMenu}>
                Home
              </NavHashLink>
            </li>
            <li>
              <NavHashLink to="/#planos" scroll={scrollWithOffset} onClick={toggleMenu}>
                Planos
              </NavHashLink>
            </li>
            <li>
              <NavHashLink to="/#parcerias" scroll={scrollWithOffset} onClick={toggleMenu}>
                Parcerias
              </NavHashLink>
            </li>
            <li>
              <NavHashLink to="/#filiais" scroll={scrollWithOffset} onClick={toggleMenu}>
                Filiais
              </NavHashLink>
            </li>
            <li>
              <NavHashLink to="/sobre" onClick={toggleMenu}>
                Sobre
              </NavHashLink>
            </li>
          </ul>
          
          <button 
            className="cta-button" 
            onClick={() => window.open(getWhatsAppUrl(WA_CONFIG.numeroVendas, WA_CONFIG.msgInteresse), '_blank')}
          >
            Falar com Consultor
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;