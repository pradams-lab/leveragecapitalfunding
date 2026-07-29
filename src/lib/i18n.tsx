import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "pt" | "en";

export const PHONE = "+1 (774) 205-5547";
export const PHONE_HREF = "tel:+17742055547";

const dictionaries = {
  pt: {
    langLabel: "PT-BR",
    nav: {
      about: "Sobre Nós",
      how: "Como Funciona",
      calculator: "Simulador",
      testimonials: "Depoimentos",
      contact: "Contato",
      home: "Início",
      cta: "Solicitar Capital Agora",
      ctaShort: "Solicitar Capital",
      menu: "Menu",
    },
    hero: {
      bbb: "BBB Accredited Business",
      google: "4,9/5 em avaliações verificadas",
      phoneTab: "Atendimento Direto",
      headline: "Capital de Giro Rápido e Sem Burocracia para o seu Negócio.",
      sub: "Transformamos o seu faturamento futuro em liquidez imediata. Sem burocracia bancária tradicional, sem perda de tempo. O combustível financeiro que a sua empresa precisa para escalar no mercado.",
      primary: "Simular Meu Adiantamento",
      secondary: "Falar com Especialista",
      panelTitle: "Pré-análise instantânea",
      panelStatus: "Aprovação estimada",
      panelAmount: "Valor liberado",
      panelTerm: "Prazo",
      panelTermValue: "12 meses",
      panelRelease: "Liberação",
      panelReleaseValue: "Até 24 horas",
      panelNote: "Simulação ilustrativa. Sujeita à análise de crédito.",
    },
    ticker: [
      "+R$ 50 Milhões injetados em empresas parceiras",
      "Aprovações e liberação em até 24 horas",
      "Transações 100% criptografadas e seguras",
      "Sem perda de equity ou participação societária",
    ],
    about: {
      tag: "Sobre a Leverage Capital Funding",
      headline:
        "Linhas de crédito direto ao ponto. Feito por quem entende de negócios, para empresários que não têm tempo a perder.",
      body1:
        "Sabemos como funciona a realidade de gerenciar o fluxo de caixa. Bancos tradicionais exigem pilhas de papelaria, semanas de espera e oferecem zero flexibilidade. Nós mudamos essa regra.",
      body2:
        "Criamos uma estrutura de financiamento moderna e direta voltada para empresários que falam português e precisam de agilidade real. Sem letras miúdas, sem promessas falsas. Apenas capital limpo, rápido e estruturado para impulsionar o seu crescimento.",
      link: "Conheça nossa estrutura",
      stats: [
        { value: "24h", label: "Liberação dos fundos" },
        { value: "0%", label: "Perda de equity" },
        { value: "R$ 50M+", label: "Capital injetado" },
      ],
    },
    how: {
      tag: "Como Funciona",
      headline: "Três passos simples entre o seu fluxo atual e o capital na sua conta.",
      link: "Ver explicação técnica completa",
      cards: [
        {
          title: "Envie seus dados e histórico de faturamento",
          desc: "Preencha nosso formulário seguro com informações básicas e os dados de recebíveis do seu negócio. Sem papelada física.",
        },
        {
          title: "Análise rápida e proposta transparente",
          desc: "Nossa equipe analisa o seu perfil e o volume de transações em até poucas horas, apresentando uma oferta clara e sem taxas ocultas.",
        },
        {
          title: "Fundos liberados em até 24h",
          desc: "Com a proposta aceita, o capital é depositado diretamente na conta da sua empresa para você usar onde for mais urgente.",
        },
      ],
    },
    calc: {
      tag: "Simulador de Antecipação",
      headline: "Simule o valor ideal para o momento da sua empresa.",
      sub: "Arraste os seletores abaixo para estimar o montante de capital de giro e o plano de retorno adequado ao seu fluxo de caixa.",
      amount: "Valor Desejado",
      term: "Prazo de Retorno",
      months: "meses",
      release: "Estimativa de Liberação",
      releaseValue: "Em até 24 Horas",
      rate: "Taxa Competitiva & Transparente",
      installment: "Retorno estimado (mensal)",
      total: "Total estimado de retorno",
      cta: "Garantir Esta Proposta",
      disclaimer:
        "Valores meramente ilustrativos. A proposta final é definida após análise de recebíveis.",
    },
    testimonials: {
      tag: "Histórias de Sucesso",
      headline: "Empresários que aceleraram seus negócios com a nossa parceria.",
      verified: "Avaliação verificada",
      items: [
        {
          quote:
            "Precisávamos de capital rápido para repor estoque antes da alta temporada. Os bancos queriam 30 dias de análise. A Leverage liberou o recurso em um dia útil. Salvou nossa operação.",
          author: "Carlos M.",
          role: "Fundador de Empresa de Logística & Varejo",
        },
        {
          quote:
            "A transparência é real. O que foi combinado na proposta foi exatamente o que caiu na conta, sem surpresas desagradáveis nas taxas. Recomendo demais para quem precisa de fluxo.",
          author: "Mariana S.",
          role: "CEO de Rede de Serviços",
        },
      ],
    },
    form: {
      tag: "Pronto para escalar?",
      headline: "Solicite sua proposta de capital agora mesmo.",
      sub: "Preencha os campos abaixo. Nossa equipe entrará em contato em menos de 2 horas para estruturar o seu adiantamento.",
      name: "Nome Completo",
      company: "Nome da Empresa",
      email: "E-mail Corporativo",
      phone: "Telefone / WhatsApp",
      revenue: "Faturamento Médio Mensal (Estimado)",
      security:
        "Dados protegidos por criptografia de ponta a ponta. Sua privacidade é nossa prioridade.",
      submit: "Enviar Solicitação Confidencial",
      success: "Solicitação enviada. Nossa equipe entrará em contato em menos de 2 horas.",
      required: "Campo obrigatório",
      invalidEmail: "E-mail inválido",
    },
    footer: {
      tagline: "Soluções financeiras de alta performance para o mercado corporativo.",
      directLine: "Linha Direta",
      links: "Links Rápidos",
      trust: "Confiança & Selos",
      bbb: "BBB Accredited Seal",
      google: "Google Verified Partner",
      disclaimer:
        "© 2026 Leverage Capital Funding. Todos os direitos reservados. Os serviços de adiantamento de recebíveis e financiamento estão sujeitos à análise de crédito, verificação de conformidade e termos contratuais aplicáveis.",
    },
    aboutPage: {
      tag: "Quem Somos",
      headline: "Infraestrutura financeira sólida para empresas que movem o mercado.",
      sub: "Nascemos para eliminar a burocracia arcaica dos bancos tradicionais e entregar liquidez real com total transparência.",
      missionHeadline: "O fim da burocracia bancária para quem quer crescer de verdade.",
      missionBody1:
        "Gerenciar uma empresa exige velocidade, e o fluxo de caixa não pode esperar semanas por uma resposta de instituições tradicionais. A Leverage Capital Funding foi estruturada sob um princípio simples: eliminar o atrito entre o empresário e o capital de giro que ele já conquistou através das suas vendas.",
      missionBody2:
        "Para a comunidade de empresários de língua portuguesa, oferecemos um canal direto, seguro e desburocratizado. Não vendemos promessas complexas; entregamos engenharia financeira limpa, contratos transparentes e parcerias de longo prazo baseadas em resultados.",
      pillarsTag: "Nossos Pilares",
      pillars: [
        {
          title: "Transparência Absoluta",
          desc: "Sem taxas ocultas, sem letras miúdas. O que é acordado no contrato é exatamente o que é executado.",
        },
        {
          title: "Agilidade Operacional",
          desc: "Processos otimizados para garantir liquidez em até 24 horas, acompanhando o ritmo dinâmico do seu negócio.",
        },
        {
          title: "Foco no Empresário",
          desc: "Respeitamos o seu tempo e o seu patrimônio. Nossas soluções protegem a sua participação societária (equity) integralmente.",
        },
      ],
    },
    howPage: {
      tag: "Explicação Técnica do Processo",
      headline:
        "O que é o Adiantamento de Recebíveis (MCA) e por que ele é superior ao empréstimo tradicional.",
      sub: "Entenda como transformamos o seu faturamento futuro em capital imediato, sem endividar a estrutura do seu negócio com juros compostos abusivos.",
      deepHeadline:
        "Flexibilidade atrelada ao seu faturamento real, não a garantias físicas pesadas.",
      deepBody:
        "Diferente de um empréstimo bancário tradicional — que exige bens imobiliários como garantia, meses de análise burocrática e parcelas fixas que sufocam o caixa em meses de baixa — o Merchant Cash Advance (MCA) funciona como uma compra antecipada de futuros recebíveis de cartões ou faturas.",
      bullets: [
        {
          title: "Sem Garantia Física",
          desc: "O risco é avaliado pelo desempenho comercial da sua empresa, e não por hipotecas de imóveis ou maquinário.",
        },
        {
          title: "Pagamento Proporcional",
          desc: "O retorno do capital é flexibilizado de acordo com o movimento do seu faturamento, protegendo o fôlego diário da operação.",
        },
      ],
      stepsTag: "Etapas Técnicas",
      steps: [
        {
          title: "Etapa 01 — Submissão de Dados",
          desc: "O cliente envia os extratos de faturamento recentes através de nosso portal criptografado.",
        },
        {
          title: "Etapa 02 — Análise de Risco Algorítmica & Humana",
          desc: "Nossa equipe analisa o volume de transações comerciais para estruturar a oferta de capital ideal.",
        },
        {
          title: "Etapa 03 — Contrato e Desembolso",
          desc: "Assinatura digital segura e liberação direta dos fundos na conta corporativa em até 24 horas.",
        },
      ],
      ctaHeadline: "Pronto para estruturar o capital da sua empresa?",
      ctaButton: "Falar com Especialista Agora",
    },
    common: {
      back: "Voltar para a Home",
    },
  },
  en: {
    langLabel: "EN",
    nav: {
      about: "About Us",
      how: "How It Works",
      calculator: "Calculator",
      testimonials: "Testimonials",
      contact: "Contact",
      home: "Home",
      cta: "Request Capital Now",
      ctaShort: "Request Capital",
      menu: "Menu",
    },
    hero: {
      bbb: "BBB Accredited Business",
      google: "4.9/5 from verified reviews",
      phoneTab: "Direct Line",
      headline: "Fast Working Capital, Zero Bureaucracy, for Your Business.",
      sub: "We turn your future revenue into immediate liquidity. No traditional banking red tape, no wasted time. The financial fuel your company needs to scale.",
      primary: "Simulate My Advance",
      secondary: "Talk to a Specialist",
      panelTitle: "Instant pre-analysis",
      panelStatus: "Estimated approval",
      panelAmount: "Amount funded",
      panelTerm: "Term",
      panelTermValue: "12 months",
      panelRelease: "Funding",
      panelReleaseValue: "Within 24 hours",
      panelNote: "Illustrative simulation. Subject to credit analysis.",
    },
    ticker: [
      "+R$ 50 Million deployed into partner companies",
      "Approval and funding within 24 hours",
      "100% encrypted and secure transactions",
      "No equity or ownership dilution",
    ],
    about: {
      tag: "About Leverage Capital Funding",
      headline:
        "Straight-to-the-point credit lines. Built by operators, for business owners with no time to waste.",
      body1:
        "We know what managing cash flow really looks like. Traditional banks demand stacks of paperwork, weeks of waiting, and offer zero flexibility. We changed that rule.",
      body2:
        "We built a modern, direct funding structure for Portuguese-speaking entrepreneurs who need real speed. No fine print, no false promises. Just clean, fast capital structured to drive your growth.",
      link: "See our structure",
      stats: [
        { value: "24h", label: "Funds released" },
        { value: "0%", label: "Equity given up" },
        { value: "R$ 50M+", label: "Capital deployed" },
      ],
    },
    how: {
      tag: "How It Works",
      headline: "Three simple steps between your current flow and capital in your account.",
      link: "Read the full technical breakdown",
      cards: [
        {
          title: "Send your data and revenue history",
          desc: "Fill out our secure form with basic information and your business receivables data. No physical paperwork.",
        },
        {
          title: "Fast analysis and a transparent offer",
          desc: "Our team reviews your profile and transaction volume within hours, presenting a clear offer with no hidden fees.",
        },
        {
          title: "Funds released within 24h",
          desc: "Once the offer is accepted, capital is deposited directly into your company account to use where it matters most.",
        },
      ],
    },
    calc: {
      tag: "Advance Calculator",
      headline: "Simulate the right amount for your company's current moment.",
      sub: "Drag the sliders below to estimate the working capital amount and the repayment plan that fits your cash flow.",
      amount: "Requested Amount",
      term: "Repayment Term",
      months: "months",
      release: "Estimated Funding",
      releaseValue: "Within 24 Hours",
      rate: "Competitive & Transparent Rate",
      installment: "Estimated monthly remittance",
      total: "Estimated total repayment",
      cta: "Lock In This Offer",
      disclaimer:
        "Figures are illustrative only. The final offer is defined after receivables analysis.",
    },
    testimonials: {
      tag: "Success Stories",
      headline: "Business owners who accelerated their growth with our partnership.",
      verified: "Verified review",
      items: [
        {
          quote:
            "We needed fast capital to restock before high season. Banks wanted 30 days of analysis. Leverage funded us in one business day. It saved our operation.",
          author: "Carlos M.",
          role: "Founder, Logistics & Retail Company",
        },
        {
          quote:
            "The transparency is real. What was agreed in the offer was exactly what hit the account, with no unpleasant surprises on fees. Highly recommended for anyone who needs cash flow.",
          author: "Mariana S.",
          role: "CEO, Services Network",
        },
      ],
    },
    form: {
      tag: "Ready to scale?",
      headline: "Request your capital offer right now.",
      sub: "Fill in the fields below. Our team will reach out in under 2 hours to structure your advance.",
      name: "Full Name",
      company: "Company Name",
      email: "Business Email",
      phone: "Phone / WhatsApp",
      revenue: "Average Monthly Revenue (Estimated)",
      security: "Data protected by end-to-end encryption. Your privacy is our priority.",
      submit: "Send Confidential Request",
      success: "Request sent. Our team will contact you in under 2 hours.",
      required: "Required field",
      invalidEmail: "Invalid email",
    },
    footer: {
      tagline: "High-performance financial solutions for the corporate market.",
      directLine: "Direct Line",
      links: "Quick Links",
      trust: "Trust & Badges",
      bbb: "BBB Accredited Seal",
      google: "Google Verified Partner",
      disclaimer:
        "© 2026 Leverage Capital Funding. All rights reserved. Receivables advance and funding services are subject to credit analysis, compliance verification and applicable contractual terms.",
    },
    aboutPage: {
      tag: "Who We Are",
      headline: "Solid financial infrastructure for companies that move the market.",
      sub: "We exist to eliminate the archaic bureaucracy of traditional banks and deliver real liquidity with total transparency.",
      missionHeadline: "The end of banking bureaucracy for those who want to truly grow.",
      missionBody1:
        "Running a company demands speed, and cash flow cannot wait weeks for an answer from traditional institutions. Leverage Capital Funding was structured on a simple principle: eliminate the friction between the business owner and the working capital they already earned through their sales.",
      missionBody2:
        "For the Portuguese-speaking business community, we offer a direct, secure and bureaucracy-free channel. We do not sell complex promises; we deliver clean financial engineering, transparent contracts and long-term partnerships based on results.",
      pillarsTag: "Our Pillars",
      pillars: [
        {
          title: "Absolute Transparency",
          desc: "No hidden fees, no fine print. What is agreed in the contract is exactly what is executed.",
        },
        {
          title: "Operational Speed",
          desc: "Optimized processes to guarantee liquidity within 24 hours, matching the dynamic pace of your business.",
        },
        {
          title: "Owner-First Focus",
          desc: "We respect your time and your assets. Our solutions fully protect your equity ownership.",
        },
      ],
    },
    howPage: {
      tag: "Technical Process Breakdown",
      headline:
        "What a Merchant Cash Advance (MCA) is, and why it outperforms a traditional loan.",
      sub: "Understand how we turn your future revenue into immediate capital, without loading your business structure with abusive compound interest.",
      deepHeadline: "Flexibility tied to your real revenue, not to heavy physical collateral.",
      deepBody:
        "Unlike a traditional bank loan — which requires real estate as collateral, months of bureaucratic analysis and fixed installments that suffocate cash in slow months — the Merchant Cash Advance (MCA) works as an upfront purchase of future card receivables or invoices.",
      bullets: [
        {
          title: "No Physical Collateral",
          desc: "Risk is assessed by your company's commercial performance, not by mortgages on property or machinery.",
        },
        {
          title: "Proportional Repayment",
          desc: "Capital repayment flexes according to your revenue movement, protecting the daily breathing room of the operation.",
        },
      ],
      stepsTag: "Technical Steps",
      steps: [
        {
          title: "Step 01 — Data Submission",
          desc: "The client submits recent revenue statements through our encrypted portal.",
        },
        {
          title: "Step 02 — Algorithmic & Human Risk Analysis",
          desc: "Our team analyses commercial transaction volume to structure the ideal capital offer.",
        },
        {
          title: "Step 03 — Contract and Disbursement",
          desc: "Secure digital signature and direct release of funds into the corporate account within 24 hours.",
        },
      ],
      ctaHeadline: "Ready to structure your company's capital?",
      ctaButton: "Talk to a Specialist Now",
    },
    common: {
      back: "Back to Home",
    },
  },
} as const;

export type Dict = (typeof dictionaries)["pt"];

type Ctx = { lang: Lang; t: Dict; setLang: (l: Lang) => void; toggle: () => void };

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "lcf-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "pt") setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      t: dictionaries[lang] as Dict,
      setLang,
      toggle: () => setLang(lang === "pt" ? "en" : "pt"),
    }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}

export function formatBRL(value: number, lang: Lang) {
  return new Intl.NumberFormat(lang === "pt" ? "pt-BR" : "en-US", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
}
