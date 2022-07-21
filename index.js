// Your Code Here
let userName = window.prompt(`Please enter your name`)
let userScore = 0
let playAgain = true

function playGame(){
for (let i = 0; i<questions.length;i++){
    let question = questions[i]
    let userAnswer = window.prompt(question.text)
    if(userAnswer.toLowerCase() === question.correctAnswer.toLowerCase()){
        userScore=userScore+10

    }
}
window.alert(`your score is `+userScore)
}

while (playAgain === true){
    playGame()
    let userChoice = window.prompt(`do you want to play the game again? Yes or No`)
    if(userChoice === `yes`){
        playAgain = true
    } else {
        playAgain = false
        window.alert(`thanks for playing `+userName)
    }
}
