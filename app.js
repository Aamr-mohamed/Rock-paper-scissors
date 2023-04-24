const keys=document.querySelectorAll('button');                                                      
let playerOneScore=0;
let computerScore=0;    
let result =""                                                       
console.log("Rock Paper Scissors")
function disableButtons() {
    keys.forEach(elem => {
        elem.disabled = true
    })
}
function playRound(playerSelection){
    let computerSelection=getComputerChoice()                  
    if (playerOneScore==5){
        result="Congrates player one won the game"
        console.log(result)
        return disableButtons()
    }else if (computerScore==5){
        result="computer win the game ...!... "
        console.log(result)
        return disableButtons()
    }                                                                     
    
    if (playerSelection==computerSelection){                                     
        console.log("its a draw")
    }else if (playerSelection =="rock"){
        if (computerSelection=="scissors"){
            playerOneScore+=1
            result=("you win"+playerSelection+"beats"+computerSelection+"The score is"+playerOneScore+"comp"+computerScore)
            console.log(result)
        }else{
            console.log("computer won this round")
            computerScore+=1
        }
    }else if (playerSelection=="scissors"){
        if (computerSelection=="rock"){
            console.log("computer won this round")
            computerScore+=1
        }else {
            playerOneScore+=1
            result=("you win "+ playerSelection +" beats "+ computerSelection +" The score is "+ playerOneScore +" comp "+ computerScore )
            console.log(result)

        }
    }else if (playerSelection=="paper"){
        if (computerSelection=="rock"){
            console.log("computer won this round")
            computerScore+=1
        }else{
            console.log("player one won this round")
        }
    }
    document.getElementById('result').textContent = result
    return
                
        
    
}
    /*function getComputerChoice(){                                                 //Computer random input function
        let computerChoice=Math.floor(Math.random()*10)+1;
        if (computerChoice>7){
            return ('rock')
        }else if(computerChoice<7 && computerChoice>4){
            return('paper')
        }else
            return ('scissors')
        }*/
function getComputerChoice(){
        const choices=['rock','paper','scissors']
        return choices[Math.floor(Math.random()*choices.length)];
}
keys.forEach(key=>{
    key.addEventListener('click', function(){
        playRound(key.value)
    })
})
/*const keys1=document.querySelector("#btn1");
keys1.addEventListener('click',()=>{return("rock")});
const keys2=document.querySelector("#btn2");
keys2.addEventListener('click',()=>{return ("paper")});
const keys3=document.querySelector("#btn3");
keys3.addEventListener('click',()=>{return ("scissors")});*/    
//key.addEventListener('click',()=>{return ("rock")})
    
    



    

