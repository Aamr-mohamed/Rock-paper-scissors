function getComputerChoice(){
    for(let i=0;i<=5;i++){
        let computerChoice=Math.floor(Math.random()*10)+1;
        if (computerChoice>7){
            return ('rock')
        }else if(computerChoice<7 && computerChoice>4){
            return('paper')
        }else
            return ('scissors')
    }
}


function firstRoundGame(playerSelection,computerSelection){ 
    if (playerSelection =="rock" && computerSelection =="scissors"){
        return ("player one won this round")
    }else if (playerSelection=="rock" && computerSelection=="paper"){
        return("player one won this round")
    }else if (playerSelection=="rock" &&computerSelection=="rock"){
        return("draw play again")
    }
}
let computerSelection=getComputerChoice()
let playerSelection="rock"
console.log(firstRoundGame(playerSelection,computerSelection))
