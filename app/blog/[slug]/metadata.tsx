import type { Metadata } from "next"

// This would typically come from a CMS or database
const blogPosts: Record<string, any> = {
  "lesoes-manguito-rotador-atletas": {
    title: "Lesões do Manguito Rotador em Atletas: Prevenção e Tratamento",
    excerpt:
      "Entenda como prevenir e tratar as lesões mais comuns do ombro em atletas de alto rendimento, com protocolos baseados em evidências científicas.",
    category: "Reabilitação do Ombro",
    date: "15 de Janeiro, 2025",
    readTime: "8 min",
    image: "/blog-shoulder-injury-prevention-athletes.jpg",
    author: "Dr. Ruan Rocha",
    content: `
      <p>O manguito rotador é um conjunto de quatro músculos e tendões que estabilizam a articulação do ombro. Em atletas, especialmente aqueles que praticam esportes com movimentos repetitivos acima da cabeça, as lesões do manguito rotador são extremamente comuns.</p>

      <h2>Anatomia do Manguito Rotador</h2>
      <p>O manguito rotador é composto por quatro músculos:</p>
      <ul>
        <li><strong>Supraespinhal:</strong> Responsável pela abdução inicial do ombro</li>
        <li><strong>Infraespinhal:</strong> Rotação externa do ombro</li>
        <li><strong>Redondo Menor:</strong> Auxilia na rotação externa</li>
        <li><strong>Subescapular:</strong> Rotação interna do ombro</li>
      </ul>

      <h2>Causas Comuns de Lesões</h2>
      <p>As lesões do manguito rotador em atletas geralmente ocorrem por:</p>
      <ul>
        <li>Movimentos repetitivos acima da cabeça (natação, vôlei, tênis)</li>
        <li>Sobrecarga progressiva sem recuperação adequada</li>
        <li>Desequilíbrios musculares e déficits de mobilidade</li>
        <li>Traumas agudos em esportes de contato</li>
        <li>Má técnica de execução dos movimentos</li>
      </ul>

      <h2>Sinais e Sintomas</h2>
      <p>Fique atento aos seguintes sinais:</p>
      <ul>
        <li>Dor ao levantar o braço acima da cabeça</li>
        <li>Fraqueza progressiva no ombro</li>
        <li>Dor noturna que interfere no sono</li>
        <li>Crepitação ou estalos durante o movimento</li>
        <li>Limitação da amplitude de movimento</li>
      </ul>

      <h2>Prevenção</h2>
      <p>A prevenção é fundamental para atletas:</p>
      <ul>
        <li><strong>Fortalecimento equilibrado:</strong> Trabalhe todos os músculos do ombro, não apenas os grandes grupos</li>
        <li><strong>Mobilidade adequada:</strong> Mantenha boa amplitude de movimento em todas as direções</li>
        <li><strong>Técnica correta:</strong> Aprenda e execute os movimentos com técnica adequada</li>
        <li><strong>Progressão gradual:</strong> Aumente cargas e volumes de treino progressivamente</li>
        <li><strong>Recuperação adequada:</strong> Respeite os períodos de descanso entre treinos</li>
      </ul>

      <h2>Tratamento</h2>
      <p>O tratamento das lesões do manguito rotador segue um protocolo progressivo:</p>
      
      <h3>Fase 1: Controle da Dor (1-2 semanas)</h3>
      <ul>
        <li>Modificação de atividades</li>
        <li>Terapia manual para redução da dor</li>
        <li>Educação sobre a lesão</li>
        <li>Exercícios pendulares suaves</li>
      </ul>

      <h3>Fase 2: Recuperação da Mobilidade (2-4 semanas)</h3>
      <ul>
        <li>Mobilizações articulares</li>
        <li>Alongamentos específicos</li>
        <li>Exercícios de amplitude de movimento</li>
        <li>Liberação miofascial</li>
      </ul>

      <h3>Fase 3: Fortalecimento (4-8 semanas)</h3>
      <ul>
        <li>Exercícios isométricos progredindo para isotônicos</li>
        <li>Fortalecimento do manguito rotador</li>
        <li>Estabilização escapular</li>
        <li>Controle neuromuscular</li>
      </ul>

      <h3>Fase 4: Retorno ao Esporte (2-4 semanas)</h3>
      <ul>
        <li>Exercícios específicos do esporte</li>
        <li>Treinamento de potência</li>
        <li>Simulação de gestos esportivos</li>
        <li>Progressão gradual de carga e intensidade</li>
      </ul>

      <h2>Quando Procurar Ajuda</h2>
      <p>Procure um fisioterapeuta especializado se você apresentar:</p>
      <ul>
        <li>Dor persistente por mais de 2 semanas</li>
        <li>Fraqueza significativa no ombro</li>
        <li>Limitação importante de movimento</li>
        <li>Dor que interfere nas atividades diárias</li>
        <li>Histórico de lesões recorrentes</li>
      </ul>

      <h2>Conclusão</h2>
      <p>As lesões do manguito rotador são comuns em atletas, mas com prevenção adequada e tratamento especializado, é possível retornar ao esporte com segurança e performance. O acompanhamento de um fisioterapeuta especializado em esportes é fundamental para um tratamento eficaz e prevenção de recidivas.</p>

      <p>Se você está com dor no ombro ou quer prevenir lesões, agende uma avaliação para desenvolvermos um plano personalizado para suas necessidades.</p>
    `,
  },
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts[params.slug]

  if (!post) {
    return {
      title: "Post não encontrado",
    }
  }

  return {
    title: `${post.title} | Blog Ruan Rocha`,
    description: post.excerpt,
  }
}
