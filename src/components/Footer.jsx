import { NavHashLink } from 'react-router-hash-link';
import { Instagram, Facebook } from 'lucide-react';
import { SOCIAL_CONFIG } from '../utils/contatosRedes'; // Nome atualizado aqui
import './Footer.css';
import logoImg from '/images/alga_verde-logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Coluna 1: Logo e Info */}
        <div className="footer-coluna logo-coluna">
          <NavHashLink smooth to="/#top">
            <img src={logoImg} alt="Alga Corretora Home" className="footer-logo" />
          </NavHashLink>
          <p className="mensagem-footer">Cuidando de você e da sua família com excelência, conectando você aos melhores planos do mercado.</p>
          <div className="info-empresa">
            <p>CNPJ: 44.352.296/0001-85</p>
            <p>Alga Corretora de Seguros LTDA.</p>
          </div>
        </div>

        {/* Coluna 2: Links */}
        <div className="footer-coluna links-coluna">
          <h3>Links Institucionais</h3>
          <ul>
            <li><Link to="/politica-privacidade">Política de Privacidade</Link></li>
            <li><Link to="/termos-uso">Termos de Uso</Link></li>
          </ul>
        </div>

        {/* Coluna 3: Redes Sociais */}
        <div className="footer-coluna redes-coluna">
          <h3>Siga nas Redes</h3>
          <div className="redes-icones">
            <a 
              href={SOCIAL_CONFIG.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              <Instagram size={24} />
            </a>
            <a 
              href={SOCIAL_CONFIG.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {anoAtual} Alga Corretora. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;