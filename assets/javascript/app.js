// elements

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

// 13 spooky questions

var questions = [
    {
        question : "When was the original 'Psycho' released in theaters?",
        imgSrc : "assets/images/psycho.jpeg",
        choiceA : "1960",
        choiceB : "1998",
        choiceC : "1972",
        correct : "A"
    }, {
        question : "Who first played Freddy Krueger in 'A Nightmare on Elm Street'?",
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
        question : "In the film 'Child's Play', what brand of doll is Chucky?",
        imgSrc : "assets/images/chucky.jpg",
        choiceA : "My Buddy",
        choiceB : "Good Guys",
        choiceC : "Cabbage Patch",
        correct : "B"
    }, {
        question : "'Scream' is basically_____.",
        imgSrc : "assets/images/scream.jpg",
        choiceA : "a postmodern satire of '80s slasher flicks",
        choiceB : "a film that stars '90s heartthrobs, directed by Wes Craven",
        choiceC : "both answers are correct!",
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
        question : "Room _____ is the most terrifying room in the Overlook Hotel in 'The Shining' (1980).",
        imgSrc : "assets/images/shining.jpg",
        choiceA : "1987",
        choiceB : "237",
        choiceC : "1632",
        correct : "B"
    }, {
        question : "In 'Serial Mom', Beverly killed Ms. Jensen with _____.",
        imgSrc : "assets/images/beverly.jpg",
        choiceA : "a leg of lamb",
        choiceB : "a Fabergé egg",
        choiceC : "a fire poker",
        correct : "A"
    }, {
        question : "In the 'Terminator' series, when is Judgement Day?",
        imgSrc : "assets/images/t2.jpg",
        choiceA : "November 14, 2003",
        choiceB : "August 29, 1997 ",
        choiceC : "May 12, 1984",
        correct : "B"
    }, {
        question : "This actress first played the telekinetic lead role in Stephen King's 'Carrie'.",
        imgSrc : "assets/images/dirtypillows.jpg",
        choiceA : "Sissy Spacek",
        choiceB : "Lindsay Lohan",
        choiceC : "Emma Stone",
        correct : "A"
    }, {
        question : "It could be the most dangerous projectile, and you may have had it for lunch ('...ahem, Regan!'). Is it____?",
        imgSrc : "assets/images/exorcist.gif",
        choiceA : "spinach & artichoke dip",
        choiceB : "lime Jello",
        choiceC : "pea soup",
        correct : "C"
    },
];

// variables and timer length

const lastQuestion = questions.length - 1;
var runningQuestion = 0;
var count = 0;
const questionTime = 15; // 15s (for some longer questions)
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
var TIMER;
var score = 0;

// display questions

function renderQuestion(){
    var q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// begin quiz

function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// show progress

function renderProgress(){
    for(var qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// show counter

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }
    else{
        count = 0;
        // change progress color, red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }
        else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// check answer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){

        // answer is correct
        score++;

        // change color, green
        answerIsCorrect();
    }
    else{
        // answer is wrong
        // change color to red

        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }
    else{
        // end the quiz, show the score
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

// show score

function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate percentage of questions answered by player

    const scorePerCent = Math.round(100 * score/questions.length);
    
    // show a grade image based on the score percentage, (Ternary Operator, thank you W3Schools!), let's grade this bitch

    var img = (scorePerCent >= 80) ? "assets/images/5.png" :
              (scorePerCent >= 60) ? "assets/images/4.png" :
              (scorePerCent >= 40) ? "assets/images/3.png" :
              (scorePerCent >= 20) ? "assets/images/2.png" :
              "assets/images/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}
