// Dados do negócio: edite aqui e a página inteira atualiza.
export const site = {
  nome: 'Britol Protection',
  whatsapp: '5511961303557', // DDI + DDD + número, só dígitos
  whatsappVisivel: '(11) 96130-3557',
  instagram: 'https://www.instagram.com/britolprotection/',
  cidade: 'São Paulo – SP',
  garantiaAnos: 10,
  parcelas: 12,
};

// Link do WhatsApp com a mensagem já escrita (encodeURIComponent evita quebrar acentos e espaços).
export const wa = (mensagem = 'Olá! Vim pelo site e quero um orçamento.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;
