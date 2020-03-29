// let question1 = prompt('Как называется столица Азербайджана? 1: Баку. 2: Москва. 3: Тбилиси.');
const data = [
  {question1:'kak nazivayetsa stolitsa Moskvi :)', anwer:'Moskva stolitsa mira!', cost:100},
  {question1:'Perviy prezident Ameriki?', anwer:'Vladimir Vladimirovich Kolumb', cost:500},
  {question1:'kak nazivayetsa stolitsa Moskvi :)', anwer:'Moskva stolitsa mira!', cost:1000},
] 

function ask(question, answer) {
  (question === answer) ? congrats() : goodbye();
}

function congrats()
