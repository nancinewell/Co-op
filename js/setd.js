let score = 0
let setD;
let startTime;
let endTime;
let totalTime;
let startLength;



function start(){
    //hide endgame, show game, hide start, reset feedback
    document.getElementById("endgame").className = "hidden";
    document.getElementById("game").className = "";
    document.getElementById("start").className = "hidden";
    document.getElementById("feedback").innerHTML = "";
    
    //reset score to 0;
    document.getElementById("score").innerHTML = "0";

    //reset setD
    setD = [[12,6],[6,12],[12,3],[3,12],[12,7],[7,12],[12,8],[8,12],[12,9],[9,12],[12,5],[5,12],[12,4],[4,12],[12,10],[10,12],[12,11],[11,12],[3,12],[12,3],[12,2],[2,12],[12,1],[1,12],[11,10],[10,11],[12,12],[12,12]];
    // setD = [[1,3],[10,8]];
    startLength = setD.length;
    //set the problem, set the date
    setProblem();
    let date = new Date();
    startTime = date.getTime();

    var inputText = document.getElementById("inAnswer");
        inputText.addEventListener("keyup", function(event) {
           if (event.keyCode === 13) {
              event.preventDefault();
              document.getElementById("check_answer").click();
           }
        });
}

function checkAnswer(){
    //gather info from HTML
    let inAnswer = document.getElementById("inAnswer").value;
    let num1 = document.getElementById("num1").innerHTML;
    let num2 = document.getElementById("num2").innerHTML;
    
    //parse info to integers
    let parsedNum1 = parseInt(num1);
    let parsedNum2 = parseInt(num2);
    let parsedAnswer = parseInt(inAnswer);

    //get answer to multiplication problem
    let answer = parsedNum1 * parsedNum2;

    //Act based on answer
    if(parsedAnswer == answer){
        //if correct, say so and up the score.
        document.getElementById("feedback").innerHTML = "Correct";
        score++;
        
        document.getElementById("score").innerHTML = score;
    } else {
        //if incorrect, say so.
        document.getElementById("feedback").innerHTML = parsedAnswer+" is incorrect. <br>"+num1+" x "+num2+" = "+answer;
    }

    setProblem();
}

function setProblem(){
    let setDlength = setD.length;

    if(setDlength == 0){
        //game over
        let date = new Date();
        endTime = date.getTime();
        totalTime = Math.trunc((endTime - startTime) / 1000);
        let scorePercent = score/startLength*100;
        //hide game
        document.getElementById("game").className = "hidden";

        //show endgame
        document.getElementById("endgame").className = "";

        //display time and score
        document.getElementById("endscore").innerHTML = scorePercent;
        document.getElementById("endtime").innerHTML = totalTime;
    } else {
        //get random index and set it to variables, then remove that index
        let randomNum = Math.floor(Math.random() * (setDlength-1));
        let num1 = setD[randomNum][0];
        let num2 = setD[randomNum][1];
        setD.splice(randomNum, 1);

        //set the numbers to the problem.
        document.getElementById("num1").innerHTML = num1;
        document.getElementById("num2").innerHTML = num2; 
        document.getElementById("inAnswer").value = "";
        document.getElementById("inAnswer").focus();
    }
}


