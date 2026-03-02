import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Hero.css';
import { getWhatsAppUrl, WA_CONFIG } from '../utils/contatosRedes';

const slides = [
  { id: 1, img: '/images/hero/hero1.png' },
  { id: 2, img: 'https://dummyimage.com/1000x800/3C4A53/ffffff&text=Hero+Landscape+2' },
];

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Cuidar da sua saúde<br />nunca foi tão simples.</h1>
          <p>Planos sob medida, suporte humano e soluções inteligentes para você e sua família.</p>
          <div className="hero-buttons">
            <button 
              className="btn-simular" 
              onClick={() => window.open(getWhatsAppUrl(WA_CONFIG.numeroSimulacao, WA_CONFIG.msgSimulacao), '_blank')}
            >
              Simular meu plano
            </button>
            <button 
              className="btn-falar" 
              onClick={() => window.open(getWhatsAppUrl(WA_CONFIG.numeroVendas, WA_CONFIG.msgInteresse), '_blank')}
            >
              Falar com consultor
            </button>
          </div>
        </div>
        
        <div className="hero-slider">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 10000, disableOnInteraction: false }}
            grabCursor={true}
            className="mySwiper"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <img src={slide.img} alt="Slide Hero" className="slide-img" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;