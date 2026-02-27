import { useEffect } from 'react';
import './PoliticaPrivacidade.css';

const PoliticaPrivacidade = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="politica-page">
      <section className="politica-hero">
        <div className="container">
          <h1>Políticas de Privacidade</h1>
          <p>Sua privacidade e a proteção dos seus dados são fundamentais para nós.</p>
        </div>
      </section>

      <section className="politica-content">
        <div className="container">
          <div className="texto-juridico">
            <p className="intro">
              A <strong>Alga Corretora de Seguros LTDA</strong>, inscrita sob o CNPJ 44.352.296/0001-85, 
              valoriza a privacidade de seus usuários e clientes. Esta política descreve como coletamos, 
              armazenamos e utilizamos suas informações de acordo com a <strong>Lei Geral de Proteção de Dados (LGPD)</strong>.
            </p>

            <h2>1. Coleta de Informações</h2>
            <p>
              Coletamos informações que você nos fornece voluntariamente ao preencher formulários de simulação, 
              solicitar contato via WhatsApp ou assinar nossa newsletter. Esses dados podem incluir:
            </p>
            <ul>
              <li>Nome completo;</li>
              <li>Endereço de e-mail;</li>
              <li>Número de telefone/WhatsApp;</li>
              <li>Informações básicas sobre a modalidade de plano de saúde pretendida.</li>
            </ul>

            <h2>2. Finalidade do Tratamento de Dados</h2>
            <p>Os dados coletados são utilizados exclusivamente para:</p>
            <ul>
              <li>Realizar simulações de valores de planos de saúde de acordo com o seu perfil;</li>
              <li>Entrar em contato para oferecer suporte consultivo;</li>
              <li>Enviar informações relevantes sobre alterações no mercado de saúde ou promoções vigentes;</li>
              <li>Cumprir obrigações legais ou regulatórias.</li>
            </ul>

            <h2>3. Compartilhamento de Dados</h2>
            <p>
              A Alga Corretora não vende ou aluga seus dados pessoais. O compartilhamento ocorre apenas com:
            </p>
            <ul>
              <li><strong>Operadoras de Saúde:</strong> Para viabilizar a cotação e contratação do plano escolhido;</li>
              <li><strong>Autoridades Judiciais:</strong> Quando houver exigência legal.</li>
            </ul>

            <h2>4. Segurança da Informação</h2>
            <p>
              Implementamos medidas técnicas e administrativas para proteger seus dados contra acessos não autorizados, 
              perda ou destruição. Nosso site utiliza criptografia SSL para garantir o tráfego seguro das informações.
            </p>

            <h2>5. Uso de Cookies</h2>
            <p>
              Utilizamos cookies para melhorar sua experiência de navegação e analisar o tráfego do site. 
              Você pode desativar o uso de cookies nas configurações do seu navegador, embora isso possa afetar 
              algumas funcionalidades do site.
            </p>

            <h2>6. Seus Direitos</h2>
            <p>
              De acordo com a LGPD, você tem o direito de confirmar a existência de tratamento, acessar, 
              corrigir ou solicitar a exclusão de seus dados pessoais a qualquer momento.
            </p>

            <h2>7. Alterações nesta Política</h2>
            <p>
              Esta política pode ser atualizada periodicamente. Recomendamos a leitura regular desta página para 
              estar ciente de qualquer modificação.
            </p>

            <div className="contato-privacidade">
              <p>Dúvidas sobre seus dados? Entre em contato conosco:</p>
              <p><strong>E-mail:</strong> contato@algacorretora.com.br</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PoliticaPrivacidade;