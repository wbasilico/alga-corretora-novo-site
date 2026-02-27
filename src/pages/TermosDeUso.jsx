import { useEffect } from 'react';
import './TermosDeUso.css';

const TermosDeUso = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="termos-page">
      <section className="termos-hero">
        <div className="container">
          <h1>Termos de Uso</h1>
          <p>As regras e condições para a utilização dos nossos serviços e plataforma.</p>
        </div>
      </section>

      <section className="termos-content">
        <div className="container">
          <div className="texto-juridico">
            <p className="intro">
              Bem-vindo ao site da <strong>Alga Corretora</strong>. Ao aceder e utilizar este site, 
              concordas em cumprir os seguintes termos e condições. Se não concordas com alguma parte destes termos, 
              recomendamos que não utilizes os nossos serviços.
            </p>

            <h2>1. Aceitação dos Termos</h2>
            <p>
              Estes termos regem o acesso ao site e o uso das ferramentas de simulação e contacto da 
              Alga Corretora de Seguros LTDA (CNPJ 44.352.296/0001-85). A continuidade do uso do site 
              confirma a tua aceitação destas condições.
            </p>

            <h2>2. Descrição dos Serviços</h2>
            <p>
              A Alga Corretora atua na consultoria e intermediação de seguros e planos de saúde. 
              As informações e valores apresentados nas simulações são estimativas baseadas nos dados fornecidos 
              pelas operadoras parceiras e podem sofrer alterações sem aviso prévio, dependendo da análise de risco, 
              idade e região.
            </p>

            <h2>3. Uso Responsável</h2>
            <p>O utilizador compromete-se a:</p>
            <ul>
              <li>Fornecer informações verdadeiras e atualizadas nos formulários de contacto;</li>
              <li>Não utilizar o site para fins ilegais ou para transmitir qualquer tipo de malware;</li>
              <li>Respeitar a integridade das ferramentas e códigos do site.</li>
            </ul>

            <h2>4. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo deste site (textos, logótipos, design e imagens) é propriedade exclusiva da 
              Alga Corretora ou dos seus parceiros. É proibida a reprodução total ou parcial para fins comerciais 
              sem autorização prévia por escrito.
            </p>

            <h2>5. Limitação de Responsabilidade</h2>
            <p>
              Embora nos esforcemos para manter as informações atualizadas, a Alga não se responsabiliza por:
            </p>
            <ul>
              <li>Erros de digitação ou imprecisões técnicas nos valores das operadoras;</li>
              <li>Indisponibilidade temporária do site devido a manutenções ou problemas técnicos externos;</li>
              <li>Decisões de contratação tomadas sem a devida consultoria direta com os nossos especialistas.</li>
            </ul>

            <h2>6. Links para Terceiros</h2>
            <p>
              O nosso site pode conter links para sites externos (como redes sociais ou sites das operadoras). 
              Não temos controlo sobre as políticas de privacidade ou o conteúdo desses sites terceiros.
            </p>

            <h2>7. Alterações nos Termos</h2>
            <p>
              Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entram em vigor 
              assim que publicadas no site.
            </p>

            <h2>8. Foro</h2>
            <p>
              Estes termos são regidos pelas leis brasileiras. Fica eleito o foro da comarca da sede da empresa 
              para resolver quaisquer questões relativas a estes Termos de Uso.
            </p>
            
            <div className="contato-juridico">
              <p>Última atualização: Fevereiro de 2026</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermosDeUso;