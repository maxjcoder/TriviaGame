const start = document.getElementById("start");

const quiz = document.getElementById("quiz");

const qImg = document.getElementById("questionImage");

const question = document.getElementById("question");

const counter = document.getElementById("counter");

const timeGuage = document.getElementById("timeGuage");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");

const progress = document.getElementById("progress");

const scoreContainer = document.getElementById("ScoreContainer");

var questions = [
    {
        question : "In what year did the original 'Psycho' get released in theaters?",
        imgSrc : "###",
        choiceA : "1960",
        choiceB : "1998",
        ChoiceC : "1972",
        correct : "A"
    },
    {
        question : "Who is the actor who first played the villian: 'Freddy Krueger' in the: Nightmare on Elm Street franchise?",
        imgSrc : "###",
        choiceA : "Brad Dourif",
        choiceB : "Kane Hodder",
        ChoiceC : "Robert Englund",
        correct : "C"
    }, 
    {
        question : "Which istallment of the Friday the 13th series introduced us to Jason Vorhees' infamous hockey mask?",
        imgSrc : "###",
        choiceA : "Part VIII: Jason Takes Manhattan",
        choiceB : "Part III: 3D",
        choiceC : "Part V: A New Blood",
        correct : "B"
    }, 
        questions[0].question,
        questions[0].imgSrc,
        questions[0].choiceA,
        questions[0].choiceB,
        questions[0].choiceC,
        questions[0].correct,
];
        var runningQuestionIndex = 0;

        function renderQuestion(){
            var q = questions[runningQuestionIndex];
            qImg.innerHTML = "<img src=" + q.imgSrc + ">";
            question.innerHTML = "<p>" +q.question+ "</p>";
            choiceA.innerHTML = q.choiceA;
            choiceB.innerHTML = q.choiceB;
            choiceC.innerHTML = q.choiceC;
        }

        runningQuestionIndex = 0;
        renderQuestion()

        runningQuestionIndex++
        renderQuestion()

        function progressRender(){
            for(var qIndex = 0; qIndex <= lastQuestionIndex; qIndex++){
            progress.innerHTML += "<div   id=" + qIndex + "></div>";
            }
        }


