function game(){
    let playerOneScore=0;
    let computerScore=0;
    let gameContinues=true
    console.log("Rock Paper Scissors")
    while (gameContinues){
        let computerSelection=getComputerChoice()
        let playerSelection=prompt("rock paper scissors").toLowerCase(); 
        if (playerSelection==computerSelection){
            console.log("its a draw")
        }else if (playerSelection =="rock"){
            if (computerSelection=="scissors"){
                console.log("player one won this round")
                playerOneScore+=1
            }else{
                console.log("computer won this round")
                computerScore+=1
            }
        }else if (playerSelection=="scissors"){
            if (computerSelection=="rock"){
                console.log("computer won this round")
                computerScore+=1
            }else {
                console.log("player one won this round")
                playerOneScore+=1
            }
        }else if (playerSelection=="paper"){
            if (computerSelection=="rock"){
                console.log("computer won this round")
                computerScore+=1
            }else{
                console.log("player one won this round")
            }
            }
        if (playerOneScore>=5){
            gameContinues=false
            console.log("Congrates player one won the game")
        }else if (computerScore>=5){
            gameContinues=false
            console.log("computer win the game ...!... ")
        }    
        
    
    }
    function getComputerChoice(){
        let computerChoice=Math.floor(Math.random()*10)+1;
        if (computerChoice>7){
            return ('rock')
        }else if(computerChoice<7 && computerChoice>4){
            return('paper')
        }else
            return ('scissors')
        }
}