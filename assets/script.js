const questionText = document.getElementById('questions')
const falseBtn = document.getElementById('false')
const trueBtn = document.getElementById('true')

let questions = [
    {
        question: "Commonly used data types do NOT include:",
        answers: [
            {option: "Strings", answer: false},
            {option: "Booleons", answer: false},
            {option: "Alerts", answer: true},
            {option: "Numbers", answer: false},
        ]
    }
]

falseBtn.addEventListener('click', false)
trueBtn.addEventListener('click', true)

