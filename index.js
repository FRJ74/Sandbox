/* Setting up variables */
const restartBtn = document.getElementById("restart");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const trueBtn = document.getElementById("True");
const falseBtn = document.getElementById("False");
const userScore = document.getElementById("user-score");
const totalScore = document.getElementById("total-score");
const questionText = document.getElementById("question-text")

/* Multidemtional arrays to prompts questions and track correct answeres*/
let currentQuestion = 0;
let score = 0;
 
let questions = [
   {
       question: "What is the hardest natural substance on Earth?",
       answers: [
           {option: "Diamond", answer: true},
           {option: "I don’t know.", answer: false},
       ]
   },
   {
       question: "Which is the main gas that makes up the Earth's atmosphere?",
       answers: [
           {option: "I don’t know", answer: false},
           {option: "Nitrogen", answer: true},
       ]
   },
   {
       question: "Roughly how long does it take for the sun's light to reach Earth - 8 minutes, 8 hours or 8 days?",
       answers: [
           {option: "I don't know",  answer: false},
           {option: "8 minutes", answer: true},
       ]
   }
]