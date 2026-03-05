import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Planos.css';
import planosData from '../data/planos.json';
import { getWhatsAppUrl } from '../utils/contatosRedes';

const Planos = () => {
  return (
    <section className="planos-section" id="planos">
      <div className="planos-header">
        <h2>Os melhores planos do mercado</h2>
        <p>Soluções em saúde que cabem no seu bolso e atendem às suas necessidades.</p>
      </div>

      <div className="carrossel-wrapper">
        <div className="mask-left"></div>
        <div className="mask-right"></div>

        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={30}
          slidesPerView={1}
          grabCursor={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 },
          }}
          className="planos-swiper"
        >
          {planosData.map((plano) => (
            <SwiperSlide key={plano.id}>
              <div className={`plano-card glass ${plano.destaque ? 'card-destaque' : ''}`}>
                
                {/* 1. BADGE ODONTO */}
                {plano.destaque && (
                  <div className="badge-oferta">ODONTO</div>
                )}

                <div className="plano-info">
                  <h3>{plano.nome}</h3>
                  <span className="operadora">{plano.operadora}</span>
                </div>
                
                <div className="plano-logo">
                  <img src={plano.imagemLogo} alt={`Logo ${plano.operadora}`} />
                </div>

                <div className="plano-preco-area">
                  <span className="a-partir">a partir de</span>
                  <div className="preco-destaque">
                    <span className="moeda">R$</span>
                    <span className="inteiro">{plano.precoInteiro}</span>
                    <sup className="centavos">{plano.precoCentavos}</sup>
                    <span className="asterisco">*</span>
                  </div>
                </div>

                {/* 2. INFORMAÇÃO EXTRA (Lida direto do JSON) */}
                {plano.infoExtra && (
                  <p className="info-extra">{plano.infoExtra}</p>
                )}

                <button 
                  className="btn-contratar"
                  onClick={() => window.open(
                    getWhatsAppUrl(
                      plano.whatsapp, 
                      `Olá, eu gostaria de mais informações sobre o plano ${plano.nome} da ${plano.operadora}. Podemos conversar?`
                    ), 
                    '_blank'
                  )}
                >
                  Quero Contratar
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="planos-footer">
        <p className="nota-legal">*preços para faixa etária de 0 a 18 anos, na categoria Enfermaria.</p>
      </div>
    </section>
  );
};

export default Planos;