// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
var questions = [
    {
        question : "When was the original 'Psycho' released in theaters?",
        imgSrc : "assets/images/psycho.jpeg",
        choiceA : "1960",
        choiceB : "1998",
        choiceC : "1972",
        correct : "A"
    }, {
        question : "Who first played 'Freddy Krueger' in 'A Nightmare on Elm Street'?",
        imgSrc : "assets/images/nightmare.jpg",
        choiceA : "Brad Dourif",
        choiceB : "Kane Hodder",
        choiceC : "Robert Englund",
        correct : "C"
    }, {
        question : "Which 'Friday the 13th' film introduced Jason Vorhees' iconic hockey mask?",
        imgSrc : "assets/images/jason.jpg",
        choiceA : "Part VIII: Jason Takes Manhattan",
        choiceB : "Part III: 3D",
        choiceC : "Part V: A New Blood",
        correct : "B"
    }, {
        question : "In 'Child's Play', what's the toy line that made the 'Chucky' dolls?",
        imgSrc : "assets/images/chucky.jpg",
        choiceA : "My Buddy",
        choiceB : "Good Guys",
        choiceC : "Cabbage Patch",
        correct : "B"
    }, {
        question : "In 'Serial Mom', Beverly killed Ms. Jensen with _____.",
        imgSrc : "assets/images/beverly.jpg",
        choiceA : "a leg of lamb",
        choiceB : "a Fabergé egg",
        choiceC : "a fire poker",
        correct : "A"
    }, {
        question : "'Scream' is basically_____.",
        imgSrc : "assets/images/scream.jpg",
        choiceA : "a postmodern satire of '80s slasher flicks",
        choiceB : "a film that stars '90s heartthrobs, directed by Wes Craven",
        choiceC : "a & b (all of the above)",
        correct : "C"
    }, {
        question : "This 1922 film introduced the vampire to the big screen.",
        imgSrc : "assets/images/vampire.jpg",
        choiceA : "The Cabinet of Dr. Caligari",
        choiceB : "Nosferatu",
        choiceC : "Dracula",
        correct : "B"
    }, {
        question : "Which 'Halloween' film had nothing to do with the Micahel Meyers saga.",
        imgSrc : "assets/images/pumpkin.jpg",
        choiceA : "Halloween 3: Season of the Witch",
        choiceB : "Halloween H20",
        choiceC : "Halloween Resurrection",
        correct : "A"
    }, {
        question : "(The 'Poltergeist' Curse) centers on the deaths of two young cast members, ___ & ___, during the 6 years between the releases of the 1st & 3rd films.",
        imgSrc : "assets/images/poltergeist.jpeg",
        choiceA : "River Phoenix, Brandon Lee",
        choiceB : "Brittany Murphy, Gilda Radner",
        choiceC : "Heather O'Rourke, Dominique Dunne",
        correct : "C"
    }, {
        question : "'Room ____' is the most terrifying room in the Overlook Hotel in 'The Shining' (1980).",
        imgSrc : "assets/images/poltergeist.jpeg",
        choiceA : "1987",
        choiceB : "237",
        choiceC : "1632",
        correct : "B"
    },
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 15; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    var img = (scorePerCent >= 80) ? "assets/images/5.png" :
              (scorePerCent >= 60) ? "assets/images/4.png" :
              (scorePerCent >= 40) ? "assets/images/3.png" :
              (scorePerCent >= 20) ? "assets/images/2.png" :
              "assets/images/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}
