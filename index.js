const quizData = [
    {
        question: "あ",
        a: "i",
        b: "o",
        c: "u",
        d: "a",
        correct: "d",
    },
    {
        question: "え",
        a: "a",
        b: "e",
        c: "i",
        d: "o",
        correct: "b",
    },
    {
        question: "い",
        a: "i",
        b: "u",
        c: "e",
        d: "a",
        correct: "a",
    },
    {
        question: "お",
        a: "a",
        b: "o",
        c: "i",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "う",
        a: "i",
        b: "u",
        c: "e",
        d: "a",
        correct: "b",
    },
    {
        question: "か",
        a: "ga",
        b: "gi",
        c: "ka",
        d: "ki",
        correct: "c",
    },
    {
        question: "き",
        a: "gi",
        b: "go",
        c: "ki",
        d: "ku",
        correct: "c",
    },
    {
        question: "く",
        a: "ku",
        b: "ka",
        c: "ga",
        d: "gi",
        correct: "a",
    },
    {
        question: "け",
        a: "ge",
        b: "ga",
        c: "ku",
        d: "ke",
        correct: "d",
    },
    {
        question: "こ",
        a: "i",
        b: "a",
        c: "ko",
        d: "ki",
        correct: "c",
    },
    {
        question: "ぎ",
        a: "gi",
        b: "gu",
        c: "ge",
        d: "ga",
        correct: "a",
    },
    {
        question: "ぐ",
        a: "ge",
        b: "gu",
        c: "gi",
        d: "ga",
        correct: "b",
    },
    {
        question: "ご",
        a: "ga",
        b: "ge",
        c: "gi",
        d: "go",
        correct: "d",
    },
    {
        question: "が",
        a: "ka",
        b: "ke",
        c: "ga",
        d: "gu",
        correct: "c",
    },
    {
        question: "げ",
        a: "ke",
        b: "gi",
        c: "ge",
        d: "ki",
        correct: "c",
    },
    {
        question: "うさちゃん",
        a: "cat",
        b: "dog",
        c: "bunny",
        d: "llama",
        correct: "c",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const questionNum = document.getElementById("question-num");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    questionNum.innerText = `Question: ${currentQuiz} / ${quizData.length}`;

    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
    let answer;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            if (score === quizData.length) {
                quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly! <i class="fas fa-heart"></i></h2>
                <button class="reload" onclick="location.reload()">Reload</button>
            `;
            } else {
                quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button class="reload" onclick="location.reload()">Reload</button>
            `;
                console.log(score, quizData.length);
            }
        }
    }
});
