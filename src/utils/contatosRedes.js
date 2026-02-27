// src/utils/contatosRedes.js

// Lógica de geração de link
export const getWhatsAppUrl = (numero, mensagem) => {
  const numeroLimpo = numero.replace(/\D/g, ''); 
  return `https://wa.me/${numeroLimpo}?text=${encodeURIComponent(mensagem)}`;
};

// Configurações de WhatsApp
export const WA_CONFIG = {
  numeroVendas: "5511999999999",
  numeroSimulacao: "5511988888888",
  msgInteresse: "Olá, tenho interesse em adquirir um plano de saúde e desejo mais informações",
  msgSimulacao: "Olá, quero simular os valores do plano que escolhi"
};

// Configurações de Redes Sociais
export const SOCIAL_CONFIG = {
  instagram: "https://www.instagram.com/algacorretora/",
  facebook: "https://www.facebook.com/profile.php?id=61578572428420"
};