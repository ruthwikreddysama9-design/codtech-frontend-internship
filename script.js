const questions = [
{
question: "What does HTML stand for?",
options: ["Hyper Text Markup Language","High Text Machine Language","Hyper Tool Multi Language","None"],
answer: 0
},
{
question: "Which language is used for styling?",
options: ["HTML","CSS","Python","Java"],
answer: 1
},
{
question: "Which language is used for web logic?",
options: ["C","JavaScript","SQL","PHP"],
answer: 1
}
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const options = document.querySelectorAll(".option");
const nextBtn = document.getElementById("next");
const scoreEl = document.getElementById("score");

function loadQuestion(){
let q = questions[currentQuestion];
questionEl.textContent = q.question;

options.forEach((btn,index)=>{
btn.textContent = q.options[index];
});
}

options.forEach((btn,index)=>{
btn.addEventListener("click",()=>{
if(index === questions[currentQuestion].answer){
score++;
alert("Correct Answer");
}
else{
alert("Wrong Answer");
}
});
});

nextBtn.addEventListener("click",()=>{
currentQuestion++;

if(currentQuestion < questions.length){
loadQuestion();
}
else{
scoreEl.textContent = "Your Score: " + score;
}
});

loadQuestion();