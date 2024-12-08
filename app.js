let startButton = document.querySelector("#start")

let answerText = document.querySelector("#answer")

let answer = null

startButton.addEventListener("click", (event) => {
      answer = "CAT"
})

const letterButtons = document.querySelectorAll(".letters")

const answerLetters = document.querySelectorAll(".answer-letter")



letterButtons.forEach((letterButton)=>{
    letterButton.addEventListener("click", (event)=>{
        if (answer === null){
            return
        }
        checkLetter(event.target.innerText)
    })
}) 


function checkLetter(letter){
    for(let i = 0; i < answer.length; i++){
        if(answer[i] === letter){
            answerLetters[i].textContent = answer[i]
        }
    }

}


