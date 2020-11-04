const quizData = [
  {
    question: "How old is Abhishek ?",
    a: "10",
    b: "17",
    c: "20",
    d: "22",
    correct: "d",
  },
  {
    question: "What is the most used programming language ?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "a",
  },
  {
    question: "What does HTML stands for ?",
    a: "Hyperlink Machine Language",
    b: "Hypertext Markup Language",
    c: "Hypotenuse Markup Language",
    d: "None of these",
    correct: "b",
  },
  {
    question: "What year was JavaScript launched ?",
    a: "2002",
    b: "2019",
    c: "2018",
    d: "None of these",
    correct: "d",
  },
  {
    question: "Who is prime minister of India ?",
    a: "Narenda Modi",
    b: "Amit Shah",
    c: "Rajnath Singh",
    d: "Manmohan Singh",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswer();

  const currentQuizData = quizData[currentQuiz];

  questionE1.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswer() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer == quizData[currentQuiz].correct) {
    score++;
  }

  currentQuiz++;

  if (answer) {
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answer correctly at 
      ${score}/${quizData.length} questions </h2>

      <button onclick="location.reload()">Reload</button>`;
    }
  }
});
