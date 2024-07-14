const questions=
[
        // this is index number 0 of questions array   
        {
            question:"Which is the largest animal in the world",
            answers:[
            {text:"Shark",correct:false},
            {text:"Blue whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Ziraff",correct:false}
            ]
        },
        //this is index number 1 of questions array
        {
            question:"Which is the smallest country in the world",
            answers:[
            {text:"Vetican city",correct:true},
            {text:"Bhutan",correct:false},
            {text:"Nepal",correct:false},
            {text:"Shri Lanka",correct:false}
            ]
        },

        // this is index number 2 of questions array
        {
            question:"Which is Capital of MadhayaPradesh",
            answers:[
            {text:"Nagpur",correct:false},
            {text:"Jabalpur",correct:false},
            {text:"Indore",correct:false},
            {text:"Bhopal",correct:true}
            ] 
            
        },

        // this is index number 3 of questions array
        {
            question:"Which is the smallest continent in the world",
            answers:[
            {text:"India",correct:false},
            {text:"Australia",correct:true},
            {text:"Urop",correct:false},
            {text:"Ingland",correct:false}
            ]
        }
];

// yaha par ham questionbutton,answerbutton or next button ko ek veriable me store kar lege

const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-button");
const nextButton=document.getElementById("next-btn");

// yaha par current questin or score ke veriable creat karege
let currentQuestionIndex=0;
let score=0;

// this is start quize
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();

}

// here define showQuestion funtion 
function showQuestion(){

    // yaha par vo sare button ko reset kar dege jo inner html me write ki gai thi
    resetState();
    // isse question show hoge
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo +". "+ currentQuestion.question;

    // isse answer option show hoge
    currentQuestion.answers.forEach(answer =>{
     const button=document.createElement("button");
     button.innerHTML=answer.text;
     button.classList.add("btn");
     answerButton.appendChild(button);
     if(answer.correct)
    {
        button.dataset.correct=answer.correct;
    }
     button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild)
    {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
  const selectedBtn=e.target;
  const isCorrect=selectedBtn.dataset.correct==="true";
  if(isCorrect)
{
    selectedBtn.classList.add("correct");
    score++;

}
else{
    selectedBtn.classList.add("incorrect");
}

Array.from(answerButton.children).forEach(button=>{
    if(button.dataset.correct==="true")
    {
        button.classList.add("correct");
    }
    button.disabled=true;
});
  nextButton.style.display="block";

}

// yaha par show score ke function define karege
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";

}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length)
    {
        showQuestion();
    }
    else{
        showScore();
    }
}

// yaha par next button ke liye code karege
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length)
    {
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();



