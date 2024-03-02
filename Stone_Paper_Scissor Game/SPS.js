let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice = () =>{
    const options = ["stone","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const drawGame = () => {
    msg.innerText ="Game Draw!!";
    msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){ 
        userScore++; 
        userScorePara.innerText = userScore;
        msg.innerText =`You Win!! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText= compScore;
        msg.innerText =`You Lose!! ${userChoice} fails by ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
    console.log("userChoice = ",userChoice);
    // generate computer choice-> modular
    const compChoice = genCompChoice();
    console.log("compChoice = ",compChoice);
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "stone"){
            //scissor,paper
            userWin = compChoice === "paper"? false: true;
        }
        else if(userChoice==="paper"){
            //stone,scissor
            userWin = compChoice === "scissor"? false: true;
        }
        else{
            //stone,paper
            userWin = compChoice === "stone"? false: true;
        }
        showWinner(userWin,compChoice,userChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
