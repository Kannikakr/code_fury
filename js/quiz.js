const questions = [
    {
        question: "What is the safest place to be during an earthquake?",
        answers: [
            { text: "Under a study stable ", correct: true },
            { text: "In a door way", correct: false },
            { text: "Near a window", correct: false },
            { text: "In an openfield", correct: false }
        ]
    },
    {
        question: "What should you do if you are in a vehice during an earthquake?",
        answers: [
            { text: "Get out and run", correct: false },
            { text: "Stay in the vehicle and drive away", correct: false },
            { text: "Stay in the vehicle and keep your seatbelt on", correct: true },
            { text: "Call for help", correct: false }
        ]
    },
    {
        question: "What is the primary cause of death during a hurricane?",
        answers: [
            { text: "Storm surge", correct: true },
            { text: "Wind", correct: false },
            { text: "Flooding", correct: false },
            { text: "Lightning", correct: false }
        ]
    },
    {
        question: "What is the safest place during a tornado?",
        answers: [
            { text: "In a basement", correct: true },
            { text: "In a interior room or hallway", correct: false },
            { text: "Under a study table", correct: false },
            { text: "In a vehicle", correct: false }
        ]
    },{
        question: "What is the important thing to have during a disaster?",
        answers: [
            { text: "Food and water", correct: false },
            { text: "First aid kit", correct: false },
            { text: "Flashlight and radio", correct: false },
            { text: "A plan", correct: true }
        ]
    },{
        question: "What should you do if you are separated from your family during a disaster?",
        answers: [
            { text: "Try to find them immediately", correct: false },
            { text: "Stay where you are and wait for them to find you", correct: false},
            { text: "Go to designated place meeting point", correct: true},
            { text: "Call for help", correct: false }
        ]
    },{
        question: "What is the best way to prevent wildfires?",
        answers: [
            { text: "By having a fire extinguisher", correct: false },
            { text: "By being careful with fire", correct: true },
            { text: "By having a firebreak", correct: false },
            { text: "By reporting unattended fires", correct: false }
        ]
    },{
        question: "What is the common hazard duirng a volcanic eruption?",
        answers: [
            { text: "Lava flows", correct: false },
            { text: "Ashfall", correct: true },
            { text: "Pyrocasic flows", correct: false },
            { text: "Lahars", correct: false }
        ]
    },{
        question: "What is the most common cause of landslides?",
        answers: [
            { text: "Heavy rainfall", correct: true },
            { text: "Earthquakes", correct: false },
            { text: "Volcanic eruptions", correct: false },
            { text: "Storms", correct: false }
        ]
    },{
        question: "What is the most common cause for tsunamis?",
        answers: [
            { text: "Earthquakes", correct: true },
            { text: "Volcanic eruptions", correct: false },
            { text: "Landslides", correct: false },
            { text: "Storms", correct: false }
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionsIndex = 0;
let score = 0;

function startQuiz()  {
    currentQuestionsIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionsIndex];
    let questionNo = currentQuestionsIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn"); // Corrected class name
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState() {
    nextButton.style.display = 'none'
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect"); 
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = 'Play Again'
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionsIndex++;
    if (currentQuestionsIndex < questions.length) {
        showQuestion();

    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionsIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();
