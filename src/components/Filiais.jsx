import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { MapPin } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Filiais.css';
import filiaisData from '../data/filiais.json';
import { getWhatsAppUrl, WA_CONFIG } from '../utils/contatosRedes';

const Filiais = () => {
  return (
    <section className="filiais-section" id="filiais">
      <div className="filiais-header">
        <h2>Encontre uma Filial</h2>
        <p>Estamos presentes nas principais regiões para atender você de perto.</p>
      </div>

      <div className="filiais-carrossel-wrapper">
        <div className="mask-left-offwhite"></div>
        <div className="mask-right-offwhite"></div>

        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={30}
          slidesPerView={1}
          grabCursor={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className="filiais-swiper"
        >
          {filiaisData.map((filial) => (
            <SwiperSlide key={filial.id}>
              <div className="filial-card">
                <div className="filial-img-container">
                  <img src={filial.imagem} alt={`Filial ${filial.cidade}`} />
                  <div className="filial-overlay"></div>
                </div>
                
                <div className="filial-info">
                  <h3>{filial.cidade}</h3>
                  <div className="filial-endereco">
                    <MapPin size={18} className="icone-mapa" />
                    <span>{filial.endereco}</span>
                  </div>

                  <div className="filial-acao">
                    <button 
                      className="btn-contatar"
                      onClick={() => window.open(
                        getWhatsAppUrl(filial.whatsapp, WA_CONFIG.msgInteresse), 
                        '_blank'
                      )}
                    >
                      Contatar
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Filiais;