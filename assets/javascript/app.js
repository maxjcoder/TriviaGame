
var questions = [
{ 
    prompt: "What year did the original 'Psycho' get released?\n(a) 1960\n\ (b) 1992\n(c) 1984", 
    answer: "a"
},
{
    prompt: "Who is the actor who first played the villian: 'Freddy Krueger' in the: Nightmare on Elm Street franchise?\n(a) Brad Dourif\n\ (b) Kane Hodder\n(c) Robert Englund",
    answer: "c"
},
{
    prompt: "Which istallment of the Friday the 13th series introduced us to Jason Vorhees' infamous hockey mask?\n(a) Part VIII: Jason Takes Manhattan\n\ (b) Part III: 3D\n(c) Part V: A New Blood",
    answer: "b"
},
]

var score = 0;

for(var i=0; i < questions.length; i++) {
    var response = window.prompt(questions[i].prompt);
    if(response == questions [i].answer){
        score++;
        alert("Correct!");
    } else {
        alert("INCORRECT!");
    }
}
alert("you got " + score + "/" + questions.length);