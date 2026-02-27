import './Parcerias.css';
import parceriasData from '../data/parcerias.json';

const Parcerias = () => {
  // Duplicamos o array para criar o efeito infinito sem cortes
  const logosDuplicados = [...parceriasData, ...parceriasData];

  return (
    <section className="parcerias-section" id="parcerias">
      <div className="parcerias-header">
        <h2>Conexões e Parcerias</h2>
        <p>Trabalhamos com as melhores operadoras de saúde do Brasil</p>
      </div>

      <div className="parcerias-carrossel-wrapper">
        <div className="mask-left-areia"></div>
        <div className="mask-right-areia"></div>

        <div className="ticker-container">
          <div className="ticker-track">
            {logosDuplicados.map((parceiro, index) => (
              <div key={`${parceiro.id}-${index}`} className="parceiro-slide">
                <div className="parceiro-logo-card">
                  <img src={parceiro.logo} alt={`Logo ${parceiro.nome}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parcerias;