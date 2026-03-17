import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Hero.css';
import { getWhatsAppUrl, WA_CONFIG } from '../utils/contatosRedes';

const slides = [
  { id: 1, img: '/images/hero/hero1.jpg' },
  { id: 2, img: '/images/hero/hero2.jpg' },
  { id: 3, img: '/images/hero/hero3.jpg' },
  { id: 4, img: '/images/hero/hero4.jpg' },
  { id: 5, img: '/images/hero/hero5.jpg' },
  { id: 6, img: '/images/hero/hero6.jpg' },
  { id: 7, img: '/images/hero/hero7.jpg' }
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