let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");

const randomChoice = () =>{
    const options =["rock" , "paper", "scissor"];
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
};

const choice = document.querySelectorAll(".choice");
const mssg = document.querySelector("#mssg");

       const userChoicepara =document.querySelector("#user");   
       const compChoicepara =document.querySelector("#computer"); 

const draw = () =>{
  
    mssg.innerText = "Game was draw. Play again!";
    mssg.style.backgroundColor = "yellow";
}

 const showwinner = (userwin) => {
    if(userwin){
        userScore++;
        userChoicepara.innerText = userScore;
        mssg.innerText = "You Win!";
        mssg.style.backgroundColor = "green";
    }else{
       computerScore++;
        compChoicepara.innerText= computerScore; 
        mssg.innerText = "You Lose!";
        mssg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
const computerChoice = randomChoice();
if(userChoice === computerChoice){
    draw();
}else{
    let userwin = true;
    if(userChoice === "rock") {
        userwin = computerChoice === "paper" ? false : true;
    }else if(userChoice === "paper"){
        userwin = computerChoice === "scissor" ? false : true;
    }else{
        userwin = computerChoice === "rock" ? false : true;
    }
        showwinner(userwin);
}
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});