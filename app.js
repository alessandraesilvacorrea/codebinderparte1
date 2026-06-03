const STORAGE_KEY = "codebinder-progress-v1";

const CATEGORY_ORDER = [
  "pensamento",
  "fundamentos",
  "programacao",
  "estruturas",
  "redes",
  "seguranca",
  "ia",
];

const CATEGORY_LABELS = {
  pt: {
    todos: "Todas",
    pensamento: "Pensamento Computacional",
    fundamentos: "Fundamentos",
    programacao: "Programação",
    estruturas: "Estruturas de Dados",
    redes: "Redes e Internet",
    seguranca: "Segurança",
    ia: "Inteligência Artificial",
  },
  en: {
    todos: "All",
    pensamento: "Computational Thinking",
    fundamentos: "Foundations",
    programacao: "Programming",
    estruturas: "Data Structures",
    redes: "Networks and Internet",
    seguranca: "Security",
    ia: "Artificial Intelligence",
  },
};

const BINDER_CATEGORY_ITEMS = {
  pensamento: ["algoritmo", "decomposicao", "reconhecimento-padroes", "abstracao"],
  fundamentos: ["dados", "informacao", "algoritmo", "variavel"],
  programacao: ["funcao", "condicional", "loop", "operador"],
  estruturas: ["vetor", "lista", "pilha", "fila", "arvore", "grafo"],
  redes: ["cliente", "servidor", "ip", "protocolo"],
  seguranca: ["criptografia", "hash", "autenticacao"],
  ia: ["inteligencia-artificial", "machine-learning", "rede-neural", "pln"],
};

const BINDER_CARD_IDS = [...new Set(Object.values(BINDER_CATEGORY_ITEMS).flat())];

const INITIAL_CONCEPTS = [
  "problema",
  "dados",
  "informacao",
  "sequencia",
  "decisao",
  "repeticao",
  "entrada",
  "saida",
];

const LEVEL_ORDER = ["inicio", "meio", "fim"];

const LEVELS = {
  inicio: {
    unlock: [],
    boardIds: [
      ...INITIAL_CONCEPTS,
      "algoritmo",
      "decomposicao",
      "reconhecimento-padroes",
      "abstracao",
      "organizacao",
      "armazenamento",
      "variavel",
      "comunicacao",
    ],
    goals: ["algoritmo", "variavel", "comunicacao"],
    pt: {
      name: "Fase 1",
      rhythm: "Guiado",
      objective: "Aprender a conectar polaroids e descobrir os pilares do Pensamento Computacional.",
      flow: "Tutorial -> Pensamento Computacional -> Fundamentos -> Fichário desbloqueado",
    },
    en: {
      name: "Phase 1",
      rhythm: "Guided",
      objective: "Learn how to connect polaroids and discover the pillars of Computational Thinking.",
      flow: "Tutorial -> Computational Thinking -> Foundations -> Binder unlocked",
    },
  },
  meio: {
    unlock: ["algoritmo", "variavel", "comunicacao"],
    boardIds: [
      ...INITIAL_CONCEPTS,
      "algoritmo",
      "decomposicao",
      "reconhecimento-padroes",
      "abstracao",
      "variavel",
      "organizacao",
      "armazenamento",
      "condicional",
      "loop",
      "funcao",
      "operador",
      "vetor",
      "lista",
      "estrutura-dados",
      "fila",
      "pilha",
      "recursao",
      "modularizacao",
      "ordenacao",
      "busca-binaria",
    ],
    goals: ["condicional", "loop", "funcao", "vetor", "lista"],
    pt: {
      name: "Fase 2",
      rhythm: "Moderado",
      objective: "Usar descobertas anteriores para montar programação e estruturas.",
      flow: "Fundamentos -> Programação -> Estruturas de Dados",
    },
    en: {
      name: "Phase 2",
      rhythm: "Moderate",
      objective: "Use previous discoveries to build programming and structures.",
      flow: "Foundations -> Programming -> Data Structures",
    },
  },
  fim: {
    unlock: ["loop", "funcao", "estrutura-dados"],
    boardIds: [
      ...INITIAL_CONCEPTS,
      "algoritmo",
      "decomposicao",
      "reconhecimento-padroes",
      "abstracao",
      "variavel",
      "comunicacao",
      "loop",
      "funcao",
      "recursao",
      "estrutura-dados",
      "lista",
      "ordenacao",
      "arvore",
      "grafo",
      "protocolo",
      "cliente",
      "servidor",
      "ip",
      "hash",
      "criptografia",
      "autenticacao",
      "probabilidade",
      "aprendizado",
      "inteligencia-artificial",
      "machine-learning",
      "rede-neural",
      "pln",
      "computacao-quantica",
      "ciencia-dados",
    ],
    goals: ["arvore", "grafo", "protocolo", "criptografia", "machine-learning"],
    pt: {
      name: "Fase 3",
      rhythm: "Desafiador",
      objective: "Conectar conceitos avançados, completar badges e chegar em IA.",
      flow: "Estruturas -> Redes e Segurança -> Inteligência Artificial",
    },
    en: {
      name: "Phase 3",
      rhythm: "Challenging",
      objective: "Connect advanced concepts, complete badges, and reach AI.",
      flow: "Structures -> Networks and Security -> Artificial Intelligence",
    },
  },
};

const BADGE_META = {
  pensamento: {
    icon: "PC",
    pt: { name: "Pensadora Computacional" },
    en: { name: "Computational Thinker" },
  },
  fundamentos: {
    icon: "01",
    pt: { name: "Base da Computação" },
    en: { name: "Computing Basics" },
  },
  programacao: {
    icon: "FN",
    pt: { name: "Lógica Programadora" },
    en: { name: "Programming Logic" },
  },
  estruturas: {
    icon: "DS",
    pt: { name: "Coleção Estruturada" },
    en: { name: "Structured Collection" },
  },
  redes: {
    icon: "IP",
    pt: { name: "Conexão Global" },
    en: { name: "Global Connection" },
  },
  seguranca: {
    icon: "#",
    pt: { name: "Guardiã da Segurança" },
    en: { name: "Security Guardian" },
  },
  ia: {
    icon: "AI",
    pt: { name: "Mente Artificial" },
    en: { name: "Artificial Mind" },
  },
};

const RARITY = {
  comum: { stars: 1, pt: "Comum", en: "Common" },
  incomum: { stars: 2, pt: "Incomum", en: "Uncommon" },
  rara: { stars: 3, pt: "Rara", en: "Rare" },
  epica: { stars: 4, pt: "Épica", en: "Epic" },
  lendaria: { stars: 5, pt: "Lendária", en: "Legendary" },
};

const UI = {
  pt: {
    kicker: "Você está entrando na minha zona de supremacia da computação",
    menuTitle: "Code Binder",
    menuCopy:
      "Combine polaroids de conceitos, descubra cartas educativas e complete um binder de Computação com raridades, exemplos e curiosidades.",
    play: "Jogar",
    options: "Opções",
    credits: "Créditos",
    backMenu: "Menu",
    binder: "Binder",
    lab: "Lab IA",
    progress: "Progresso",
    discovered: "Descobertas",
    attempts: "Tentativas",
    streak: "Sequência",
    deck: "Deck",
    tutorial: "Tutorial",
    tutorialDoneTitle: "Diário CodeBinder aberto",
    tutorialDone:
      "Agora as cartas ficam registradas no binder por categoria. Use as descobertas novas para alcançar conceitos mais avançados.",
    combineHint: "Escolha duas polaroids ou arraste uma sobre a outra.",
    feedbackIdle:
      "A mesa está pronta. Combine dois conceitos para descobrir relações da Computação.",
    successNew: "Nova carta descoberta",
    successKnown: "Carta já descoberta",
    missTitle: "Ainda não há relação",
    missBody:
      "Essa combinação não gerou uma carta conhecida. Teste outra dupla ou observe as categorias do binder.",
    sameCard: "Use duas polaroids diferentes para combinar.",
    allCards: "Cartas no binder",
    binderBookTitle: "Fichário de Photocards",
    binderBookHint: "Cada categoria é uma página do binder.",
    binderLockedTitle: "Fichário bloqueado",
    binderLockedBody: "Faça a primeira conexão correta de polaroids para abrir seu fichário de photocards.",
    binderUnlockedTitle: "Fichário desbloqueado",
    binderUnlockedBody:
      "Você fez sua primeira conexão! Agora pode abrir seu fichário de photocards pelo botão Binder.",
    badgesTitle: "Badges da coleção",
    badgesHint: "Complete uma página do Binder para ganhar o badge dela.",
    badgeLocked: "Bloqueado",
    badgeEarnedTitle: "Badge conquistado",
    badgeEarnedBody: "Você completou esta coleção:",
    cardDetails: "Detalhes da carta",
    flipCard: "Virar carta",
    viewBack: "Ver verso",
    viewFront: "Ver frente",
    frontSide: "Frente",
    backSide: "Verso",
    selectedCards: "Selecionadas",
    selectionEmpty: "Escolha uma polaroid para iniciar uma conexão.",
    selectionOne: "Escolha a segunda polaroid para testar a conexão.",
    selectionReady: "Conectando automaticamente...",
    clearSelection: "Limpar seleção",
    levelDesign: "Level Design",
    phaseObjective: "Objetivo",
    phaseRhythm: "Ritmo",
    playerFlow: "Fluxo",
    phaseProgress: "progresso da fase",
    lockedLevel: "Fase bloqueada",
    lockedLevelBody: "Complete os objetivos anteriores para desbloquear esta fase.",
    pageLabel: "Página",
    savedCards: "photocards guardados",
    prevPage: "Página anterior",
    nextPage: "Próxima página",
    emptyCategory:
      "Nenhuma carta desta categoria foi descoberta ainda. Continue combinando conceitos.",
    lockedSlot: "Espaço reservado para uma futura descoberta.",
    definition: "Descrição",
    example: "Exemplo",
    curiosity: "Curiosidade",
    category: "Categoria",
    rarity: "Raridade",
    optionMusic: "Música",
    optionMusicDesc: "Liga ou desliga a trilha gerada pelo navegador.",
    optionLanguage: "Idioma",
    optionLanguageDesc: "Alterna a interface entre português e inglês.",
    optionReset: "Reiniciar progresso",
    optionResetDesc: "Volta para as cartas básicas e refaz o tutorial.",
    reset: "Reiniciar",
    resetDone: "Progresso reiniciado.",
    close: "Fechar",
    creditsCourse: "Disciplina",
    creditsCourseValue: "Oficina de Desenvolvimento de Software Educacional I",
    creditsStudent: "Desenvolvido por",
    creditsStudentValue: "Alessandra e Silva Corrêa",
    creditsArea: "Área",
    creditsAreaValue: "Matemática e suas Tecnologias / Computação",
    creditsBncc: "BNCC",
    creditsBnccValue:
      "Competência Geral 5: compreender, utilizar e criar tecnologias digitais de forma crítica, significativa, reflexiva e ética.",
    specialLockedTitle: "Laboratório de IA bloqueado",
    specialLocked:
      "Descubra Machine Learning para abrir um modo especial com combinações focadas em Inteligência Artificial.",
    specialUnlockedTitle: "Laboratório de IA desbloqueado",
    specialUnlocked:
      "Use Machine Learning, grafos, dados e informação para formar várias cartas de IA.",
    openSpecial: "Abrir Lab",
    fullBinder: "Binder completo",
    fullBinderBody:
      "Todas as cartas foram descobertas. Você completou a coleção de conceitos computacionais.",
    recipe: "Combinação",
    nextTutorial: "Faça esta dupla",
  },
  en: {
    kicker: "You are entering my computing supremacy zone",
    menuTitle: "Code Binder",
    menuCopy:
      "Combine concept polaroids, discover educational cards, and complete a Computing binder with rarities, examples, and fun facts.",
    play: "Play",
    options: "Options",
    credits: "Credits",
    backMenu: "Menu",
    binder: "Binder",
    lab: "AI Lab",
    progress: "Progress",
    discovered: "Discovered",
    attempts: "Attempts",
    streak: "Streak",
    deck: "Deck",
    tutorial: "Tutorial",
    tutorialDoneTitle: "CodeBinder diary opened",
    tutorialDone:
      "Now cards are saved in the binder by category. Use new discoveries to reach advanced concepts.",
    combineHint: "Choose two polaroids or drag one over another.",
    feedbackIdle:
      "The table is ready. Combine two concepts to discover Computing relationships.",
    successNew: "New card discovered",
    successKnown: "Card already discovered",
    missTitle: "No relation yet",
    missBody:
      "This combination did not create a known card. Try another pair or check the binder categories.",
    sameCard: "Use two different polaroids to combine.",
    allCards: "Cards in binder",
    binderBookTitle: "Photocard Binder",
    binderBookHint: "Each category is one binder page.",
    binderLockedTitle: "Binder locked",
    binderLockedBody: "Make the first correct polaroid connection to open your photocard binder.",
    binderUnlockedTitle: "Binder unlocked",
    binderUnlockedBody:
      "You made your first connection! Now you can open your photocard binder from the Binder button.",
    badgesTitle: "Collection badges",
    badgesHint: "Complete a Binder page to earn its badge.",
    badgeLocked: "Locked",
    badgeEarnedTitle: "Badge earned",
    badgeEarnedBody: "You completed this collection:",
    cardDetails: "Card details",
    flipCard: "Flip card",
    viewBack: "View back",
    viewFront: "View front",
    frontSide: "Front",
    backSide: "Back",
    selectedCards: "Selected",
    selectionEmpty: "Choose a polaroid to start a connection.",
    selectionOne: "Choose the second polaroid to test the connection.",
    selectionReady: "Connecting automatically...",
    clearSelection: "Clear selection",
    levelDesign: "Level Design",
    phaseObjective: "Objective",
    phaseRhythm: "Rhythm",
    playerFlow: "Flow",
    phaseProgress: "phase progress",
    lockedLevel: "Level locked",
    lockedLevelBody: "Complete the previous objectives to unlock this level.",
    pageLabel: "Page",
    savedCards: "photocards saved",
    prevPage: "Previous page",
    nextPage: "Next page",
    emptyCategory:
      "No card from this category has been discovered yet. Keep combining concepts.",
    lockedSlot: "Reserved space for a future discovery.",
    definition: "Description",
    example: "Example",
    curiosity: "Fun fact",
    category: "Category",
    rarity: "Rarity",
    optionMusic: "Music",
    optionMusicDesc: "Turns the browser-generated soundtrack on or off.",
    optionLanguage: "Language",
    optionLanguageDesc: "Switches the interface between Portuguese and English.",
    optionReset: "Reset progress",
    optionResetDesc: "Returns to the basic cards and replays the tutorial.",
    reset: "Reset",
    resetDone: "Progress reset.",
    close: "Close",
    creditsCourse: "Course",
    creditsCourseValue: "Educational Software Development Workshop I",
    creditsStudent: "Developed by",
    creditsStudentValue: "Alessandra e Silva Corrêa",
    creditsArea: "Area",
    creditsAreaValue: "Mathematics and its Technologies / Computing",
    creditsBncc: "BNCC",
    creditsBnccValue:
      "General Competency 5: understand, use, and create digital technologies critically, meaningfully, reflectively, and ethically.",
    specialLockedTitle: "AI Laboratory locked",
    specialLocked:
      "Discover Machine Learning to open a special mode focused on Artificial Intelligence combinations.",
    specialUnlockedTitle: "AI Laboratory unlocked",
    specialUnlocked:
      "Use Machine Learning, graphs, data, and information to create several AI cards.",
    openSpecial: "Open Lab",
    fullBinder: "Binder complete",
    fullBinderBody:
      "Every card was discovered. You completed the collection of computational concepts.",
    recipe: "Combination",
    nextTutorial: "Make this pair",
  },
};

const CONCEPTS = [
  concept("problema", "?", "fundamentos", "comum", "#ff7464", "#f6b15d", {
    pt: {
      name: "Problema",
      desc: "Situação que precisa ser compreendida para que uma solução seja criada.",
      example: "Organizar uma lista de notas do menor para o maior valor.",
      fact: "Todo projeto de software começa entendendo bem o problema.",
    },
    en: {
      name: "Problem",
      desc: "A situation that must be understood before a solution can be created.",
      example: "Organize a list of grades from lowest to highest.",
      fact: "Every software project starts by understanding the problem well.",
    },
  }),
  concept("dados", "01", "fundamentos", "comum", "#4eb6a4", "#72d4c6", {
    pt: {
      name: "Dados",
      desc: "Valores brutos que podem ser processados por um computador.",
      example: "10, 25, nome='Ana', verdadeiro.",
      fact: "Sem dados, programas não têm material para transformar.",
    },
    en: {
      name: "Data",
      desc: "Raw values that can be processed by a computer.",
      example: "10, 25, name='Ana', true.",
      fact: "Without data, programs have nothing to transform.",
    },
  }),
  concept("informacao", "i", "fundamentos", "comum", "#6fc7b5", "#ffd166", {
    pt: {
      name: "Informação",
      desc: "Dados organizados de forma que ganham significado.",
      example: "A média da turma é 8,2.",
      fact: "Informação é dado com contexto.",
    },
    en: {
      name: "Information",
      desc: "Data organized in a way that gives it meaning.",
      example: "The class average is 8.2.",
      fact: "Information is data with context.",
    },
  }),
  concept("sequencia", "1>2", "fundamentos", "comum", "#ffd166", "#ff9f6e", {
    pt: {
      name: "Sequência",
      desc: "Ordem em que instruções são executadas.",
      example: "Ler número -> somar 1 -> mostrar resultado.",
      fact: "A ordem errada pode mudar completamente a saída.",
    },
    en: {
      name: "Sequence",
      desc: "The order in which instructions are executed.",
      example: "Read number -> add 1 -> show result.",
      fact: "The wrong order can completely change the output.",
    },
  }),
  concept("decisao", "if", "programacao", "comum", "#7a6ff0", "#ef7f9a", {
    pt: {
      name: "Decisão",
      desc: "Escolha feita a partir de uma condição.",
      example: "Se a nota >= 6, aprovar; senão, recuperar.",
      fact: "Decisões fazem programas reagirem a situações diferentes.",
    },
    en: {
      name: "Decision",
      desc: "A choice made from a condition.",
      example: "If grade >= 6, pass; otherwise, recover.",
      fact: "Decisions let programs react to different situations.",
    },
  }),
  concept("repeticao", "for", "programacao", "comum", "#83c96d", "#4eb6a4", {
    pt: {
      name: "Repetição",
      desc: "Ação de executar instruções várias vezes.",
      example: "Para cada aluno, calcular a média.",
      fact: "Jogos executam ciclos de atualização o tempo todo.",
    },
    en: {
      name: "Repetition",
      desc: "The action of executing instructions multiple times.",
      example: "For each student, calculate the average.",
      fact: "Games run update cycles all the time.",
    },
  }),
  concept("entrada", "in", "fundamentos", "comum", "#2f9fd0", "#6fc7b5", {
    pt: {
      name: "Entrada",
      desc: "Informação recebida por um sistema.",
      example: "Um texto digitado, um clique ou um arquivo enviado.",
      fact: "Teclado, mouse e câmera são fontes de entrada.",
    },
    en: {
      name: "Input",
      desc: "Information received by a system.",
      example: "Typed text, a click, or an uploaded file.",
      fact: "Keyboard, mouse, and camera are input sources.",
    },
  }),
  concept("saida", "out", "fundamentos", "comum", "#ff9f6e", "#ef7f9a", {
    pt: {
      name: "Saída",
      desc: "Resultado produzido por um sistema.",
      example: "Uma mensagem na tela ou um relatório gerado.",
      fact: "Uma boa saída ajuda o usuário a entender o que aconteceu.",
    },
    en: {
      name: "Output",
      desc: "Result produced by a system.",
      example: "A message on screen or a generated report.",
      fact: "Good output helps the user understand what happened.",
    },
  }),
  concept("algoritmo", "</>", "fundamentos", "comum", "#ff7464", "#7a6ff0", {
    pt: {
      name: "Algoritmo",
      desc: "Sequência de passos para resolver um problema.",
      example: "Receber dois números -> somar -> exibir a soma.",
      fact: "Receitas de culinária lembram algoritmos do cotidiano.",
    },
    en: {
      name: "Algorithm",
      desc: "A sequence of steps to solve a problem.",
      example: "Receive two numbers -> add -> display the sum.",
      fact: "Cooking recipes are everyday algorithm-like instructions.",
    },
  }),
  concept("decomposicao", "part", "pensamento", "comum", "#ff9f6e", "#ffd166", {
    pt: {
      name: "Decomposição",
      desc: "Pilar do pensamento computacional que divide um problema grande em partes menores.",
      example: "Criar um jogo separando regras, personagens, pontuação e tela.",
      fact: "Decompor problemas ajuda a transformar desafios difíceis em tarefas possíveis.",
    },
    en: {
      name: "Decomposition",
      desc: "A computational thinking pillar that divides a large problem into smaller parts.",
      example: "Create a game by separating rules, characters, score, and screen.",
      fact: "Decomposing problems turns difficult challenges into manageable tasks.",
    },
  }),
  concept("reconhecimento-padroes", "pat", "pensamento", "incomum", "#6fc7b5", "#83c96d", {
    pt: {
      name: "Reconhecimento de Padrões",
      desc: "Pilar que identifica semelhanças e repetições entre problemas ou dados.",
      example: "Perceber que várias senhas inválidas falham pelo mesmo motivo.",
      fact: "Reconhecer padrões permite reutilizar soluções e prever comportamentos.",
    },
    en: {
      name: "Pattern Recognition",
      desc: "A pillar that identifies similarities and repetitions among problems or data.",
      example: "Notice that several invalid passwords fail for the same reason.",
      fact: "Recognizing patterns helps reuse solutions and predict behavior.",
    },
  }),
  concept("abstracao", "abs", "pensamento", "incomum", "#7a6ff0", "#2f9fd0", {
    pt: {
      name: "Abstração",
      desc: "Pilar que foca no essencial e esconde detalhes que não são necessários naquele momento.",
      example: "Usar um mapa do metrô sem desenhar cada rua da cidade.",
      fact: "Abstração ajuda programadores a pensar em modelos antes de escrever código.",
    },
    en: {
      name: "Abstraction",
      desc: "A pillar that focuses on what matters and hides details that are not needed at that moment.",
      example: "Use a subway map without drawing every street in the city.",
      fact: "Abstraction helps programmers think in models before writing code.",
    },
  }),
  concept("organizacao", "[ ]", "fundamentos", "comum", "#ffd166", "#83c96d", {
    pt: {
      name: "Organização",
      desc: "Forma de arrumar dados para facilitar leitura e processamento.",
      example: "Separar nomes por turma antes de calcular presenças.",
      fact: "Organizar dados costuma ser metade do trabalho.",
    },
    en: {
      name: "Organization",
      desc: "A way to arrange data to make reading and processing easier.",
      example: "Separate names by class before calculating attendance.",
      fact: "Organizing data is often half of the job.",
    },
  }),
  concept("armazenamento", "db", "fundamentos", "comum", "#6fc7b5", "#2f9fd0", {
    pt: {
      name: "Armazenamento",
      desc: "Ato de guardar dados para uso posterior.",
      example: "Salvar a pontuação do jogador em um arquivo.",
      fact: "Memória e banco de dados guardam informações em escalas diferentes.",
    },
    en: {
      name: "Storage",
      desc: "The act of keeping data for later use.",
      example: "Save the player's score in a file.",
      fact: "Memory and databases store information at different scales.",
    },
  }),
  concept("variavel", "x=", "fundamentos", "comum", "#4eb6a4", "#ffd166", {
    pt: {
      name: "Variável",
      desc: "Espaço nomeado que armazena um valor que pode mudar.",
      example: "vidas = 3",
      fact: "O nome da variável deve ajudar a entender o valor guardado.",
    },
    en: {
      name: "Variable",
      desc: "A named space that stores a value that can change.",
      example: "lives = 3",
      fact: "A variable name should help explain the value it stores.",
    },
  }),
  concept("comunicacao", "<->", "redes", "comum", "#2f9fd0", "#ffd166", {
    pt: {
      name: "Comunicação",
      desc: "Troca de mensagens entre pessoas, programas ou dispositivos.",
      example: "Um app envia uma solicitação e recebe uma resposta.",
      fact: "Redes de computadores existem para permitir comunicação.",
    },
    en: {
      name: "Communication",
      desc: "Exchange of messages among people, programs, or devices.",
      example: "An app sends a request and receives a response.",
      fact: "Computer networks exist to enable communication.",
    },
  }),
  concept("condicional", "if{}", "programacao", "incomum", "#7a6ff0", "#ff7464", {
    pt: {
      name: "Condicional",
      desc: "Estrutura que executa caminhos diferentes conforme uma condição.",
      example: "Se senha estiver correta -> entrar; senão -> avisar erro.",
      fact: "Condicionais são a base de menus, validações e escolhas em jogos.",
    },
    en: {
      name: "Conditional",
      desc: "A structure that runs different paths depending on a condition.",
      example: "If password is correct -> enter; otherwise -> show error.",
      fact: "Conditionals support menus, validations, and game choices.",
    },
  }),
  concept("loop", "for", "programacao", "incomum", "#83c96d", "#ffd166", {
    pt: {
      name: "Loop",
      desc: "Estrutura que permite repetir instruções.",
      example: 'Repita 10 vezes:\n  imprimir "Olá"',
      fact: "Jogos usam milhares de loops por segundo para atualizar cenas.",
    },
    en: {
      name: "Loop",
      desc: "A structure that allows instructions to repeat.",
      example: 'Repeat 10 times:\n  print "Hello"',
      fact: "Games use thousands of loops per second to update scenes.",
    },
  }),
  concept("funcao", "fn", "programacao", "incomum", "#ff9f6e", "#4eb6a4", {
    pt: {
      name: "Função",
      desc: "Bloco reutilizável de instruções com um objetivo específico.",
      example: "calcularMedia(notas)",
      fact: "Funções reduzem repetição e deixam programas mais organizados.",
    },
    en: {
      name: "Function",
      desc: "A reusable block of instructions with a specific purpose.",
      example: "calculateAverage(grades)",
      fact: "Functions reduce repetition and keep programs organized.",
    },
  }),
  concept("operador", "+=", "programacao", "incomum", "#ef7f9a", "#ffd166", {
    pt: {
      name: "Operadores",
      desc: "Símbolos ou palavras que realizam operações sobre valores.",
      example: "idade >= 18",
      fact: "Operadores ajudam a formar cálculos, comparações e condições.",
    },
    en: {
      name: "Operators",
      desc: "Symbols or words that perform operations on values.",
      example: "age >= 18",
      fact: "Operators help create calculations, comparisons, and conditions.",
    },
  }),
  concept("vetor", "arr", "estruturas", "incomum", "#ffd166", "#2f9fd0", {
    pt: {
      name: "Vetor",
      desc: "Coleção ordenada de valores acessados por posição.",
      example: "notas[0] mostra a primeira nota.",
      fact: "Vetor é excelente quando a ordem dos itens importa.",
    },
    en: {
      name: "Array",
      desc: "An ordered collection of values accessed by position.",
      example: "grades[0] shows the first grade.",
      fact: "Arrays are great when item order matters.",
    },
  }),
  concept("lista", "list", "estruturas", "incomum", "#4eb6a4", "#83c96d", {
    pt: {
      name: "Lista",
      desc: "Estrutura que guarda vários itens e pode crescer ou diminuir.",
      example: "tarefas = ['ler', 'programar', 'testar']",
      fact: "Listas aparecem em feeds, carrinhos de compra e playlists.",
    },
    en: {
      name: "List",
      desc: "A structure that stores multiple items and can grow or shrink.",
      example: "tasks = ['read', 'code', 'test']",
      fact: "Lists appear in feeds, shopping carts, and playlists.",
    },
  }),
  concept("estrutura-dados", "DS", "estruturas", "rara", "#6fc7b5", "#7a6ff0", {
    pt: {
      name: "Estrutura de Dados",
      desc: "Forma planejada de armazenar e acessar dados.",
      example: "Escolher lista, pilha, fila, árvore ou grafo conforme o problema.",
      fact: "A estrutura certa pode deixar um programa muito mais rápido.",
    },
    en: {
      name: "Data Structure",
      desc: "A planned way to store and access data.",
      example: "Choose a list, stack, queue, tree, or graph depending on the problem.",
      fact: "The right structure can make a program much faster.",
    },
  }),
  concept("fila", "FIFO", "estruturas", "epica", "#2f9fd0", "#83c96d", {
    pt: {
      name: "Fila",
      desc: "Estrutura em que o primeiro a entrar é o primeiro a sair.",
      example: "Fila de impressão: o primeiro documento enviado imprime primeiro.",
      fact: "Fila ajuda sistemas a organizar tarefas em espera.",
    },
    en: {
      name: "Queue",
      desc: "A structure where the first item in is the first item out.",
      example: "Print queue: the first document sent prints first.",
      fact: "Queues help systems organize waiting tasks.",
    },
  }),
  concept("pilha", "LIFO", "estruturas", "epica", "#ff7464", "#ffd166", {
    pt: {
      name: "Pilha",
      desc: "Estrutura em que o último a entrar é o primeiro a sair.",
      example: "Desfazer ações: a última alteração é revertida primeiro.",
      fact: "O histórico de navegação usa uma ideia parecida com pilha.",
    },
    en: {
      name: "Stack",
      desc: "A structure where the last item in is the first item out.",
      example: "Undo actions: the latest change is reverted first.",
      fact: "Browser history uses a stack-like idea.",
    },
  }),
  concept("recursao", "self", "programacao", "rara", "#7a6ff0", "#4eb6a4", {
    pt: {
      name: "Recursão",
      desc: "Técnica em que uma função chama a si mesma para resolver partes menores.",
      example: "Calcular fatorial: n! = n * (n - 1)!",
      fact: "Recursão é muito usada em árvores e problemas divididos em partes.",
    },
    en: {
      name: "Recursion",
      desc: "A technique where a function calls itself to solve smaller parts.",
      example: "Calculate factorial: n! = n * (n - 1)!",
      fact: "Recursion is common in trees and divide-and-conquer problems.",
    },
  }),
  concept("modularizacao", "mod", "programacao", "rara", "#ff9f6e", "#7a6ff0", {
    pt: {
      name: "Modularização",
      desc: "Divisão de um sistema em partes menores e mais fáceis de manter.",
      example: "Separar cadastro, login e relatório em módulos.",
      fact: "Projetos grandes dependem de boa modularização.",
    },
    en: {
      name: "Modularization",
      desc: "Dividing a system into smaller parts that are easier to maintain.",
      example: "Separate registration, login, and reports into modules.",
      fact: "Large projects depend on good modularization.",
    },
  }),
  concept("ordenacao", "sort", "estruturas", "rara", "#ffd166", "#ef7f9a", {
    pt: {
      name: "Ordenação",
      desc: "Processo de colocar dados em uma ordem definida.",
      example: "Ordenar produtos pelo menor preço.",
      fact: "Há vários algoritmos de ordenação, cada um com vantagens.",
    },
    en: {
      name: "Sorting",
      desc: "The process of putting data into a defined order.",
      example: "Sort products by lowest price.",
      fact: "There are many sorting algorithms, each with advantages.",
    },
  }),
  concept("busca-binaria", "mid", "estruturas", "rara", "#6fc7b5", "#ff7464", {
    pt: {
      name: "Busca Binária",
      desc: "Busca que divide uma lista ordenada ao meio a cada tentativa.",
      example: "Procurar um nome em uma lista alfabética já ordenada.",
      fact: "Busca binária é rápida porque elimina metade das opções por passo.",
    },
    en: {
      name: "Binary Search",
      desc: "A search that halves an ordered list at every attempt.",
      example: "Find a name in an already alphabetical list.",
      fact: "Binary search is fast because each step removes half the options.",
    },
  }),
  concept("arvore", "tree", "estruturas", "rara", "#83c96d", "#7a6ff0", {
    pt: {
      name: "Árvore",
      desc: "Estrutura de dados formada por nós conectados em hierarquia.",
      example: "Pastas dentro de pastas em um computador.",
      fact: "Árvores ajudam em buscas, jogos e organização de arquivos.",
    },
    en: {
      name: "Tree",
      desc: "A data structure made of connected nodes in a hierarchy.",
      example: "Folders inside folders on a computer.",
      fact: "Trees help with searching, games, and file organization.",
    },
  }),
  concept("grafo", "net", "estruturas", "epica", "#7a6ff0", "#2f9fd0", {
    pt: {
      name: "Grafo",
      desc: "Estrutura composta por nós e conexões entre eles.",
      example: "Mapa de cidades ligadas por estradas.",
      fact: "Redes sociais, mapas e rotas usam ideias de grafos.",
    },
    en: {
      name: "Graph",
      desc: "A structure made of nodes and connections among them.",
      example: "A map of cities connected by roads.",
      fact: "Social networks, maps, and routes use graph ideas.",
    },
  }),
  concept("protocolo", "http", "redes", "rara", "#2f9fd0", "#7a6ff0", {
    pt: {
      name: "Protocolo",
      desc: "Conjunto de regras para comunicação entre sistemas.",
      example: "HTTP define como páginas web são solicitadas.",
      fact: "Protocolos permitem que máquinas diferentes conversem.",
    },
    en: {
      name: "Protocol",
      desc: "A set of rules for communication between systems.",
      example: "HTTP defines how web pages are requested.",
      fact: "Protocols let different machines communicate.",
    },
  }),
  concept("cliente", "cli", "redes", "rara", "#4eb6a4", "#2f9fd0", {
    pt: {
      name: "Cliente",
      desc: "Programa ou dispositivo que solicita um serviço.",
      example: "O navegador pede uma página para um servidor.",
      fact: "Celulares, navegadores e apps podem agir como clientes.",
    },
    en: {
      name: "Client",
      desc: "A program or device that requests a service.",
      example: "A browser asks a server for a page.",
      fact: "Phones, browsers, and apps can act as clients.",
    },
  }),
  concept("servidor", "srv", "redes", "rara", "#ff9f6e", "#2f9fd0", {
    pt: {
      name: "Servidor",
      desc: "Sistema que responde a solicitações e oferece serviços.",
      example: "Servidor envia dados de um site para o navegador.",
      fact: "Servidores podem hospedar sites, jogos e bancos de dados.",
    },
    en: {
      name: "Server",
      desc: "A system that responds to requests and provides services.",
      example: "A server sends website data to the browser.",
      fact: "Servers can host websites, games, and databases.",
    },
  }),
  concept("ip", "IP", "redes", "rara", "#ffd166", "#2f9fd0", {
    pt: {
      name: "IP",
      desc: "Endereço usado para identificar dispositivos em uma rede.",
      example: "192.168.0.10",
      fact: "O IP ajuda os dados a chegarem ao destino certo.",
    },
    en: {
      name: "IP",
      desc: "An address used to identify devices on a network.",
      example: "192.168.0.10",
      fact: "IP helps data reach the correct destination.",
    },
  }),
  concept("hash", "#", "seguranca", "rara", "#ef7f9a", "#7a6ff0", {
    pt: {
      name: "Hash",
      desc: "Resultado compacto gerado por um algoritmo a partir de dados.",
      example: "Transformar uma senha em uma sequência difícil de reverter.",
      fact: "Hashes ajudam a verificar integridade de arquivos.",
    },
    en: {
      name: "Hash",
      desc: "A compact result generated by an algorithm from data.",
      example: "Turn a password into a hard-to-reverse sequence.",
      fact: "Hashes help verify file integrity.",
    },
  }),
  concept("criptografia", "lock", "seguranca", "epica", "#7a6ff0", "#ef7f9a", {
    pt: {
      name: "Criptografia",
      desc: "Técnica para proteger informações tornando-as ilegíveis sem chave.",
      example: "Enviar mensagens que apenas o destinatário consegue ler.",
      fact: "Criptografia protege bancos, mensagens e compras online.",
    },
    en: {
      name: "Cryptography",
      desc: "A technique that protects information by making it unreadable without a key.",
      example: "Send messages that only the recipient can read.",
      fact: "Cryptography protects banking, messages, and online shopping.",
    },
  }),
  concept("autenticacao", "auth", "seguranca", "epica", "#ff7464", "#2f9fd0", {
    pt: {
      name: "Autenticação",
      desc: "Processo de verificar se alguém é quem afirma ser.",
      example: "Login com senha e código de verificação.",
      fact: "Autenticação forte reduz invasões em contas digitais.",
    },
    en: {
      name: "Authentication",
      desc: "The process of checking whether someone is who they claim to be.",
      example: "Login with password and verification code.",
      fact: "Strong authentication reduces account break-ins.",
    },
  }),
  concept("probabilidade", "%", "fundamentos", "rara", "#ffd166", "#7a6ff0", {
    pt: {
      name: "Probabilidade",
      desc: "Estudo de chances e incertezas em eventos.",
      example: "Calcular a chance de uma mensagem ser spam.",
      fact: "Muitos sistemas inteligentes trabalham com incerteza.",
    },
    en: {
      name: "Probability",
      desc: "The study of chances and uncertainty in events.",
      example: "Calculate the chance that a message is spam.",
      fact: "Many intelligent systems work with uncertainty.",
    },
  }),
  concept("aprendizado", "learn", "ia", "rara", "#83c96d", "#ffd166", {
    pt: {
      name: "Aprendizado",
      desc: "Processo de melhorar respostas usando experiências ou dados.",
      example: "Ajustar previsões depois de observar exemplos.",
      fact: "Aprender padrões é essencial em muitos sistemas de IA.",
    },
    en: {
      name: "Learning",
      desc: "A process of improving answers using experience or data.",
      example: "Adjust predictions after seeing examples.",
      fact: "Learning patterns is essential in many AI systems.",
    },
  }),
  concept("inteligencia-artificial", "AI", "ia", "lendaria", "#7a6ff0", "#83c96d", {
    pt: {
      name: "Inteligência Artificial",
      desc: "Área que cria sistemas capazes de realizar tarefas associadas à inteligência.",
      example: "Reconhecer voz, recomendar músicas ou jogar xadrez.",
      fact: "IA combina dados, algoritmos, estatística e objetivos bem definidos.",
    },
    en: {
      name: "Artificial Intelligence",
      desc: "A field that creates systems able to perform intelligence-related tasks.",
      example: "Recognize speech, recommend music, or play chess.",
      fact: "AI combines data, algorithms, statistics, and well-defined goals.",
    },
  }),
  concept("machine-learning", "ML", "ia", "lendaria", "#83c96d", "#2f9fd0", {
    pt: {
      name: "Machine Learning",
      desc: "Técnica em que modelos aprendem padrões a partir de dados.",
      example: "Prever preço de casas usando exemplos anteriores.",
      fact: "Machine Learning desbloqueia o Laboratório de IA neste jogo.",
    },
    en: {
      name: "Machine Learning",
      desc: "A technique where models learn patterns from data.",
      example: "Predict house prices using previous examples.",
      fact: "Machine Learning unlocks the AI Laboratory in this game.",
    },
  }),
  concept("rede-neural", "NN", "ia", "lendaria", "#ef7f9a", "#83c96d", {
    pt: {
      name: "Rede Neural",
      desc: "Modelo inspirado em camadas de unidades que aprendem relações em dados.",
      example: "Classificar imagens entre gato, cachorro e pássaro.",
      fact: "Redes neurais modernas podem ter bilhões de parâmetros.",
    },
    en: {
      name: "Neural Network",
      desc: "A model inspired by layers of units that learn relationships in data.",
      example: "Classify images as cat, dog, or bird.",
      fact: "Modern neural networks can have billions of parameters.",
    },
  }),
  concept("pln", "NLP", "ia", "lendaria", "#ff9f6e", "#83c96d", {
    pt: {
      name: "PLN",
      desc: "Processamento de Linguagem Natural: IA aplicada a textos e fala.",
      example: "Chatbots, tradução automática e corretores inteligentes.",
      fact: "PLN ajuda computadores a lidar com linguagem humana.",
    },
    en: {
      name: "NLP",
      desc: "Natural Language Processing: AI applied to text and speech.",
      example: "Chatbots, machine translation, and smart spell checkers.",
      fact: "NLP helps computers handle human language.",
    },
  }),
  concept("computacao-quantica", "Q", "fundamentos", "lendaria", "#2f9fd0", "#ef7f9a", {
    pt: {
      name: "Computação Quântica",
      desc: "Modelo de computação baseado em propriedades da física quântica.",
      example: "Pesquisar soluções em problemas muito grandes com qubits.",
      fact: "Computação quântica pode transformar áreas como criptografia e simulação.",
    },
    en: {
      name: "Quantum Computing",
      desc: "A computing model based on properties of quantum physics.",
      example: "Search for solutions in very large problems using qubits.",
      fact: "Quantum computing may transform areas like cryptography and simulation.",
    },
  }),
  concept("ciencia-dados", "data", "ia", "epica", "#4eb6a4", "#ff9f6e", {
    pt: {
      name: "Ciência de Dados",
      desc: "Área que analisa dados para gerar conhecimento e apoiar decisões.",
      example: "Criar gráficos e modelos para entender evasão escolar.",
      fact: "Ciência de Dados mistura programação, estatística e comunicação.",
    },
    en: {
      name: "Data Science",
      desc: "A field that analyzes data to generate knowledge and support decisions.",
      example: "Create charts and models to understand school dropout.",
      fact: "Data Science mixes programming, statistics, and communication.",
    },
  }),
];

const RECIPES = [
  recipe("problema", "sequencia", "algoritmo"),
  recipe("dados", "informacao", "organizacao"),
  recipe("problema", "organizacao", "decomposicao"),
  recipe("dados", "repeticao", "reconhecimento-padroes"),
  recipe("problema", "informacao", "abstracao"),
  recipe("dados", "saida", "armazenamento"),
  recipe("dados", "armazenamento", "variavel"),
  recipe("entrada", "saida", "comunicacao"),
  recipe("algoritmo", "decisao", "condicional"),
  recipe("algoritmo", "repeticao", "loop"),
  recipe("variavel", "repeticao", "loop"),
  recipe("algoritmo", "entrada", "funcao"),
  recipe("dados", "decisao", "operador"),
  recipe("informacao", "decisao", "probabilidade"),
  recipe("variavel", "sequencia", "vetor"),
  recipe("vetor", "organizacao", "lista"),
  recipe("dados", "organizacao", "estrutura-dados"),
  recipe("lista", "entrada", "fila"),
  recipe("lista", "saida", "pilha"),
  recipe("loop", "funcao", "recursao"),
  recipe("funcao", "algoritmo", "modularizacao"),
  recipe("algoritmo", "vetor", "ordenacao"),
  recipe("ordenacao", "decisao", "busca-binaria"),
  recipe("recursao", "estrutura-dados", "arvore"),
  recipe("arvore", "comunicacao", "grafo"),
  recipe("comunicacao", "algoritmo", "protocolo"),
  recipe("protocolo", "entrada", "cliente"),
  recipe("protocolo", "saida", "servidor"),
  recipe("protocolo", "dados", "ip"),
  recipe("dados", "algoritmo", "hash"),
  recipe("hash", "informacao", "criptografia"),
  recipe("hash", "protocolo", "autenticacao"),
  recipe("algoritmo", "informacao", "aprendizado"),
  recipe("algoritmo", "aprendizado", "inteligencia-artificial"),
  recipe("arvore", "aprendizado", "machine-learning"),
  recipe("machine-learning", "grafo", "rede-neural"),
  recipe("inteligencia-artificial", "informacao", "pln"),
  recipe("probabilidade", "criptografia", "computacao-quantica"),
  recipe("machine-learning", "dados", "ciencia-dados"),
];

const TUTORIAL_STEPS = [
  { a: "problema", b: "sequencia", result: "algoritmo" },
  { a: "entrada", b: "saida", result: "comunicacao" },
];

const conceptById = new Map(CONCEPTS.map((item) => [item.id, item]));
const recipeByKey = new Map(RECIPES.map((item) => [item.key, item]));

let state = loadState();
let selected = [];
let activeCategory = "todos";
let currentScreen = "menu";
let lastDiscoveryId = null;
let feedback = null;
let audioCtx = null;
let musicTimer = null;
let toastTimer = null;

const app = document.querySelector("#app");
const modalRoot = document.querySelector("#modal-root");

document.addEventListener("DOMContentLoaded", () => {
  render();
});

function concept(id, symbol, category, rarity, toneA, toneB, text) {
  return { id, symbol, category, rarity, toneA, toneB, text };
}

function recipe(a, b, result) {
  return { a, b, result, key: comboKey(a, b) };
}

function comboKey(a, b) {
  return [a, b].sort().join("+");
}

function loadState() {
  const fallback = {
    lang: "pt",
    music: true,
    tutorialDone: false,
    binderUnlocked: false,
    earnedBadges: [],
    currentLevel: "inicio",
    unlocked: INITIAL_CONCEPTS,
    attempts: 0,
    discoveries: 0,
    streak: 0,
  };

  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return { ...fallback, earnedBadges: new Set(), unlocked: new Set(fallback.unlocked) };

    const unlocked = new Set(saved.unlocked || fallback.unlocked);
    INITIAL_CONCEPTS.forEach((id) => unlocked.add(id));
    const binderUnlocked = Boolean(saved.binderUnlocked) || unlocked.size > INITIAL_CONCEPTS.length;
    const earnedBadges = new Set(
      saved.earnedBadges ?? CATEGORY_ORDER.filter((category) => isCategoryComplete(category, unlocked)),
    );

    return {
      ...fallback,
      ...saved,
      binderUnlocked,
      earnedBadges,
      currentLevel: getSafeLevel(saved.currentLevel, unlocked),
      unlocked,
      discoveries: Math.max(0, unlocked.size - INITIAL_CONCEPTS.length),
    };
  } catch {
    return { ...fallback, earnedBadges: new Set(), unlocked: new Set(fallback.unlocked) };
  }
}

function saveState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      lang: state.lang,
      music: state.music,
      tutorialDone: state.tutorialDone,
      binderUnlocked: state.binderUnlocked,
      earnedBadges: [...state.earnedBadges],
      currentLevel: state.currentLevel,
      unlocked: [...state.unlocked],
      attempts: state.attempts,
      discoveries: state.discoveries,
      streak: state.streak,
    }),
  );
}

function t(key) {
  return UI[state.lang][key] || UI.pt[key] || key;
}

function conceptText(item, field = "name") {
  return item.text[state.lang]?.[field] || item.text.pt[field];
}

function badgeText(category) {
  return BADGE_META[category]?.[state.lang]?.name || BADGE_META[category]?.pt.name || category;
}

function levelText(levelId, field) {
  return LEVELS[levelId]?.[state.lang]?.[field] || LEVELS[levelId]?.pt[field] || levelId;
}

function isLevelUnlocked(levelId, unlockedSet = state.unlocked) {
  return (LEVELS[levelId]?.unlock || []).every((id) => unlockedSet.has(id));
}

function getSafeLevel(levelId, unlockedSet = state.unlocked) {
  if (LEVEL_ORDER.includes(levelId) && isLevelUnlocked(levelId, unlockedSet)) return levelId;
  return "inicio";
}

function getActiveLevel() {
  state.currentLevel = getSafeLevel(state.currentLevel);
  return state.currentLevel;
}

function getLevelProgress(levelId) {
  const goals = LEVELS[levelId]?.goals || [];
  const done = goals.filter((id) => state.unlocked.has(id)).length;
  return { done, total: goals.length };
}

function getLevelCards(levelId) {
  const allowed = new Set(LEVELS[levelId]?.boardIds || []);
  return CONCEPTS.filter((item) => state.unlocked.has(item.id) && allowed.has(item.id));
}

function isCategoryComplete(category, unlockedSet = state.unlocked) {
  return (BINDER_CATEGORY_ITEMS[category] || []).every((id) => unlockedSet.has(id));
}

function collectNewlyEarnedBadges() {
  const newlyEarned = CATEGORY_ORDER.filter(
    (category) => isCategoryComplete(category) && !state.earnedBadges.has(category),
  );
  newlyEarned.forEach((category) => state.earnedBadges.add(category));
  return newlyEarned;
}

function render() {
  document.documentElement.lang = state.lang === "pt" ? "pt-BR" : "en";
  if (currentScreen === "menu") renderMenu();
  if (currentScreen === "game") renderGame(false);
  if (currentScreen === "binder") renderBinderScreen();
  if (currentScreen === "special") renderSpecialScreen();
}

function renderMenu() {
  app.innerHTML = `
    <main class="screen menu-screen">
      <section class="brand-lockup">
        <p class="kicker">${t("kicker")}</p>
        <h1 class="menu-title">${t("menuTitle")}</h1>
        <p class="menu-copy">${t("menuCopy")}</p>
        <div class="menu-actions">
          <button class="primary-button" data-action="play">${icon("play")}${t("play")}</button>
          <button class="secondary-button" data-action="options">${icon("sliders")}${t("options")}</button>
          <button class="ghost-button" data-action="credits">${icon("spark")}${t("credits")}</button>
        </div>
      </section>
      <section class="poster-wrap" aria-label="CodeBinder">
        <img class="poster" src="assets/binder-cover.svg" alt="Capa ilustrada do CodeBinder" />
        <div class="floating-badge">
          <strong>${rarityStars(5)} ${localize("Cartas lendárias", "Legendary cards")}</strong>
          <span>${localize("Descubra IA, Machine Learning, Criptografia e Computação Quântica.", "Discover AI, Machine Learning, Cryptography, and Quantum Computing.")}</span>
        </div>
      </section>
    </main>
  `;

  app.querySelector('[data-action="play"]').addEventListener("click", () => {
    currentScreen = "game";
    selected = [];
    ensureMusic();
    render();
  });
  app.querySelector('[data-action="options"]').addEventListener("click", openOptions);
  app.querySelector('[data-action="credits"]').addEventListener("click", openCredits);
}

function renderGame(filterForSpecial) {
  const activeLevel = getActiveLevel();
  const unlocked = filterForSpecial ? getUnlockedConcepts(true) : getLevelCards(activeLevel);
  const tutorialStep = getTutorialStep();
  const discoveredCount = state.unlocked.size;
  const completion = Math.round((discoveredCount / CONCEPTS.length) * 100);

  app.innerHTML = `
    <div class="game-shell">
      ${renderTopbar()}
      <main class="game-layout">
        <section class="workspace">
          <div class="status-strip">
            ${statBlock(t("progress"), `${completion}%`)}
            ${statBlock(t("discovered"), `${discoveredCount}/${CONCEPTS.length}`)}
            ${statBlock(t("attempts"), state.attempts)}
            ${statBlock(t("streak"), state.streak)}
          </div>
          ${tutorialStep && !filterForSpecial ? renderTutorial(tutorialStep) : ""}
          ${!filterForSpecial ? renderLevelPanel(activeLevel) : ""}
          ${renderSelectionTray()}
          <section class="play-surface" aria-label="${t("deck")}">
            <div class="polaroid-grid">
              ${unlocked.map((item, index) => renderPolaroid(item, index)).join("")}
            </div>
          </section>
          ${renderFeedback()}
        </section>
        <aside class="side-stack">
          ${renderCollectionPanel()}
        </aside>
      </main>
    </div>
  `;

  bindTopbar();
  bindPolaroids();
  bindLevelPanel();
  bindSelectionTray();
  bindCollection();
}

function renderBinderScreen() {
  if (!state.binderUnlocked) {
    currentScreen = "game";
    render();
    showToast(`<strong>${t("binderLockedTitle")}</strong><br>${t("binderLockedBody")}`);
    return;
  }

  app.innerHTML = `
    <div class="game-shell">
      ${renderTopbar()}
      <main class="screen">
        <section class="binder-panel">
          ${renderBinderPanel(true)}
        </section>
      </main>
    </div>
  `;
  bindTopbar();
  bindBinder();
}

function renderSpecialScreen() {
  if (!state.unlocked.has("machine-learning")) {
    currentScreen = "game";
    render();
    return;
  }
  renderGame(true);
}

function renderTopbar() {
  const subtitle =
    currentScreen === "special"
      ? t("specialUnlockedTitle")
      : localize("Pensamento computacional por combinação", "Computational thinking by combination");
  const binderLocked = !state.binderUnlocked;
  return `
    <header class="topbar">
      <div class="top-title">
        <strong>CodeBinder</strong>
        <span>${subtitle}</span>
      </div>
      <nav class="top-actions" aria-label="Ações">
        <button class="ghost-button" data-action="menu">${icon("home")}${t("backMenu")}</button>
        <button class="ghost-button" data-action="game">${icon("play")}${t("play")}</button>
        <button class="ghost-button ${binderLocked ? "is-locked" : ""}" data-action="binder" data-locked="${binderLocked}">${icon("book")}${t("binder")}</button>
        ${
          state.unlocked.has("machine-learning")
            ? `<button class="ghost-button" data-action="special">${icon("spark")}${t("lab")}</button>`
            : ""
        }
        <button class="ghost-button" data-action="options">${icon("sliders")}${t("options")}</button>
      </nav>
    </header>
  `;
}

function renderTutorial(step) {
  const a = conceptById.get(step.a);
  const b = conceptById.get(step.b);
  const result = conceptById.get(step.result);
  const done = TUTORIAL_STEPS.findIndex((item) => item.result === step.result) + 1;
  return `
    <section class="tutorial-panel">
      <div class="tutorial-marker">${done}/${TUTORIAL_STEPS.length}</div>
      <div>
        <h2>${t("tutorial")}: ${conceptText(result)}</h2>
        <p>${t("nextTutorial")}: ${conceptText(a)} + ${conceptText(b)}.</p>
      </div>
      <div class="highlight-pair">
        <span class="pill">${conceptText(a)}</span>
        <span class="pill">${conceptText(b)}</span>
      </div>
    </section>
  `;
}

function renderLevelPanel(activeLevel) {
  const progress = getLevelProgress(activeLevel);
  const levelButtons = LEVEL_ORDER.map((levelId, index) => {
    const unlocked = isLevelUnlocked(levelId);
    const levelProgress = getLevelProgress(levelId);
    return `
      <button
        class="level-tab ${activeLevel === levelId ? "active" : ""} ${unlocked ? "" : "locked"}"
        data-level="${levelId}"
        data-locked="${!unlocked}"
      >
        <span>${String(index + 1).padStart(2, "0")}</span>
        <strong>${levelText(levelId, "name")}</strong>
        <small>${levelProgress.done}/${levelProgress.total}</small>
      </button>
    `;
  }).join("");

  return `
    <section class="level-panel">
      <div class="level-panel-head">
        <div>
          <span class="selection-label">${t("levelDesign")}</span>
          <h2>${levelText(activeLevel, "name")}</h2>
        </div>
        <span class="level-progress">${progress.done}/${progress.total} ${t("phaseProgress")}</span>
      </div>
      <div class="level-tabs">${levelButtons}</div>
      <div class="level-details">
        <div>
          <strong>${t("phaseObjective")}</strong>
          <p>${levelText(activeLevel, "objective")}</p>
        </div>
        <div>
          <strong>${t("phaseRhythm")}</strong>
          <p>${levelText(activeLevel, "rhythm")}</p>
        </div>
        <div>
          <strong>${t("playerFlow")}</strong>
          <p>${levelText(activeLevel, "flow")}</p>
        </div>
      </div>
    </section>
  `;
}

function renderFeedback() {
  if (!feedback) {
    return `
      <section class="feedback-panel">
        <h3>${t("combineHint")}</h3>
        <p>${t("feedbackIdle")}</p>
      </section>
    `;
  }

  return `
    <section class="feedback-panel ${feedback.type}">
      <h3>${feedback.title}</h3>
      <p>${feedback.body}</p>
    </section>
  `;
}

function renderSelectionTray() {
  const hint =
    selected.length === 0
      ? t("selectionEmpty")
      : selected.length === 1
        ? t("selectionOne")
        : t("selectionReady");
  const slots = [0, 1]
    .map((index) => {
      const item = selected[index] ? conceptById.get(selected[index]) : null;
      if (!item) {
        return `<span class="selection-slot empty">${index + 1}</span>`;
      }
      return `
        <span class="selection-slot filled" style="${toneVars(item)}">
          <span class="mini-symbol">${item.symbol}</span>
          <strong>${conceptText(item)}</strong>
        </span>
      `;
    })
    .join("");

  return `
    <section class="selection-tray">
      <div>
        <span class="selection-label">${t("selectedCards")}</span>
        <p>${hint}</p>
      </div>
      <div class="selection-slots">${slots}</div>
      <button class="ghost-button selection-clear" data-clear-selection ${selected.length ? "" : "disabled"}>${t("clearSelection")}</button>
    </section>
  `;
}

function renderSpecialPanel() {
  const unlocked = state.unlocked.has("machine-learning");
  return `
    <section class="special-panel ${unlocked ? "unlocked" : "locked"}">
      <h2>${unlocked ? t("specialUnlockedTitle") : t("specialLockedTitle")}</h2>
      <p>${unlocked ? t("specialUnlocked") : t("specialLocked")}</p>
      ${
        unlocked && currentScreen !== "special"
          ? `<div class="special-actions"><button class="secondary-button" data-action="special">${icon("spark")}${t("openSpecial")}</button></div>`
          : ""
      }
    </section>
  `;
}

function renderBinderPanel(expanded = false) {
  const pageCategory = getActiveBinderCategory();
  const pageIndex = CATEGORY_ORDER.indexOf(pageCategory);
  const binderFound = BINDER_CARD_IDS.filter((id) => state.unlocked.has(id)).length;
  const completion = Math.round((binderFound / BINDER_CARD_IDS.length) * 100);
  const pageCards = getBinderCards(pageCategory);
  const foundOnPage = pageCards.filter((item) => state.unlocked.has(item.id)).length;
  const tabs = CATEGORY_ORDER
    .map(
      (category, index) => {
        return `
        <button class="page-tab ${pageCategory === category ? "active" : ""}" data-category="${category}">
          <span>${String(index + 1).padStart(2, "0")}</span>
          ${CATEGORY_LABELS[state.lang][category]}
        </button>
      `;
      },
    )
    .join("");

  const cards = pageCards
    .map((item) => {
      if (!state.unlocked.has(item.id)) return renderLockedBinderCard(item, expanded);
      return renderBinderCard(item, expanded);
    })
    .join("");

  return `
    <div class="binder-head">
      <div>
        <h2>${t("binderBookTitle")}</h2>
      </div>
      <div class="progress-ring">${completion}%</div>
    </div>
    ${renderBadgeShelf()}
    <div class="binder-book ${expanded ? "expanded" : ""}">
      <div class="binder-spine" aria-hidden="true">
        <span></span><span></span><span></span><span></span>
      </div>
      <section class="binder-page">
        <div class="page-top">
          <button class="page-turn" data-page-direction="prev" aria-label="${t("prevPage")}">‹</button>
          <div>
            <span class="page-count">${t("pageLabel")} ${String(pageIndex + 1).padStart(2, "0")} / ${CATEGORY_ORDER.length}</span>
            <h3>${CATEGORY_LABELS[state.lang][pageCategory]}</h3>
            <p>${foundOnPage}/${pageCards.length} ${t("savedCards")}</p>
          </div>
          <button class="page-turn" data-page-direction="next" aria-label="${t("nextPage")}">›</button>
        </div>
        <div class="pocket-grid">
          ${cards || `<div class="empty-state">${t("emptyCategory")}</div>`}
        </div>
      </section>
    </div>
    <div class="page-tabs">${tabs}</div>
  `;
}

function renderBadgeShelf() {
  const earnedCount = CATEGORY_ORDER.filter((category) => state.earnedBadges.has(category)).length;
  const badges = CATEGORY_ORDER.map(renderBadge).join("");

  return `
    <section class="badge-shelf">
      <div class="badge-shelf-head">
        <div>
          <h3>${t("badgesTitle")}</h3>
          <p>${t("badgesHint")}</p>
        </div>
        <span class="badge-count">${earnedCount}/${CATEGORY_ORDER.length}</span>
      </div>
      <div class="badge-grid">${badges}</div>
    </section>
  `;
}

function renderBadge(category) {
  const meta = BADGE_META[category];
  const earned = state.earnedBadges.has(category);
  return `
    <article class="badge-card ${earned ? "earned" : "locked"}">
      <span class="badge-emblem">${meta.icon}</span>
      <strong>${badgeText(category)}</strong>
      <small>${earned ? CATEGORY_LABELS[state.lang][category] : t("badgeLocked")}</small>
    </article>
  `;
}

function getActiveBinderCategory() {
  if (!CATEGORY_ORDER.includes(activeCategory)) activeCategory = CATEGORY_ORDER[0];
  return activeCategory;
}

function moveBinderPage(direction) {
  const current = CATEGORY_ORDER.indexOf(getActiveBinderCategory());
  const next =
    direction === "next"
      ? (current + 1) % CATEGORY_ORDER.length
      : (current - 1 + CATEGORY_ORDER.length) % CATEGORY_ORDER.length;
  activeCategory = CATEGORY_ORDER[next];
  render();
}

function renderBinderCard(item) {
  const rarity = RARITY[item.rarity];
  return `
    <article class="binder-pocket" style="${toneVars(item)}">
      <button class="binder-card" data-card-detail="${item.id}" aria-label="${t("cardDetails")}: ${conceptText(item)}">
        ${renderPhoto(item)}
        <h3>${conceptText(item)}</h3>
        <div class="meta-line">
          <span class="meta-chip">${rarityStars(rarity.stars)}</span>
        </div>
      </button>
    </article>
  `;
}

function renderLockedBinderCard(item) {
  return `
    <article class="binder-pocket locked">
      <div class="binder-card locked">
        <span class="locked-stars">${rarityStars(RARITY[item.rarity].stars)}</span>
        <h3>?</h3>
      </div>
    </article>
  `;
}

function renderCollectionPanel() {
  const items = getUnlockedConcepts(false)
    .slice()
    .reverse()
    .slice(0, 10)
    .map(renderCollectionItem)
    .join("");

  return `
    <section class="collection-panel">
      <div class="collection-head">
        <h2>${t("deck")}</h2>
        <span class="pill">${state.unlocked.size}</span>
      </div>
      <div class="collection-list">
        ${items}
      </div>
    </section>
  `;
}

function renderCollectionItem(item) {
  return `
    <button class="collection-item" data-focus="${item.id}" style="${toneVars(item)}">
      <span class="mini-symbol">${item.symbol}</span>
      <span>
        <strong>${conceptText(item)}</strong>
        <span>${CATEGORY_LABELS[state.lang][item.category]}</span>
      </span>
      <span class="rarity-row">${rarityStars(RARITY[item.rarity].stars)}</span>
    </button>
  `;
}

function renderPolaroid(item, index) {
  const tilt = ((index % 5) - 2) * 1.4;
  const isSelected = selected.includes(item.id) ? "selected" : "";
  const isNew = lastDiscoveryId === item.id ? "is-new" : "";
  return `
    <button
      class="polaroid ${isSelected} ${isNew}"
      style="${toneVars(item)} --tilt: ${tilt}deg;"
      draggable="true"
      data-id="${item.id}"
      aria-pressed="${selected.includes(item.id)}"
    >
      ${renderPhoto(item)}
      <span class="polaroid-caption">
        <span class="polaroid-name">${conceptText(item)}</span>
        <span class="rarity-row">${rarityStars(RARITY[item.rarity].stars)}</span>
      </span>
    </button>
  `;
}

function renderPhoto(item) {
  return `<span class="photo"><span class="photo-symbol">${item.symbol}</span></span>`;
}

function toneVars(item) {
  return `--tone-a: ${item.toneA}; --tone-b: ${item.toneB};`;
}

function statBlock(label, value) {
  return `
    <div class="stat">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `;
}

function bindTopbar() {
  app.querySelectorAll(".topbar [data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;
      if (action === "menu") currentScreen = "menu";
      if (action === "game") currentScreen = "game";
      if (action === "binder") {
        if (!state.binderUnlocked) {
          showToast(`<strong>${t("binderLockedTitle")}</strong><br>${t("binderLockedBody")}`);
          return;
        }
        currentScreen = "binder";
      }
      if (action === "special") currentScreen = "special";
      if (action === "options") return openOptions();
      selected = [];
      render();
    });
  });
}

function bindPolaroids() {
  app.querySelectorAll(".polaroid").forEach((card) => {
    card.addEventListener("click", () => toggleSelection(card.dataset.id));
    card.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", card.dataset.id);
      event.dataTransfer.effectAllowed = "move";
    });
    card.addEventListener("dragover", (event) => {
      event.preventDefault();
      card.classList.add("drop-target");
    });
    card.addEventListener("dragleave", () => card.classList.remove("drop-target"));
    card.addEventListener("drop", (event) => {
      event.preventDefault();
      card.classList.remove("drop-target");
      const from = event.dataTransfer.getData("text/plain");
      attemptCombine(from, card.dataset.id);
    });
  });
}

function bindSelectionTray() {
  const clear = app.querySelector("[data-clear-selection]");
  if (!clear) return;
  clear.addEventListener("click", () => {
    selected = [];
    render();
  });
}

function bindLevelPanel() {
  app.querySelectorAll("[data-level]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.locked === "true") {
        showToast(`<strong>${t("lockedLevel")}</strong><br>${t("lockedLevelBody")}`);
        return;
      }
      state.currentLevel = button.dataset.level;
      selected = [];
      saveState();
      render();
    });
  });
}

function bindBinder() {
  app.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      render();
    });
  });

  app.querySelectorAll("[data-page-direction]").forEach((button) => {
    button.addEventListener("click", () => {
      moveBinderPage(button.dataset.pageDirection);
    });
  });

  app.querySelectorAll("[data-card-detail]").forEach((button) => {
    button.addEventListener("click", () => {
      openCardDetails(button.dataset.cardDetail);
    });
  });
}

function bindCollection() {
  app.querySelectorAll("[data-focus]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = conceptById.get(button.dataset.focus);
      activeCategory = item.category;
      currentScreen = "binder";
      render();
    });
  });
}

function bindSpecialPanel() {
  app.querySelectorAll('[data-action="special"]').forEach((button) => {
    button.addEventListener("click", () => {
      currentScreen = "special";
      selected = [];
      render();
    });
  });
}

function toggleSelection(id) {
  if (selected.includes(id)) {
    selected = selected.filter((item) => item !== id);
  } else {
    selected = [...selected, id].slice(-2);
  }

  if (selected.length === 2) {
    const [a, b] = selected;
    attemptCombine(a, b);
    return;
  }

  render();
}

function attemptCombine(a, b) {
  if (!a || !b || a === b) {
    feedback = { type: "miss", title: t("missTitle"), body: t("sameCard") };
    selected = [];
    render();
    return;
  }

  const first = conceptById.get(a);
  const second = conceptById.get(b);
  const match = recipeByKey.get(comboKey(a, b));
  state.attempts += 1;
  selected = [];

  if (!match) {
    state.streak = 0;
    feedback = {
      type: "miss",
      title: t("missTitle"),
      body: `${conceptText(first)} + ${conceptText(second)}. ${t("missBody")}`,
    };
    saveState();
    render();
    return;
  }

  const result = conceptById.get(match.result);
  const alreadyKnown = state.unlocked.has(match.result);
  const shouldAnnounceBinder = !state.binderUnlocked;
  let newlyEarnedBadges = [];
  state.binderUnlocked = true;

  if (!alreadyKnown) {
    state.unlocked.add(match.result);
    state.discoveries = state.unlocked.size - INITIAL_CONCEPTS.length;
    newlyEarnedBadges = collectNewlyEarnedBadges();
    state.streak += 1;
    lastDiscoveryId = match.result;
    playDiscoverySound();
    feedback = {
      type: "success",
      title: `${t("successNew")}: ${conceptText(result)}`,
      body: `${conceptText(first)} + ${conceptText(second)} -> ${conceptText(result)}. ${conceptText(result, "desc")}`,
    };
    maybeFinishTutorial();
    maybeCompleteBinder();
  } else {
    state.streak += 1;
    feedback = {
      type: "success",
      title: `${t("successKnown")}: ${conceptText(result)}`,
      body: `${conceptText(first)} + ${conceptText(second)} -> ${conceptText(result)}. ${conceptText(result, "fact")}`,
    };
  }

  saveState();
  render();
  if (newlyEarnedBadges.length) {
    openBadgeEarnedModal(newlyEarnedBadges);
  } else if (shouldAnnounceBinder) {
    openBinderUnlockedModal();
  }
  window.setTimeout(() => {
    lastDiscoveryId = null;
  }, 500);
}

function maybeFinishTutorial() {
  if (state.tutorialDone) return;
  const done = TUTORIAL_STEPS.every((step) => state.unlocked.has(step.result));
  if (!done) return;
  state.tutorialDone = true;
  showToast(`<strong>${t("tutorialDoneTitle")}</strong><br>${t("tutorialDone")}`);
}

function maybeCompleteBinder() {
  if (!BINDER_CARD_IDS.every((id) => state.unlocked.has(id))) return;
  showToast(`<strong>${t("fullBinder")}</strong><br>${t("fullBinderBody")}`);
}

function getTutorialStep() {
  if (state.tutorialDone) return null;
  return TUTORIAL_STEPS.find((step) => !state.unlocked.has(step.result)) || null;
}

function getUnlockedConcepts(filterForSpecial) {
  const unlocked = CONCEPTS.filter((item) => state.unlocked.has(item.id));
  if (!filterForSpecial) return unlocked;

  const specialIds = new Set([
    "dados",
    "informacao",
    "algoritmo",
    "probabilidade",
    "arvore",
    "grafo",
    "aprendizado",
    "machine-learning",
    "inteligencia-artificial",
    "rede-neural",
    "pln",
    "ciencia-dados",
  ]);
  return unlocked.filter((item) => specialIds.has(item.id));
}

function getBinderCards(category) {
  return (BINDER_CATEGORY_ITEMS[category] || []).map((id) => conceptById.get(id)).filter(Boolean);
}

function rarityStars(count) {
  return "★".repeat(count);
}

function localize(pt, en) {
  return state.lang === "pt" ? pt : en;
}

function icon(type) {
  const icons = {
    play: '<span aria-hidden="true">▶</span>',
    sliders: '<span aria-hidden="true">☰</span>',
    spark: '<span aria-hidden="true">✦</span>',
    home: '<span aria-hidden="true">⌂</span>',
    book: '<span aria-hidden="true">▤</span>',
  };
  return icons[type] || "";
}

function openOptions() {
  modalRoot.innerHTML = `
    <div class="modal-backdrop" role="presentation">
      <section class="modal" role="dialog" aria-modal="true" aria-label="${t("options")}">
        <header class="modal-head">
          <h2>${t("options")}</h2>
          <button class="icon-button" data-modal-close aria-label="${t("close")}">×</button>
        </header>
        <div class="modal-body">
          <div class="option-row">
            <span>
              <strong>${t("optionMusic")}</strong>
              <span>${t("optionMusicDesc")}</span>
            </span>
            <button class="switch" data-option="music" aria-pressed="${state.music}" aria-label="${t("optionMusic")}"></button>
          </div>
          <div class="option-row">
            <span>
              <strong>${t("optionLanguage")}</strong>
              <span>${t("optionLanguageDesc")}</span>
            </span>
            <div class="segmented" role="group" aria-label="${t("optionLanguage")}">
              <button class="${state.lang === "pt" ? "active" : ""}" data-lang="pt">PT</button>
              <button class="${state.lang === "en" ? "active" : ""}" data-lang="en">EN</button>
            </div>
          </div>
          <div class="option-row">
            <span>
              <strong>${t("optionReset")}</strong>
              <span>${t("optionResetDesc")}</span>
            </span>
            <button class="secondary-button" data-option="reset">${t("reset")}</button>
          </div>
        </div>
      </section>
    </div>
  `;
  bindModal();
}

function openCredits() {
  modalRoot.innerHTML = `
    <div class="modal-backdrop" role="presentation">
      <section class="modal" role="dialog" aria-modal="true" aria-label="${t("credits")}">
        <header class="modal-head">
          <h2>${t("credits")}</h2>
          <button class="icon-button" data-modal-close aria-label="${t("close")}">×</button>
        </header>
        <div class="modal-body">
          <ul class="credits-list">
            <li><strong>${t("creditsStudent")}</strong>${t("creditsStudentValue")}</li>
            <li><strong>${t("creditsCourse")}</strong>${t("creditsCourseValue")}</li>
            <li><strong>${t("creditsArea")}</strong>${t("creditsAreaValue")}</li>
            <li><strong>${t("creditsBncc")}</strong>${t("creditsBnccValue")}</li>
          </ul>
        </div>
      </section>
    </div>
  `;
  bindModal();
}

function bindModal() {
  modalRoot.querySelector("[data-modal-close]").addEventListener("click", closeModal);
  modalRoot.querySelector(".modal-backdrop").addEventListener("click", (event) => {
    if (event.target.classList.contains("modal-backdrop")) closeModal();
  });

  modalRoot.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      state.lang = button.dataset.lang;
      saveState();
      closeModal();
      render();
      openOptions();
    });
  });

  const music = modalRoot.querySelector('[data-option="music"]');
  if (music) {
    music.addEventListener("click", () => {
      state.music = !state.music;
      music.setAttribute("aria-pressed", String(state.music));
      if (state.music) startMusic();
      else stopMusic();
      saveState();
    });
  }

  const reset = modalRoot.querySelector('[data-option="reset"]');
  if (reset) {
    reset.addEventListener("click", () => {
      resetProgress();
      closeModal();
      showToast(t("resetDone"));
      render();
    });
  }
}

function closeModal() {
  modalRoot.innerHTML = "";
}

function bindFlipCard() {
  const scene = modalRoot.querySelector("[data-flip-card]");
  const control = modalRoot.querySelector("[data-flip-card-control]");
  if (!scene || !control) return;

  const flip = () => {
    scene.classList.toggle("is-flipped");
    const flipped = scene.classList.contains("is-flipped");
    control.textContent = flipped ? t("viewFront") : t("viewBack");
    control.setAttribute("aria-pressed", String(flipped));
  };

  scene.addEventListener("click", flip);
  scene.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      flip();
    }
  });
  control.addEventListener("click", flip);
}

function openBinderUnlockedModal() {
  window.clearTimeout(toastTimer);
  const existingToast = document.querySelector(".toast");
  if (existingToast) existingToast.remove();

  modalRoot.innerHTML = `
    <div class="modal-backdrop" role="presentation">
      <section class="modal binder-unlocked-modal" role="dialog" aria-modal="true" aria-label="${t("binderUnlockedTitle")}">
        <header class="modal-head">
          <h2>${t("binderUnlockedTitle")}</h2>
          <button class="icon-button" data-modal-close aria-label="${t("close")}">×</button>
        </header>
        <div class="modal-body">
          <div class="unlock-card">
            <span class="unlock-icon">${icon("book")}</span>
            <p>${t("binderUnlockedBody")}</p>
            <button class="primary-button" data-unlock-close>OK</button>
          </div>
        </div>
      </section>
    </div>
  `;
  bindModal();
  modalRoot.querySelector("[data-unlock-close]").addEventListener("click", () => {
    closeModal();
  });
}

function openBadgeEarnedModal(categories) {
  window.clearTimeout(toastTimer);
  const existingToast = document.querySelector(".toast");
  if (existingToast) existingToast.remove();

  const badges = categories
    .map((category) => {
      const meta = BADGE_META[category];
      return `
        <article class="earned-badge-preview">
          <span class="badge-emblem">${meta.icon}</span>
          <strong>${badgeText(category)}</strong>
          <small>${CATEGORY_LABELS[state.lang][category]}</small>
        </article>
      `;
    })
    .join("");

  modalRoot.innerHTML = `
    <div class="modal-backdrop" role="presentation">
      <section class="modal badge-earned-modal" role="dialog" aria-modal="true" aria-label="${t("badgeEarnedTitle")}">
        <header class="modal-head">
          <h2>${t("badgeEarnedTitle")}</h2>
          <button class="icon-button" data-modal-close aria-label="${t("close")}">×</button>
        </header>
        <div class="modal-body">
          <div class="badge-earned-body">
            <p>${t("badgeEarnedBody")}</p>
            <div class="earned-badge-list">${badges}</div>
            <button class="primary-button" data-modal-close-secondary>OK</button>
          </div>
        </div>
      </section>
    </div>
  `;
  bindModal();
  modalRoot.querySelector("[data-modal-close-secondary]").addEventListener("click", closeModal);
}

function openCardDetails(id) {
  const item = conceptById.get(id);
  if (!item || !state.unlocked.has(id)) return;

  const rarity = RARITY[item.rarity];
  modalRoot.innerHTML = `
    <div class="modal-backdrop" role="presentation">
      <section class="modal card-detail-modal" role="dialog" aria-modal="true" aria-label="${t("cardDetails")}">
        <header class="modal-head">
          <h2>${conceptText(item)}</h2>
          <button class="icon-button" data-modal-close aria-label="${t("close")}">×</button>
        </header>
        <div class="modal-body card-detail-body" style="${toneVars(item)}">
          <div class="flip-card-scene" data-flip-card role="button" tabindex="0" aria-label="${t("flipCard")}">
            <div class="flip-card-inner">
              <section class="flip-face flip-front" aria-label="${t("frontSide")}">
                <span class="side-label">${t("frontSide")}</span>
                ${renderPhoto(item)}
                <h3>${conceptText(item)}</h3>
                <div class="meta-line">
                  <span class="meta-chip">${CATEGORY_LABELS[state.lang][item.category]}</span>
                  <span class="meta-chip">${rarity[state.lang]}</span>
                  <span class="meta-chip">${rarityStars(rarity.stars)}</span>
                </div>
              </section>
              <section class="flip-face flip-back" aria-label="${t("backSide")}">
                <span class="side-label">${t("backSide")}</span>
                <div class="card-section">
                  <strong>${t("definition")}</strong>
                  <p>${conceptText(item, "desc")}</p>
                </div>
                <div class="card-section">
                  <strong>${t("example")}</strong>
                  <pre>${conceptText(item, "example")}</pre>
                </div>
                <div class="bubble-note">
                  <strong>${t("curiosity")}</strong>
                  <span>${conceptText(item, "fact")}</span>
                </div>
              </section>
            </div>
          </div>
          <button class="secondary-button flip-control" data-flip-card-control aria-pressed="false">${t("viewBack")}</button>
        </div>
      </section>
    </div>
  `;
  bindModal();
  bindFlipCard();
}

function resetProgress() {
  stopMusic();
  state = {
    lang: state.lang,
    music: state.music,
    tutorialDone: false,
    binderUnlocked: false,
    earnedBadges: new Set(),
    currentLevel: "inicio",
    unlocked: new Set(INITIAL_CONCEPTS),
    attempts: 0,
    discoveries: 0,
    streak: 0,
  };
  selected = [];
  activeCategory = "todos";
  feedback = null;
  lastDiscoveryId = null;
  saveState();
}

function showToast(html) {
  window.clearTimeout(toastTimer);
  const existing = document.querySelector(".toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = html;
  document.body.appendChild(toast);
  toastTimer = window.setTimeout(() => toast.remove(), 4200);
}

function ensureMusic() {
  if (state.music) startMusic();
}

function startMusic() {
  if (!state.music || musicTimer) return;
  audioCtx = audioCtx || new AudioContext();
  if (audioCtx.state === "suspended") audioCtx.resume();

  const notes = [261.63, 329.63, 392.0, 523.25, 440.0, 392.0];
  let step = 0;
  musicTimer = window.setInterval(() => {
    playTone(notes[step % notes.length], 0.09, 0.045);
    step += 1;
  }, 420);
}

function stopMusic() {
  if (musicTimer) window.clearInterval(musicTimer);
  musicTimer = null;
}

function playDiscoverySound() {
  if (!state.music) return;
  startMusic();
  [523.25, 659.25, 783.99].forEach((note, index) => {
    window.setTimeout(() => playTone(note, 0.12, 0.08), index * 90);
  });
}

function playTone(freq, duration, volume) {
  if (!audioCtx) return;
  const oscillator = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  oscillator.type = "sine";
  oscillator.frequency.value = freq;
  gain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(volume, audioCtx.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
  oscillator.connect(gain);
  gain.connect(audioCtx.destination);
  oscillator.start();
  oscillator.stop(audioCtx.currentTime + duration + 0.03);
}
