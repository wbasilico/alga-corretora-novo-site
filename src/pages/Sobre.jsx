import { useEffect } from 'react';
import { Target, Eye, ShieldCheck, Heart, Users, Lightbulb } from 'lucide-react';
import './Sobre.css';

const Sobre = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="sobre-page">
      {/* Seção 1: Hero Minimalista (Sem imagem de fundo) */}
      <section className="sobre-hero">
        <div className="container" data-aos="fade-up">
          <h1>Sua saúde merece o melhor cuidado:<br /><span>soluções completas e humanas.</span></h1>
        </div>
      </section>

      {/* Seção 2: Nossa Essência (Texto Centralizado) */}
      <section className="quem-somos">
        <div className="container">
          <div className="quem-somos-content" data-aos="fade-up">
            <span className="subtitle">Nossa Essência</span>
            <h2>Expertise técnica com um olhar genuinamente humano.</h2>
            <div className="text-wrapper">
              <p>
                A <strong>Alga</strong> nasceu com o propósito de redefinir a jornada de cuidado com a saúde no Brasil. Consolidamos nossa reputação através de uma consultoria que não apenas apresenta opções, mas constrói relações reais de confiança.
              </p>
              <p>
                Com presença nacional e uma equipe de especialistas, filtramos as melhores alternativas do mercado para entregar o que realmente importa: a segurança de que você, sua família e sua empresa estão em boas mãos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3: Propósito e Direção */}
      <section className="missao-visao">
        <div className="container">
          <div className="mv-cards">
            <div className="card-mv" data-aos="zoom-in">
              <div className="icon-box"><Target size={32} /></div>
              <h3>Nosso Propósito</h3>
              <p>Descomplicar o acesso à saúde de qualidade através de caminhos inteligentes, éticos e centrados na vida.</p>
            </div>
            <div className="card-mv" data-aos="zoom-in" data-aos-delay="200">
              <div className="icon-box"><Eye size={32} /></div>
              <h3>Nossa Direção</h3>
              <p>Ser a referência absoluta em inovação e transparência, transformando o setor de benefícios em um ecossistema mais acolhedor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 4: Nosso DNA */}
      <section className="valores">
        <div className="container">
          <div className="valores-title" data-aos="fade-up">
            <h2>O que nos move</h2>
          </div>
          <div className="valores-grid">
            <div className="valor-card" data-aos="fade-up" data-aos-delay="100">
              <ShieldCheck className="v-icon" />
              <h4>Ética</h4>
              <p>Transparência em cada detalhe da nossa entrega.</p>
            </div>
            <div className="valor-card" data-aos="fade-up" data-aos-delay="200">
              <Heart className="v-icon" />
              <h4>Cuidado</h4>
              <p>Ouvir para entender, acolher para resolver.</p>
            </div>
            <div className="valor-card" data-aos="fade-up" data-aos-delay="300">
              <Lightbulb className="v-icon" />
              <h4>Agilidade</h4>
              <p>Respostas precisas no tempo da sua necessidade.</p>
            </div>
            <div className="valor-card" data-aos="fade-up" data-aos-delay="400">
              <Users className="v-icon" />
              <h4>União</h4>
              <p>Crescemos junto com nossos clientes e parceiros.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sobre;