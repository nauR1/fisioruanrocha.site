export type QA = { pattern: RegExp; answer: string }

export const CHAT_KNOWLEDGE: QA[] = [
  // Agendamento
  {
    pattern: /agend(o|ar|amento)|marc(a|ar)|consulta/i,
    answer:
      "Para agendar, acesse /agendamento. Você escolhe data e horário e a confirmação é feita pelo WhatsApp. Se preferir, clique em 'Agendar Consulta' no menu.",
  },
  // Contato
  {
    pattern: /telefone|celular|whats|whatsapp/i,
    answer:
      "Telefone/WhatsApp: (75) 9 8848-8287. Também posso retornar via página de agendamento.",
  },
  {
    pattern: /email|e-mail/i,
    answer: "Email: drruanrocha@gmail.com.",
  },
  // Horários
  {
    pattern: /hor[aá]rio|funcionamento|abre|fecha|atendimento/i,
    answer:
      "Horários de atendimento: Segunda a Sexta — 08:00 às 18:00; Sábado — 08:00 às 12:00; Domingo — Fechado.",
  },
  // Locais
  {
    pattern: /local|endere[cç]o|onde/i,
    answer:
      "Atendo em: Espaço Diane Lelis (Cruz das Almas - BA) e Prefeitura Municipal de Taperoá (Taperoá - BA).",
  },
  // Serviços – Ombro
  {
    pattern: /ombro|manguito|tendinite|impacto subacromial|instabilidade/i,
    answer:
      "Reabilitação do Ombro: protocolos baseados em evidências para manguito rotador, tendinites, bursite, impacto subacromial e instabilidade. Foco em recuperação da mobilidade, fortalecimento seguro e retorno ao esporte.",
  },
  // Serviços – Quiropraxia
  {
    pattern: /quiropraxia|ajuste/i,
    answer:
      "Quiropraxia: ajustes articulares para otimizar função, reduzir dores e melhorar desempenho atlético. Inclui manipulação articular e liberação de tecidos moles.",
  },
  // Serviços – Performance Atlética
  {
    pattern: /performance|atleta|treino|funcional/i,
    answer:
      "Performance Atlética: avaliação funcional, prevenção de lesões e otimização do desempenho. Treinamento para retorno seguro ao esporte.",
  },
  // Serviços – Dor Crônica e Fibromialgia
  {
    pattern: /dor cr[oô]nica|fibromialgia|fadiga|sono/i,
    answer:
      "Dor Crônica e Fibromialgia: manejo multidimensional com educação em dor, exercícios terapêuticos, liberação miofascial, auriculoterapia e técnicas de relaxamento.",
  },
  // Técnicas complementares
  {
    pattern: /libera[cç][aã]o miofascial|ventosaterapia|auriculoterapia|pilates|neurofuncional/i,
    answer:
      "Técnicas complementares: Liberação miofascial, Ventosaterapia, Auriculoterapia, Fisioterapia Neurofuncional e Pilates Clássico (quando indicado).",
  },
  // Privacidade
  {
    pattern: /privacidade|dados|lgpd|seguran[cç]a/i,
    answer:
      "Privacidade: usamos seus dados para agendar/confirmar consultas e atendimento adequado, com medidas de segurança e sigilo profissional conforme o Código de Ética da Fisioterapia.",
  },
  // Páginas e navegação
  {
    pattern: /servi[cç]os|tratamentos|o que voc[eê] oferece/i,
    answer:
      "Serviços: Quiropraxia, Reabilitação do Ombro, Performance Atlética, Manejo da Dor Crônica/Fibromialgia e técnicas complementares. Veja em /servicos.",
  },
  {
    pattern: /sobre|quem [eé] o dr\.?|ruan rocha|forma[cç][aã]o/i,
    answer:
      "Sobre: Dr. Ruan Rocha, fisioterapeuta esportivo com formação em Quiropraxia (Instituto HIB, 120h) e manejo da dor crônica (Faculdade Focus, 2024). Atuação em reabilitação do ombro, performance e saúde pública. Acesse /sobre.",
  },
  {
    pattern: /blog|artigos|conte[úu]do/i,
    answer: "Blog com conteúdos educativos: /blog.",
  },
  {
    pattern: /contato|falar direto|entrar em contato/i,
    answer:
      "Contato: WhatsApp (75) 9 8848-8287 e Email drruanrocha@gmail.com. Também há botões de contato no menu.",
  },
  // Ombro (página dedicada)
  {
    pattern: /p[aá]gina do ombro|especial ombro|ombro especial/i,
    answer: "Conteúdos e foco em ombro: /ombro.",
  },
  // Fluxo de agendamento detalhado
  {
    pattern: /como agendar|passo a passo|marcar consulta|agendamento detalhado/i,
    answer:
      "Passo a passo: 1) Acesse /agendamento; 2) Informe nome/contato, escolha serviço e horário; 3) Confirmamos via WhatsApp.",
  },
  // Duração das sessões
  {
    pattern: /dura[cç][aã]o|quanto tempo|tempo de sess[aã]o/i,
    answer:
      "Duração típica: 50–60 minutos por sessão, variando conforme o serviço (ex.: Ombro — 60 min).",
  },
  // WhatsApp e atalhos
  {
    pattern: /whatsapp|mensagem|falar direto/i,
    answer:
      "Use o WhatsApp (75) 9 8848-8287 ou o botão 'Agendar Consulta' no menu para mensagem automática.",
  },
  // Perguntas gerais
  {
    pattern: /pre[cç]o|valor|conv[eê]nio|plano de sa[úu]de/i,
    answer:
      "Valores e convênios: orientações são dadas na avaliação inicial, conforme necessidade e serviço.",
  },
]

export function localAnswer(userText: string): string {
  for (const item of CHAT_KNOWLEDGE) {
    if (item.pattern.test(userText)) return item.answer
  }
  return (
    "Posso ajudar com: Agendamento (/agendamento), Serviços (/servicos) — Ombro, Quiropraxia, Performance, Dor Crônica; Contato — WhatsApp (75) 9 8848-8287 e Email drruanrocha@gmail.com; Horários — Seg-Sex 08:00-18:00, Sáb 08:00-12:00; Locais — Cruz das Almas e Taperoá; Sobre — formação e atuação em fisioterapia esportiva. O que você precisa?"
  )
}