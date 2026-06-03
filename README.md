# CodeBinder

Jogo educativo em formato de binder colecionável, inspirado em fichários de photocards de K-pop, para trabalhar pensamento computacional e conceitos fundamentais da Computação.

## Como executar

Abra o arquivo `index.html` em um navegador moderno.

Também é possível testar por servidor local:

```bash
python -m http.server 4173
```

Depois acesse `http://127.0.0.1:4173`.

## Mecânica

O jogador começa com polaroids de conceitos básicos, como Dados, Informação, Problema, Sequência, Decisão, Repetição, Entrada e Saída.

Ao combinar duas polaroids, uma nova carta pode ser descoberta. Após a primeira combinação correta, o jogador recebe um pop-up avisando que o fichário de photocards foi desbloqueado. As cartas descobertas entram no binder como photocards guardados em bolsos plásticos e podem ser usadas em novas combinações.

Exemplos:

- Problema + Sequência -> Algoritmo
- Problema + Organização -> Decomposição
- Dados + Repetição -> Reconhecimento de Padrões
- Problema + Informação -> Abstração
- Algoritmo + Decisão -> Condicional
- Algoritmo + Repetição -> Loop
- Loop + Função -> Recursão
- Árvore + Aprendizado -> Machine Learning

## Level Design

O jogo é dividido em três fases para controlar o ritmo de dificuldade e organizar o fluxo do jogador.

### Fase 1

Organização: tutorial e fundamentos da computação.

Fluxo do jogador: Tutorial -> Pensamento Computacional -> Fundamentos -> Fichário desbloqueado.

Ritmo de dificuldade: guiado, com combinações diretas e feedback constante.

Objetivos:

- Aprender a combinar duas polaroids.
- Descobrir os pilares do Pensamento Computacional.
- Descobrir Algoritmo.
- Descobrir Variável.
- Desbloquear o Binder de Photocards.

### Fase 2

Organização: programação e primeiras estruturas de dados.

Fluxo do jogador: Fundamentos -> Programação -> Estruturas de Dados.

Ritmo de dificuldade: moderado, usando conceitos já descobertos como peças para novas combinações.

Objetivos:

- Descobrir Função, Condicional, Loop e Operadores.
- Descobrir Vetor e Lista.
- Preparar o jogador para conceitos mais abstratos.

### Fase 3

Organização: estruturas avançadas, redes, segurança e inteligência artificial.

Fluxo do jogador: Estruturas -> Redes e Internet -> Segurança -> Inteligência Artificial.

Ritmo de dificuldade: desafiador, com combinações encadeadas e conceitos de maior raridade.

Objetivos:

- Descobrir Árvore e Grafo.
- Descobrir Protocolo, Cliente, Servidor e IP.
- Descobrir Hash, Criptografia e Autenticação.
- Chegar em Inteligência Artificial, Machine Learning, Rede Neural e PLN.
- Completar coleções e ganhar badges.

## Recursos

- Menu inicial com Jogar, Opções e Créditos.
- Opções para ligar/desligar música e alternar idioma entre português e inglês.
- Tutorial guiado com duas descobertas iniciais.
- Fase 1, Fase 2 e Fase 3 com objetivo, fluxo e ritmo de dificuldade.
- Deck lateral ao lado da fase, sem o binder fixo na tela de jogo.
- Binder aberto apenas pelo botão Binder após a primeira combinação correta.
- Binder em formato de livro, com cada categoria ocupando uma página.
- Página com visual de fichário, argolas e bolsos de photocard.
- Photocards com nome e raridade dentro do binder.
- Detalhes educativos em photocard virável: frente com nome, categoria e raridade; verso com descrição, exemplo e curiosidade.
- Sistema de raridade de 1 a 5 estrelas.
- Badges de conquista por coleção completa do Binder.
- Laboratório especial de IA desbloqueado ao descobrir Machine Learning.

## Categorias do Binder

- Pensamento Computacional: Algoritmo, Decomposição, Reconhecimento de Padrões, Abstração.
- Fundamentos: Dados, Informação, Algoritmo, Variável.
- Programação: Função, Condicional, Loop, Operadores.
- Estruturas de Dados: Vetor, Lista, Pilha, Fila, Árvore, Grafo.
- Redes e Internet: Cliente, Servidor, IP, Protocolo.
- Segurança: Criptografia, Hash, Autenticação.
- Inteligência Artificial: Inteligência Artificial, Machine Learning, Rede Neural, PLN.

## Badges

Cada categoria do Binder possui um badge próprio. O jogador ganha o badge ao completar todos os photocards daquela coleção.

## Alinhamento pedagógico

Área: Matemática e suas Tecnologias / Computação.

Tema: Pensamento Computacional e Conceitos Fundamentais da Computação.

Competência Geral 5 da BNCC: compreender, utilizar e criar tecnologias digitais de informação e comunicação de forma crítica, significativa, reflexiva e ética.

## Disciplina

Oficina de Desenvolvimento de Software Educacional I.

## Créditos

Desenvolvido por Alessandra e Silva Corrêa.
