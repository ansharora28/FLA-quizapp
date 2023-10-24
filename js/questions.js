let questions = [
  {
    numb: 1,
    question: "In a DFA, each state has exactly how many transitions for each symbol in the alphabet?",
    answer: "One",
    options: [
      "Zero",
      "One",
      "Two",
      "Unlimited"
    ]
  },
  {
    numb: 2,
    question: "Which of the following is NOT a closure property of Turing machine-recognizable languages?",
    answer: "Complement",
    options: [
      "Union",
      "Concatenation",
      "Kleene Star",
      "Complement"
    ]
  },
  {
    numb: 3,
    question: "The reduced grammar equivalent to the grammar, whose production rules are given below, is\n\nS → AB | CA\nB → BC | AB\nA → a\nC → a B | b",
    answer: "S → CA, A → a, C → b",
    options: [
      "S → CA, A → a, C → b",
      "S → CA | B, B → BC | B, A → a, C → aB | b",
      "S → CA | B, B → BC, A → a, C → aB | b",
      "S → AB | AC, B → BC | BA, A → a, C → aB | b"
    ]
  },
  {
    numb: 4,
    question: "Which of the following regular expressions matches the language of all strings over the alphabet {a, b} that contain at least one b?",
    answer: "(a|b)*b",
    options: [
      "(a+b)*",
      "(a|b)*b",
      "(a|b)b(a|b)",
      "b(a|b)*"
    ]
  },
  {
    numb: 5,
    question: "Which of the following is NOT a valid production rule for a regular grammar?",
    answer: "S -> S + S",
    options: [
      "S -> aS",
      "S -> ab",
      "S -> ε",
      "S -> S + S"
    ]
  },
  {
    numb: 6,
    question: "What is the minimum number of states required for a finite automaton that accepts the language of all strings over the alphabet {a, b} that contain an even number of as?",
    answer: "2",
    options: [
      "2",
      "3",
      "4",
      "5"
    ]
  },
  {
    numb: 7,
    question: "Which of the following is NOT a valid state transition table for a finite automaton?",
    answer: "| q0 | a | q1 |",
    options: [
      "| q0 | a | q1 |",
      "| q0 | b | q2 |",
      "| q1 | a | q1 |"
    ]
  },
  {
    numb: 8,
    question: "Which of the following is NOT a closure property of context-free languages?",
    answer: "Complement",
    options: [
      "Union",
      "Concatenation",
      "Kleene star",
      "Complement"
    ]
  },
  {
    numb: 9,
    question: "What is the language accepted by the following pushdown automaton?",
    answer: "A -> aA | bB\nB -> aB | b\nS -> aA | bB\nAccept on S",
    options: [
      "A -> aA | bB\nB -> aB | b\nS -> aA | bB\nAccept on S",
      "A -> aA | bB\nB -> aB | b\nS -> aA | bB\nAccept on B",
      "A -> aA | bB\nB -> aB | b\nS -> aA | bB\nAccept on A"
    ]
  },
  {
    numb: 10,
    question: "Which of the following is NOT a valid Turing machine tape configuration?",
    answer: "abcabc",
    options: [
      "0000000000",
      "1111111111",
      "abcabc",
      "_abcabc"
    ]
  },
];

// You can now use this 'questions' array for your quiz.
