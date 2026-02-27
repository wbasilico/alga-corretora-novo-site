import { UserCheck, Clock, Handshake } from 'lucide-react';
import './Diferenciais.css';

const Diferenciais = () => {
  const motivos = [
    {
      id: 1,
      icone: <UserCheck size={40} />,
      titulo: "Consultoria Humana",
      texto: "Nossos especialistas estão prontos para entender suas necessidades e encontrar a solução perfeita."
    },
    {
      id: 2,
      icone: <Clock size={40} />,
      titulo: "Atendimento Rápido",
      texto: "Respostas ágeis e eficientes para todas as suas dúvidas e solicitações."
    },
    {
      id: 3,
      icone: <Handshake size={40} />,
      titulo: "Parcerias Reais",
      texto: "Conectamos você com as melhores operadoras e provedores de saúde do mercado."
    }
  ];

  return (
    <section className="diferenciais-section">
      <div className="diferenciais-container">
        <div className="diferenciais-header">
          <h2>Por que escolher a Alga</h2>
        </div>

        <div className="diferenciais-grid">
          {motivos.map((motivo) => (
            <div className="diferencial-card" key={motivo.id}>
              <div className="icone-wrapper">
                {motivo.icone}
              </div>
              <h3>{motivo.titulo}</h3>
              <p>{motivo.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;